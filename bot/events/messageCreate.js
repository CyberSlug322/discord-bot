import { prefix } from '../config.js'
import { UserManager } from '../utils/userManager.js'
import { nameAll } from '../messages/name_all.js'
import { submit } from '../messages/submit.js'
import { rollFullName } from '../messages/roll_full_name.js'
import { MessagePayload, EmbedBuilder } from 'discord.js'
import { iiBotMessage } from '../messages/iiBot.js'
import { iiBotImage } from '../messages/iiBotImage.js'
import { playerText } from '../messages/playerAWS.js'
import { voiceBot } from '../messages/iiVoiceBot.js'
import { sourse } from '../messages/iiVoiceBot.js'
import { playerMusic, playerInfo, playerSkip } from '../messages/playerMusic.js'
import { queue } from '../messages/queue.js'

const userManager = new UserManager()

export const messageCreate = async (client, message) => {
    try {
        if (message.author.bot || message.channel.type === 'dm') return
        const id = message.author.id
        const list = client.guilds.cache.get(message.guildId)
        const username = message.author.username
        const nickname = message.member.nickname
        const voiceChannel = message?.member?.voice?.channel?.id

        message.react('🤔')

        //  BOT CHATGPT 3.5 BOT CHATGPT 3.5

        if (message.content.startsWith(`${prefix}bot`)) {
            let outputText = ''
            let url = sourse()

            if (message.content.slice(5, 7) === '-c') {
                outputText = await iiBotMessage(message.content.slice(7), id, nickname, false) // Generation outputText context
                console.log('otvet')
            } else {
                outputText = await iiBotMessage(message.content.slice(4), id, nickname) // Generation outputText
                console.log('otvet')
            }
            if (message.content.slice(5, 7) === '-v') {
                await voiceBot(outputText, url) // create mp3 file

                await playerText(message, url) // playing mp3 file
            }

            return message.reply(outputText)
        }

        // BOT SET IMAGE BOT SET IMAGE BOT SET IMAGE

        if (message.content.startsWith(`${prefix}image`)) {
            // const botImage = await iiBotImage(message.content.slice(5))
            // return message.reply(botImage)
        }

        // BOT MUSIC BOT MUSIC BOT MUSIC

        if (message.content.startsWith(`${prefix}play`)) {
            return await playerMusic(voiceChannel, message.content.slice(5))
        }

        if (message.content.startsWith(`${prefix}skip`)) {
            playerSkip(message)
        }

        if (message.content.startsWith(`${prefix}tracks`)) {
            const tracksInfo = await playerInfo(message)
            const embed = await queue(tracksInfo)
            if (embed) {
                message.reply({ ephemeral: true, embeds: embed })
            }
        }

        //

        //

        // .

        if (message.member.user.username === 'Steeeasy') {
            const attachment = new MessagePayload('./bot/data/stass.jpeg')
            message.reply({ files: [attachment] })
        }
        if (message.member.user.username === 'Вася') {
            const attachment = new MessagePayload('./bot/data/mops.jpeg')
            message.reply({ files: [attachment] })
        }

        if (!message.content.startsWith(prefix)) return

        rollFullName(message, userManager)
        if (message.content.startsWith(`${prefix}name_all`)) {
            // isWorking = true
            // setTimeout(() => (isWorking = false), 30000)
            return nameAll(client, userManager, message.guildId)
        }
        submit(message)

        if (message.content.startsWith(`${prefix}get_name_list`)) {
            const res = await userManager.getListNames()
            if (res === '') return message.reply('List error')
            message.reply(res)
        }

        if (message.content.startsWith(`${prefix}remove_name_list`)) {
            await userManager.removeListNames()
            message.reply('List has been deleted')
        }

        if (message.content.startsWith(`${prefix}points`)) {
            const [comm, id, amount] = message.content.split(' ')
            const user = await userManager.find(id)
            const fullname = await userManager.getFullName(user)
            userManager.changePoints(id, amount)
            message.reply(`${fullname} got ${amount} points.`)
        }
    } catch (err) {
        console.log(err)
        message.reply('ERROR')
    }
}
