import process from 'node:process';
import {
  getActiveLikesBackendName,
  getLikeState,
  setLikeState,
  shutdownLikesBackend,
} from './likes-service.mjs';

const PORT = Number(process.env.PORT || 8787);
const allowedOrigins = (process.env.CORS_ORIGIN || '*')
  .split(',')
  .map((value) => value.trim())
  .filter(Boolean);

const resolveOrigin = (origin = '') => {
  if (allowedOrigins.includes('*')) {
    return '*';
  }

  if (origin && allowedOrigins.includes(origin)) {
    return origin;
  }

  return allowedOrigins[0] || '*';
};

const sendJson = (res, statusCode, payload, origin = '*') => {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
    'Cache-Control': 'no-store',
  });
  res.end(JSON.stringify(payload));
};

const sanitizeSlug = (slug = '') => {
  const normalized = String(slug).trim().toLowerCase();
  return /^[a-z0-9-]{3,120}$/.test(normalized) ? normalized : null;
};

const sanitizeVisitorId = (visitorId = '') => {
  const normalized = String(visitorId).trim();
  return /^[a-zA-Z0-9:_-]{8,120}$/.test(normalized) ? normalized : null;
};

const readRawBody = (req) =>
  new Promise((resolve, reject) => {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error('Payload too large'));
        req.destroy();
      }
    });

    req.on('end', () => resolve(body));
    req.on('error', reject);
  });

const readJsonBody = async (req) => {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }

  if (typeof req.body === 'string' && req.body.length > 0) {
    return JSON.parse(req.body);
  }

  const rawBody = await readRawBody(req);
  return rawBody ? JSON.parse(rawBody) : {};
};

export { getActiveLikesBackendName, shutdownLikesBackend };

export const handleLikesRequest = async (req, res) => {
  const origin = resolveOrigin(req.headers?.origin || '');
  const requestUrl = new URL(req.url || '/', `http://${req.headers?.host || `127.0.0.1:${PORT}`}`);
  const normalizedPath = requestUrl.pathname.replace(/\/+$/, '') || '/';

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      Vary: 'Origin',
    });
    res.end();
    return;
  }

  if (normalizedPath === '/health' || normalizedPath === '/api/health') {
    sendJson(res, 200, { ok: true, backend: getActiveLikesBackendName() }, origin);
    return;
  }

  if (normalizedPath !== '/likes' && normalizedPath !== '/api/likes') {
    sendJson(res, 404, { error: 'Not found' }, origin);
    return;
  }

  try {
    if (req.method === 'GET') {
      const slug = sanitizeSlug(requestUrl.searchParams.get('slug') || '');
      const visitorId = sanitizeVisitorId(requestUrl.searchParams.get('visitorId') || '');

      if (!slug) {
        sendJson(res, 400, { error: 'Invalid slug' }, origin);
        return;
      }

      const state = await getLikeState(slug, visitorId);
      sendJson(res, 200, { slug, ...state, backend: getActiveLikesBackendName() }, origin);
      return;
    }

    if (req.method === 'POST') {
      const payload = await readJsonBody(req);
      const slug = sanitizeSlug(payload.slug || '');
      const visitorId = sanitizeVisitorId(payload.visitorId || '');
      const liked = Boolean(payload.liked);

      if (!slug || !visitorId) {
        sendJson(res, 400, { error: 'slug and visitorId are required' }, origin);
        return;
      }

      const state = await setLikeState(slug, visitorId, liked);
      sendJson(res, 200, { slug, ...state, backend: getActiveLikesBackendName() }, origin);
      return;
    }

    sendJson(res, 405, { error: 'Method not allowed' }, origin);
  } catch (error) {
    console.error('[likes-api]', error);
    sendJson(res, 500, { error: 'Internal server error' }, origin);
  }
};
