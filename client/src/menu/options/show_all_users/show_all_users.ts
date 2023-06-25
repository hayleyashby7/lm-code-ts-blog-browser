import { fetchAllUsers } from "../../../api/fetch_all_users";
import { clear, print, printNewLine } from "../../../ui/console";
import { returnToMainMenu, menuOption } from "../../menu";

export const addAllUsersOption = (id: number): menuOption => {
	const option: menuOption = {
		id: id,
		description: "Show all users",
		action: () => {
			return showAllUsers();
		},
	};

	return option;
};
export async function showAllUsers(): Promise<void> {
	clear(true);

	printNewLine();

	print("📨 Fetching users...");

	const result = await fetchAllUsers();

	print(`🥳 Received ${result.length} users. Here they are:`);

	console.log(result);

	await returnToMainMenu();
}
