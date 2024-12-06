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
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10')
];

export const server_loads = [0,2];

export const dictionary = {
		"/(app)": [3,[2]],
		"/(app)/chatroom": [~4,[2]],
		"/(app)/chatroom/[slug]": [5,[2]],
		"/(app)/hello": [6,[2]],
		"/(auth)/login": [~8],
		"/(auth)/logout": [~9],
		"/(auth)/register": [~10],
		"/(app)/settings": [7,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';