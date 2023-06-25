import "dotenv/config";
import { exit } from "./exit/exit";
import { returnToMainMenu, showMenu } from "./menu/menu";
import { State } from "./states/state";
import { States } from "./states/states";
import { clear, print, prompt } from "./ui/console";

async function begin() {
	clear(true);
	print("👋 Welcome to our cool blog browser!");
	await prompt("⌨️ Press [ENTER] to continue! 🕶️");
	main();
}

async function main() {
	let state: State = new State();

	while (true) {
		state.set((await stateActions(state.get())) || stateActions("DEFAULT"));
	}
}

begin();

async function stateActions(state: States): Promise<States> {
	const actions = {
		MENU: async () => {
			return await showMenu();
		},
		UNKNOWN: async () => {
			clear();
			print("😵 We have entered an unknown state.");
			await returnToMainMenu();
			return "MENU" as States;
		},
		DEFAULT: async () => {
			exit(99);
			return "DEFAULT" as States;
		},
	};

	return await actions[state]();
}
