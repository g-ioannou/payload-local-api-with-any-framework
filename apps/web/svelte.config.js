import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	build: {
		commonjsOptions: {
			dynamicRequireTargets: [`@img/sharp-darwin-arm64`, `@libsql/darwin-arm64`],
		}
	},
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter()
	}
};

export default config;
