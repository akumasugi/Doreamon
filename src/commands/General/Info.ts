//** @format */

//** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys/lib/WAConnection";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import * as typings from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "info",
			description: "Will display the info of the bot",
			category: "general",
			usage: `${client.config.prefix}info`,
			baseXp: 100,
		});
	}

	run = async (M: typings.ISimplifiedMessage): Promise<void> => {
		//eslint-disable @typescript-eslint/no-explicit-any/
        const chats: any = this.client.chats		
			.all()
			.filter((v) => !v.read_only && !v.archive)
			.map((v) => v.jid)
			.map((jids) => (jids.includes("g.us") ? jids : null))
			.filter((v) => v);
		const pad = (s: any) => (s < 10 ? "0" : "") + s;
		function formatTime(seconds: any): string {
			const hours = Math.floor(seconds / (60 * 60));
			const minutes = Math.floor((seconds % (60 * 60)) / 60);
			const secs = Math.floor(seconds % 60);
			return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
		}
		const users = await this.client.DB.user.count();
                const uban = await this.client.DB.user.count({ban: true});
		function uptime() {
			return newFunction(formatTime);
		}
		this.run = async (M: typings.ISimplifiedMessage): Promise<void> => {
			const chitoge =
				"https://c.tenor.com/n1XOa4zfUOAAAAPo/doraemon-fudgy-pie.mp4";
			return void this.client.sendMessage(
				M.from,
				{ url: chitoge },
				MessageType.video,
				{
					quoted: M.WAMessage,
					mimetype: Mimetype.gif,
					caption: `━━━❰ *DOREAMON* ❱━━━\n\n🔮 *Groups: ${
				chats.length
					}*\n\n👀 *Im Alive since (uptime): ${uptime()}*\n\n💙 *My cute Nobita's 😇 (users): ${users}*\n\n💢 *Bad people's (Banned Users): ${uban}*\n\n\n`,
				}
			);
		};
	}
}

function newFunction(formatTime: (seconds: any) => string) {
	return formatTime(process.uptime());
}
