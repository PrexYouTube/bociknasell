const { MessageEmbed, Channel } = require("discord.js");

module.exports = {
    name: 'kick',
    description: 'kick osoby',
    execute(message, args, Discord, client) {
    
        const error = new MessageEmbed()
        .setColor("RED")
        .setTitle('Error!')
        .setDescription('Nie oznaczyłeś osoby')

        const uprawnienia = new MessageEmbed()
        .setColor("RED")
        .setTitle('Error!')
        .setDescription('Nie masz uprawnień')
        
        const kicked = new MessageEmbed()
        .setColor("GREEN")
        .setTitle('Komenda - kick')
        .setDescription('Użytkownik został wyrzucony.')
        
        if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send(uprawnienia)
        
        let member = message.mentions.users.first();
        if(member){
            let memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send(kicked);
        }else{
            message.channel.send(error);
        }
    }
}
