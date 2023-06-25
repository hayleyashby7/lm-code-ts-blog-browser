import { States } from "../states/states";
import { clear, print, printNewLine, prompt } from "../ui/console";
import { addPostOption } from "./options/add_post/add_post";
import { addUserOption } from "./options/add_user/add_user";
import { addBrowsePostsOption } from "./options/browse_posts/browse_posts";
import { addBrowseUsersOption } from "./options/browse_users/browse_users";
import { addSendMessageOption } from "./options/send_message/send_message";
import { addAllPostsOption } from "./options/show_all_posts/show_all_posts";
import { addAllUsersOption } from "./options/show_all_users/show_all_users";

export type menuOption = {
	id: number;
	description: string;
	action: () => Promise<void>;
};

const menuOptions: menuOption[] = [];

export const setupMenu = () => {
	menuOptions.push(addSendMessageOption(0));
	menuOptions.push(addAllPostsOption(1));
	menuOptions.push(addAllUsersOption(2));
	menuOptions.push(addBrowsePostsOption(3));
	menuOptions.push(addBrowseUsersOption(4));
	menuOptions.push(addPostOption(5));
	menuOptions.push(addUserOption(6));
};

export async function showMenu(): Promise<States> {
	if (!menuOptions.length) setupMenu();

	clear();

	printMenu();

	const result = await prompt("What shall we do? ");

	if (result.toUpperCase() === "X") return "EXIT";

	const option = findOption(result);

	if (!option) return "UNKNOWN";

	await option.action();

	return "MENU";
}

export async function returnToMainMenu() {
	printNewLine();

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
}

const printMenu = (): void => {
	menuOptions.forEach((option) =>
		print(`${option.id}. ${option.description}`, false)
	);
	printNewLine();

	print("Press X to exit", true);
};

const findOption = (id: string): menuOption | undefined =>
	menuOptions.find((option) => option.id.toString() === id);
