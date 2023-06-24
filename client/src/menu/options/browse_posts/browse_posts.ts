import { fetchPost } from "../../../api/fetch_post";
import { clear, print, prompt } from "../../../ui/console";
import { inputValidator } from "../utils/input";
import { returnToMainMenu } from "../../menu";

const validIDRegEx = /^\d+$/;

export async function browsePosts(): Promise<void> {
	clear(false);

	// Get post ID
	const desiredPostId = await prompt("Enter Post ID");

	if (!inputValidator(desiredPostId, validIDRegEx)) return invalidPost();

	// Fetch post
	print(`📨 Fetching post ${desiredPostId}...`);

	const result = await fetchPost(desiredPostId);

	if (!result.postFound) return invalidPost();

	// Display post
	print(`🥳 Received post:`);

	console.log(result);

	await returnToMainMenu();
}

const invalidPost = async (): Promise<void> => {
	print("🚨 Invalid Post ID! 🚨");

	await returnToMainMenu();
};
