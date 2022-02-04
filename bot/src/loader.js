const path = require('path');
const fs = require('fs');
const pathToEvents = path.resolve(__dirname, '../events/');


module.exports = (client) => {
    const events = fs.readdirSync(pathToEvents).filter(file => file.endsWith('.js'));

    console.log(`Loading events...`);

    for (const file of events) {
        const event = require(`../events/${file}`);
        console.log(`-> Loaded event ${file.split('.')[0]}`);
        client.on(file.split('.')[0], event.bind(null, client));
        delete require.cache[require.resolve(`../events/${file}`)];
    };
    const test2 = 'test change';
}

