import AWS from 'aws-sdk'
import Fs from 'fs'
import { config } from 'dotenv'

config()

const Polly = new AWS.Polly({
    signatureVersion: 'v4',
    region: 'eu-central-1',
})
export const sourse = () => {
    return `./bot/data/mp3/speech_${Date.now()}.mp3`
}

export const voiceBot = async (text, url) => {
    const params = {
        Text: text,
        OutputFormat: 'mp3',
        VoiceId: 'Maxim',
    }
    // create mp3 file
    return new Promise((resolve, reject) => {
        Polly.synthesizeSpeech(params, (err, data) => {
            if (err) {
                reject(console.log(err.code))
            } else if (data) {
                if (data.AudioStream instanceof Buffer) {
                    Fs.writeFile(url, data.AudioStream, function (err) {
                        if (err) {
                            reject(console.log(err))
                        }
                        resolve(console.log('The file was saved!'))
                    })
                }
            }
        })
    })
}
