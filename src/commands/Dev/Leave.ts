import { MessageType } from '@adiwajshing/baileys/lib/WAConnection'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'leave',
            description: 'Bot Leaves the group',
            category: 'dev',
            dm: true,
            usage: `${client.config.prefix}leave`,
            modsOnly: true,
            baseXp: 0
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
    await M.reply( await request.buffer(`https://i.ibb.co/WDPH14Y/IMG-20220517-104050.jpg`),
        MessageType.image,
                    undefined,
                    undefined,
                    `*Bye-bye i'm going back to 22nd century* 👋\n`,
                    undefined
                    ).catch((reason: any) =>
                    M.reply(`✖ An error occurred. Please try again later.`))
        await this.client.groupLeave(M.from).catch(() => M.reply('Failed to leave the Group'))
    }
}
