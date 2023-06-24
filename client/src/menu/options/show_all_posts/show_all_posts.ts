import { fetchAllPosts } from "../../../api/fetch_all_posts";
import { clear, print, printNewLine } from "../../../ui/console";
import { returnToMainMenu } from "../../menu";

export async function showAllPosts(): Promise<void> {
	clear(true);

	printNewLine();

	print("📨 Fetching posts...");

	const result = await fetchAllPosts();

	print(`🥳 Received ${result.length} posts. Here they are:`);

	console.log(result);

	await returnToMainMenu();
}
