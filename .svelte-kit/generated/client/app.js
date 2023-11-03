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
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14')
];

export const server_loads = [0,2,3];

export const dictionary = {
		"/(app)": [4,[2]],
		"/(app)/chatrooms": [~5,[2]],
		"/(app)/chatrooms/create.backup": [~8,[2]],
		"/(app)/chatrooms/create": [~7,[2]],
		"/(app)/chatrooms/[slug]": [~6,[2]],
		"/(app)/directMessage": [9,[2,3]],
		"/(app)/friends": [~10,[2]],
		"/(auth)/login": [~12],
		"/(auth)/logout": [~13],
		"/(auth)/register": [~14],
		"/(app)/settings": [~11,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';