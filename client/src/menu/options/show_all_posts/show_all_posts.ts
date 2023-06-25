import { fetchAllPosts } from "../../../api/fetch_all_posts";
import { clear, print, printNewLine } from "../../../ui/console";
import { returnToMainMenu, menuOption } from "../../menu";

export const addAllPostsOption = (id: number): menuOption => {
	const option: menuOption = {
		id: id,
		description: "Show all posts",
		action: () => {
			return showAllPosts();
		},
	};

	return option;
};

export async function showAllPosts(): Promise<void> {
	clear(true);

	printNewLine();

	print("📨 Fetching posts...");

	const result = await fetchAllPosts();

	print(`🥳 Received ${result.length} posts. Here they are:`);

	console.log(result);

	await returnToMainMenu();
}
