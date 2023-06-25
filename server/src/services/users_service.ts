import { User } from "../types/posts.types";

const users: User[] = [
	{
		id: "1",
		name: "Spicy Hotfish",
		creationDate: new Date(),
	},
	{
		id: "2",
		name: "Sally-Anne Writerperson",
		creationDate: new Date(),
	},
	{
		id: "3",
		name: "Jimmy Alias",
		creationDate: new Date(),
	},
	{
		id: "4",
		name: 'Steve "The Hoop" Hooper',
		creationDate: new Date(),
	},
];

export function getAllUsers(): User[] {
	return users;
}

export function getUserByID(id: string): User | undefined {
	return users.find((user) => user.id === id);
}

export function addUser(name: string) {
	const newUser: User = {
		id: `${users.length + 1}`,
		name: name,
		creationDate: new Date(),
	};

	users.push(newUser);

	return newUser;
}

export const userNameExists = (name: string): User | undefined =>
	users.find((user) => user.name.toLowerCase() === name.toLowerCase());
