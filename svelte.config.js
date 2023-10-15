import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

let filePath = import.meta.url.split('/');
filePath.pop();
filePath.push('src');
filePath = filePath.join('/');

const config = {
	preprocess: [
		preprocess({
			scss: {
				prependData: `@import '${filePath}/global.scss';`
			}
		})
	],
	kit: {
		adapter: adapter({
			edge: false,
			split: false
		})
	}
};

export default config;
