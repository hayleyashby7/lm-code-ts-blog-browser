import { States } from "../states/states";
import { clear, print, printNewLine, prompt } from "../ui/console";

export async function showMenu(): Promise<States> {
	clear();
	print("0. Send Server Message", false);
	print("1. Show all posts", false);
	print("2. Show all users", false);
	print("3. Browse posts", false);
	print("4. Add user", false);
	printNewLine();

	const result = await prompt("What shall we do? ");

	if (result === "0") return "SEND_MESSAGE";
	if (result === "1") return "SHOW_POSTS";
	if (result === "2") return "SHOW_USERS";
	if (result === "3") return "BROWSE_POSTS";
	if (result === "4") return "ADD_USER";

	return "UNKNOWN";
}
