import { prefix } from '../config.js'
import { Submissions } from '../src/mongo.js'

export const submit = async (message) => {
    try {
        if (message.content.startsWith(`${prefix}submit`)) {
            const array = message.content.split(' ').slice(1)
            console.log(...array)
            const submission = Submissions.findById('6206e27568edb3fa938a0f35')
            submission.list.push(array)
            submission.save()
            message.reply('thx')
        }
    } catch (err) {
        console.log(err)
    }
}
