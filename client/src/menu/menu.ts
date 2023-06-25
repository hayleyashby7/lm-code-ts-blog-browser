import { States } from "../states/states";
import { clear, print, printNewLine, prompt } from "../ui/console";

type menuOption = { id: number; description: string; action: () => States };

const menuOptions: menuOption[] = [
	{
		id: 0,
		description: "Send Server Message",
		action: () => {
			return "SEND_MESSAGE";
		},
	},
	{
		id: 1,
		description: "Show all posts",
		action: () => {
			return "SHOW_POSTS";
		},
	},
	{
		id: 2,
		description: "Show all users",
		action: () => {
			return "SHOW_USERS";
		},
	},
	{
		id: 3,
		description: "Browse posts",
		action: () => {
			return "BROWSE_POSTS";
		},
	},
	{
		id: 4,
		description: "Browse users",
		action: () => {
			return "BROWSE_USERS";
		},
	},
	{
		id: 5,
		description: "Add post",
		action: () => {
			return "ADD_POST";
		},
	},
	{
		id: 6,
		description: "Add user",
		action: () => {
			return "ADD_USER";
		},
	},
];

export async function showMenu(): Promise<States> {
	clear();
	menuOptions.forEach((option) =>
		print(`${option.id}. ${option.description}`, false)
	);
	printNewLine();

	const result = await prompt("What shall we do? ");

	const option = menuOptions.find((option) => option.id.toString() === result);

	if (option) return option.action();

	return "UNKNOWN";
}

export async function returnToMainMenu() {
	printNewLine();

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
}
