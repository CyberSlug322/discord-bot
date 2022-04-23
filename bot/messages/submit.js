const {prefix} = require('../config.json');
const {Submissions} = require('../src/mongo');


module.exports = async function submit(message) {
    if (message.content.startsWith(`${prefix}submit`)) {
        const array = message.content.split(' ').slice(1);
        console.log(...array);
        const submission = Submissions.findById("6206e27568edb3fa938a0f35")
        submission.list.push(array);
        submission.save();
        message.reply("thx");
    }
}