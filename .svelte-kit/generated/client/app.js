export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8')
];

export const server_loads = [0,2];

export const dictionary = {
		"/(app)": [3,[2]],
		"/(app)/hello": [4,[2]],
		"/(auth)/login": [~6],
		"/(auth)/logout": [~7],
		"/(auth)/register": [~8],
		"/(app)/settings": [5,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';