module.exports = {
    name: 'ban',
    description: 'banuje osoby',
    execute(message, args) {
        if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send('Nie masz uprawnień!')
        let member = message.mentions.users.first();
        if(member){
            let memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send('Użytkownik został zbanowany.');
        }else{
            message.channel.send('Nie oznaczyłeś osoby, którą chcesz zbanować!');
        }
    }
}
 