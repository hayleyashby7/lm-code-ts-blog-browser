import { add_new_post } from "../../../api/add_post";
import { clear, print, printNewLine, prompt } from "../../../ui/console";
import { returnToMainMenu, menuOption } from "../../menu";
import { inputValidator } from "../utils/input";

const validNameRegEx = /([A-Z])+ ?([A-Z-])+ ?([A-Z]?)+/i;
const validTextRegEx = /^(?!\s*$).+/;

export const addPostOption = (id: number): menuOption => {
	const option: menuOption = {
		id: id,
		description: "Add post",
		action: () => {
			return addPost();
		},
	};

	return option;
};

export async function addPost(): Promise<void> {
	clear();

	const title = await prompt("What is the post's title? ");
	if (!inputValidator(title, validTextRegEx)) {
		print("🚨 Invalid title! 🚨");
		await returnToMainMenu();
		return;
	}
	printNewLine();

	const text = await prompt("What is the post's text? ");
	if (!inputValidator(text, validTextRegEx)) {
		print("🚨 Invalid text! 🚨");
		await returnToMainMenu();
		return;
	}
	printNewLine();

	const author = await prompt("What is the post's author? ");
	if (!inputValidator(author, validNameRegEx)) {
		print("🚨 Invalid author! 🚨");
		await returnToMainMenu();
		return;
	}
	printNewLine();
	print(`📨 Adding new post "${title}"...`);

	const post = await add_new_post(title, text, author);

	if (post) print(`🥳 Post ${post.title} added successfully!`);
	else print("😵 Post NOT added.");

	await returnToMainMenu();
}
