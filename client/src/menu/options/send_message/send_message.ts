import { sendMessageToServer } from "../../../api/send_message_to_server";
import { clear, print, printNewLine, prompt } from "../../../ui/console";
import { returnToMainMenu, menuOption } from "../../menu";

export const addSendMessageOption = (id: number): menuOption => {
	const option: menuOption = {
		id: id,
		description: "Send Server Message",
		action: () => {
			return sendMessage();
		},
	};

	return option;
};

async function sendMessage(): Promise<void> {
	clear();

	const message = await prompt("What message shall we send? ");

	printNewLine();
	print(`📨 Sending message "${message}"...`);

	const success = await sendMessageToServer(message);

	if (success === true) print("🥳 Message received successfully!");
	else print("😵 Message NOT received.");

	await returnToMainMenu();
}
