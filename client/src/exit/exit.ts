import { prompt } from "../ui/console";

export function exit(code: number | undefined) {
	process.exit(code);
}

export async function exitConfirmed(): Promise<boolean> {
	const confirmed = await prompt("Are you sure you want to exit? (y/n) ");

	if (confirmed.toLowerCase() === "y") {
		return true;
	}
	return false;
}
