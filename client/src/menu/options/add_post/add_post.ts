import { add_new_post } from "../../../api/add_post";
import { clear, print, printNewLine, prompt } from "../../../ui/console";
import { returnToMainMenu } from "../../menu";

export async function addPost(): Promise<void> {
	clear();

	const title = await prompt("What is the post's title? ");
	printNewLine();
	const text = await prompt("What is the post's text? ");
	printNewLine();
	const author = await prompt("What is the post's author? ");

	printNewLine();
	print(`📨 Adding new post "${title}"...`);

	const post = await add_new_post(title, text, author);

	if (post) print(`🥳 Post ${post.title} added successfully!`);
	else print("😵 Post NOT added.");

	await returnToMainMenu();
}
