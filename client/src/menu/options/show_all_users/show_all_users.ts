import { fetchAllUsers } from "../../../api/fetch_all_users";
import { clear, print, printNewLine } from "../../../ui/console";
import { returnToMainMenu } from "../../menu";

export async function showAllUsers() {
	clear(true);

	printNewLine();

	print("📨 Fetching users...");

	const result = await fetchAllUsers();

	print(`🥳 Received ${result.length} users. Here they are:`);

	console.log(result);

	returnToMainMenu();

	return result;
}
