const Discord = require('discord.js');
const client = new Discord.Client({partials: ['MESSAGE',  'CHANNEL,', 'REACTION' ] }, { ws: { properties: { $browser: "Discord iOS" }} });
const fs = require('fs');
const { MessageEmbed } = require('discord.js');
const prefix = "!";

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('komendy').filter(file => file.endsWith('.js'));
 
 
client.once('ready', () =>{
console.log(`${client.user.tag} jest online!`);
client.user.setActivity('$help', {type: "PLAYING"});
});

for (const file of commandFiles) {
    const command = require(`./komendy/${file}`);
    client.commands.set(command.name, command);
}



 
 
client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
 
    if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args, Discord, client);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command === 'rr') {
        client.commands.get('rr').execute(message, args, Discord, client);
    } else if (command === 'embed') {
        client.commands.get('embed').execute(message, args, Discord, client);
    }
}); 




    client.login('ODQzNzkzNTEzMzcxNzk1NDU3.YKJB8g.nMnXr25JnOXhVvHjLryqseo-61k');
    