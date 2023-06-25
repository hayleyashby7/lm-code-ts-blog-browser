import { fetchUser } from "../../../api/fetch_user";
import { clear, print, prompt } from "../../../ui/console";
import { inputValidator } from "../utils/input";
import { returnToMainMenu, menuOption } from "../../menu";

export const addBrowseUsersOption = (id: number): menuOption => {
	const option: menuOption = {
		id: id,
		description: "Browse users",
		action: () => {
			return browseUsers();
		},
	};

	return option;
};

const validIDRegEx = /^\d+$/;

export async function browseUsers(): Promise<void> {
	clear(false);

	// Get user ID
	const userID = await prompt("Enter User ID");

	if (!inputValidator(userID, validIDRegEx)) return invalidUser();

	// Fetch user
	print(`📨 Fetching user ${userID}...`);

	const result = await fetchUser(userID);

	if (!result.userFound) return invalidUser();

	// Display user
	print(`🥳 Received user:`);

	console.log(result);

	await returnToMainMenu();
}

const invalidUser = async (): Promise<void> => {
	print("🚨 Invalid User ID! 🚨");

	await returnToMainMenu();
};
