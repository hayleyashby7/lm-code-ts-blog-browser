const states = {
	MENU: "MENU",
	UNKNOWN: "UNKNOWN",
	DEFAULT: "DEFAULT",
} as const;

export type States = typeof states[keyof typeof states];
