import { States } from "./states";

export class State {
	#state: States = "MENU";

	get(): States {
		return this.#state;
	}

	set(newState: States): void {
		this.#state = newState;
	}
}
