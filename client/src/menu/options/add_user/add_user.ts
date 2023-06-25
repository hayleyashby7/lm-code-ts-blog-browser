import { add_new_user } from "../../../api/add_user";
import { clear, print, printNewLine, prompt } from "../../../ui/console";
import { returnToMainMenu, menuOption } from "../../menu";
import { inputValidator } from "../utils/input";

const validNameRegEx = /([A-Z])+ ?([A-Z-])+ ?([A-Z]?)+/i;

export const addUserOption = (id: number): menuOption => {
	const option: menuOption = {
		id: id,
		description: "Add user",
		action: () => {
			return addUser();
		},
	};

	return option;
};

export async function addUser(): Promise<void> {
	clear();

	const name = await prompt("What is the user's name? ");

	if (!inputValidator(name, validNameRegEx)) {
		print("🚨 Invalid name! 🚨");
		await returnToMainMenu();
		return;
	}

	printNewLine();
	print(`📨 Adding user "${name}"...`);

	const user = await add_new_user(name);

	if (user) print(`🥳 User ${user.name} added successfully!`);
	else print("😵 User NOT added.");

	await returnToMainMenu();
}
