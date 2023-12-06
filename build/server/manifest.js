const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.92e3252b.js","app":"_app/immutable/entry/app.9e5891d5.js","imports":["_app/immutable/entry/start.92e3252b.js","_app/immutable/chunks/index.229400e6.js","_app/immutable/chunks/singletons.dd9c9a0a.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.9e5891d5.js","_app/immutable/chunks/index.229400e6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-17acda9e.js')),
			__memo(() => import('./chunks/1-222faf7d.js')),
			__memo(() => import('./chunks/2-f8e87467.js')),
			__memo(() => import('./chunks/3-a9d2dd7e.js')),
			__memo(() => import('./chunks/4-583d2927.js')),
			__memo(() => import('./chunks/5-87b57963.js')),
			__memo(() => import('./chunks/6-2fcbce00.js')),
			__memo(() => import('./chunks/7-e3bad577.js')),
			__memo(() => import('./chunks/8-40e6fa8d.js')),
			__memo(() => import('./chunks/9-492eee0e.js')),
			__memo(() => import('./chunks/10-c2b672ef.js')),
			__memo(() => import('./chunks/11-cf200036.js')),
			__memo(() => import('./chunks/12-38f6e9fe.js')),
			__memo(() => import('./chunks/13-34102520.js')),
			__memo(() => import('./chunks/14-ba19cc51.js')),
			__memo(() => import('./chunks/15-9138d8f8.js')),
			__memo(() => import('./chunks/16-9505f366.js')),
			__memo(() => import('./chunks/17-c8bbb035.js')),
			__memo(() => import('./chunks/18-f026ab19.js')),
			__memo(() => import('./chunks/19-9d60a50f.js'))
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(app)/api/createRoom",
				pattern: /^\/api\/createRoom\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-e0c86556.js'))
			},
			{
				id: "/(app)/api/searchFriend",
				pattern: /^\/api\/searchFriend\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-e34f9098.js'))
			},
			{
				id: "/(app)/api/searchUser",
				pattern: /^\/api\/searchUser\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-8255869f.js'))
			},
			{
				id: "/(app)/chatrooms",
				pattern: /^\/chatrooms\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(app)/chatrooms/create.backup",
				pattern: /^\/chatrooms\/create\.backup\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(app)/chatrooms/create",
				pattern: /^\/chatrooms\/create\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(app)/chatrooms/[slug]",
				pattern: /^\/chatrooms\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(app)/chatrooms/[slug]/edit",
				pattern: /^\/chatrooms\/([^/]+?)\/edit\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(app)/directMessage",
				pattern: /^\/directMessage\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(app)/friends",
				pattern: /^\/friends\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(app)/globalChat",
				pattern: /^\/globalChat\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(auth)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(auth)/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(app)/notifications",
				pattern: /^\/notifications\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(app)/notifications/[slug]",
				pattern: /^\/notifications\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(auth)/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(app)/sendNot",
				pattern: /^\/sendNot\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(app)/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
