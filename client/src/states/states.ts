const states ={
	MENU: "MENU",
	SEND_MESSAGE: "SEND_MESSAGE",
	SHOW_POSTS: "SHOW_POSTS",
	SHOW_USERS: "SHOW_USERS",
	BROWSE_POSTS: "BROWSE_POSTS",
	ADD_USER: "ADD_USER",
	UNKNOWN: "UNKNOWN",
} as const;

export type States = typeof states[keyof typeof states];

