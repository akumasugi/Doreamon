/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "dora",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}elaina`,
			baseXp: 200,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/JxV1XvJ2WPgAAAPo/%E1%BB%A7a-strange.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: ` *🐱DOREAMON🐱* \n\n🍀 *Description: *A WhatsApp Bot With Rich Anime features.*\n\n🌐 *OFFICIAL BOT URL:https://github.com/Ronen6999/Doreamon.git* \n\n 📒*DOREAMON* \n\n 👾 *BOT URL:https://github.com/Ronen6999/Doreamon.git* \n`,
			}
		);
	};
}
