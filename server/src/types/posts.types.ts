export type User = {
	id: string;
	name: string;
	creationDate: Date;
};

// Sett  to undefined to manage the slightly dodgy way we're handling the post storage for this assignment
export type Post = {
	id: string;
	title: string;
	text: string;
	author: User | undefined;
};
