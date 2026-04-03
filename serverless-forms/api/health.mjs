import { handleLikesRequest } from '../likes-handler.mjs';

export default async function handler(req, res) {
  return handleLikesRequest(req, res);
}
