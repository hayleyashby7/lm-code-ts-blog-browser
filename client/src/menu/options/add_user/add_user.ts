import { add_new_user } from "../../../api/add_user";
import { clear, print, printNewLine, prompt } from "../../../ui/console";
import { returnToMainMenu } from "../../menu";

export async function addUser(): Promise<void> {
	clear();

	const user = await prompt("What is the user's name? ");

	printNewLine();
	print(`📨 Adding user "${user}"...`);

	const success = await add_new_user(user);

	if (success === true) print("🥳 User added successfully!");
	else print("😵 User NOT added.");

	await returnToMainMenu();
}
