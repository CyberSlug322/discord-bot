const { MessageEmbed } = require('discord.js');

module.exports = (client, member) => {
    try{
        console.log('triggered,',member)
        
        const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Some title')
        .setURL('https://discord.js.org/')
        .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
        .setDescription("Sad! Let's just hope that they enjoyed their stay <:WelcomePigSad:777683637830680586>")
        .setColor("FF0000");
        
                
        member.guild.channels.cache.get("425276990489100288").send({ embeds: [exampleEmbed] })
    }
    catch(err){
        console.log(err)
    }
}


