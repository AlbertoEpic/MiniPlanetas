// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
	site: 'https://albertoepic.github.io',
	base: isProd ? '/MINIPLANETAS' : '/',
});
