const states = {
	MENU: "MENU",
	UNKNOWN: "UNKNOWN",
	EXIT: "EXIT",
	DEFAULT: "DEFAULT",
} as const;

export type States = typeof states[keyof typeof states];
