const states = {
	MENU: "MENU",
	SEND_MESSAGE: "SEND_MESSAGE",
	SHOW_POSTS: "SHOW_POSTS",
	SHOW_USERS: "SHOW_USERS",
	BROWSE_POSTS: "BROWSE_POSTS",
	BROWSE_USERS: "BROWSE_USERS",
	ADD_USER: "ADD_USER",
	UNKNOWN: "UNKNOWN",
	DEFAULT: "DEFAULT",
} as const;

export type States = typeof states[keyof typeof states];
