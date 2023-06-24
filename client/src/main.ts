import "dotenv/config";
import { exit } from "./exit/exit";
import { returnToMainMenu, showMenu } from "./menu/menu";
import { browsePosts } from "./menu/options/browse_posts/browse_posts";
import { sendMessage } from "./menu/options/send_message/send_message";
import { showAllPosts } from "./menu/options/show_all_posts/show_all_posts";
import { showAllUsers } from "./menu/options/show_all_users/show_all_users";
import { State } from "./states/state";
import { States } from "./states/states";
import { clear, print, prompt } from "./ui/console";
import { addUser } from "./menu/options/add_user/add_user";
import { browseUsers } from "./menu/options/browse_users/browse_users";

async function begin() {
	clear(true);
	print("👋 Welcome to our cool blog browser!");
	await prompt("⌨️ Press [ENTER] to continue! 🕶️");
	main();
}

async function main() {
	let state: State = new State();

	while (true) {
		const action = stateActions(state.get()) || stateActions("DEFAULT");
		state.set((await action()) as States);
	}
}

begin();

const stateActions = (state: States) => {
	const actions = {
		MENU: async () => {
			const choice = await showMenu();
			return choice;
		},
		SEND_MESSAGE: async () => {
			await sendMessage();
			return "MENU" as States;
		},
		SHOW_POSTS: async () => {
			clear();
			await showAllPosts();
			return "MENU" as States;
		},
		SHOW_USERS: async () => {
			clear();
			await showAllUsers();
			return "MENU" as States;
		},
		BROWSE_POSTS: async () => {
			clear();
			await browsePosts();
			return "MENU" as States;
		},
		BROWSE_USERS: async () => {
			clear();
			await browseUsers();
			return "MENU" as States;
		},
		ADD_USER: async () => {
			clear();
			await addUser();
			return "MENU" as States;
		},
		UNKNOWN: async () => {
			clear();
			print("😵 We have entered an unknown state.");
			await returnToMainMenu();
			return "MENU" as States;
		},
		DEFAULT: () => {
			exit(99);
		},
	};

	return actions[state];
};
