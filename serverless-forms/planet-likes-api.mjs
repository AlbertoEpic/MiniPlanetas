import http from 'node:http';
import process from 'node:process';
import {
  getActiveLikesBackendName,
  handleLikesRequest,
  shutdownLikesBackend,
} from './likes-handler.mjs';

const PORT = Number(process.env.PORT || 8787);

const server = http.createServer((req, res) => {
  void handleLikesRequest(req, res);
});

server.listen(PORT, () => {
  const backend = getActiveLikesBackendName();
  console.log(`[likes-api] ready on http://127.0.0.1:${PORT} using ${backend} backend`);

  if (backend === 'memory') {
    console.log('[likes-api] Define VALKEY_URL or UPSTASH_REDIS_REST_* to persist the counter in production.');
  }
});

const shutdown = async () => {
  try {
    await shutdownLikesBackend();
  } finally {
    server.close(() => process.exit(0));
  }
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
