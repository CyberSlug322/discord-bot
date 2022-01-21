const { Client, Intents} = require('discord.js');
const comms = require("./comms.js"); 
const fs = require('fs');
let config = require('./config.json');
let token = config.token; 
let prefix = config.prefix; 

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", function() {
  console.log(client.user.username + " ready!!");
});


client.on('message', (msg) => {
  if (msg.author.username != client.user.username && msg.author.discriminator != client.user.discriminator) {
    var comm = msg.content.trim() + " ";
    var comm_name = comm.slice(0, comm.indexOf(" "));
    var messArr = comm.split(" ");
    for (comm_count in comms.comms) {
      var comm2 = prefix + comms.comms[comm_count].name;
      if (comm2 == comm_name) {
        comms.comms[comm_count].out(client, msg, messArr);
      }
    }
  }
});


client.login(token); 