import process from 'node:process';
import { Redis as UpstashRedis } from '@upstash/redis';
import { createClient } from 'redis';

const VALKEY_URL = process.env.VALKEY_URL?.trim() || '';
const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL?.trim() || '';
const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN?.trim() || '';
const KEY_PREFIX = process.env.VALKEY_KEY_PREFIX?.trim() || 'miniplanetas:likes';

const memoryStore = new Map();

const valkeyClient = VALKEY_URL
  ? createClient({
      url: VALKEY_URL,
      socket: {
        reconnectStrategy: (retries) => Math.min(retries * 50, 500),
      },
    })
  : null;

const upstashClient = !VALKEY_URL && UPSTASH_REDIS_REST_URL && UPSTASH_REDIS_REST_TOKEN
  ? new UpstashRedis({
      url: UPSTASH_REDIS_REST_URL,
      token: UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

valkeyClient?.on('error', (error) => {
  console.error('[likes-api] Valkey error:', error.message);
});

const resolveBackendName = () => {
  if (valkeyClient) {
    return 'valkey';
  }

  if (upstashClient) {
    return 'upstash';
  }

  return 'memory';
};

const ensureValkey = async () => {
  if (!valkeyClient) {
    return null;
  }

  if (!valkeyClient.isOpen) {
    await valkeyClient.connect();
  }

  return valkeyClient;
};

const getSetKey = (slug) => `${KEY_PREFIX}:${slug}:users`;

const toLikedBoolean = (value) => value === true || value === 1 || value === '1';

export const getActiveLikesBackendName = () => resolveBackendName();

export const getLikeState = async (slug, visitorId) => {
  const backend = resolveBackendName();

  if (backend === 'valkey') {
    const client = await ensureValkey();
    const key = getSetKey(slug);
    const [count, liked] = await Promise.all([
      client.sCard(key),
      visitorId ? client.sIsMember(key, visitorId) : Promise.resolve(false),
    ]);

    return {
      count: Number(count) || 0,
      liked: Boolean(liked),
    };
  }

  if (backend === 'upstash') {
    const key = getSetKey(slug);
    const [count, liked] = await Promise.all([
      upstashClient.scard(key),
      visitorId ? upstashClient.sismember(key, visitorId) : Promise.resolve(0),
    ]);

    return {
      count: Number(count) || 0,
      liked: toLikedBoolean(liked),
    };
  }

  const users = memoryStore.get(slug) || new Set();
  return {
    count: users.size,
    liked: visitorId ? users.has(visitorId) : false,
  };
};

export const setLikeState = async (slug, visitorId, liked) => {
  if (!visitorId) {
    throw new Error('visitorId is required');
  }

  const backend = resolveBackendName();

  if (backend === 'valkey') {
    const client = await ensureValkey();
    const key = getSetKey(slug);

    if (liked) {
      await client.sAdd(key, visitorId);
    } else {
      await client.sRem(key, visitorId);
    }

    const count = Number(await client.sCard(key)) || 0;
    return { count, liked };
  }

  if (backend === 'upstash') {
    const key = getSetKey(slug);

    if (liked) {
      await upstashClient.sadd(key, visitorId);
    } else {
      await upstashClient.srem(key, visitorId);
    }

    const count = Number(await upstashClient.scard(key)) || 0;
    return { count, liked };
  }

  const users = memoryStore.get(slug) || new Set();
  if (liked) {
    users.add(visitorId);
  } else {
    users.delete(visitorId);
  }

  if (users.size > 0) {
    memoryStore.set(slug, users);
  } else {
    memoryStore.delete(slug);
  }

  return { count: users.size, liked };
};

export const shutdownLikesBackend = async () => {
  if (valkeyClient?.isOpen) {
    await valkeyClient.quit();
  }
};
