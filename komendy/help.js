module.exorts = {
    name: "help",
    description: "help xD",
execute(message, args, Discord) {
let newembed = new Discord.MessageEmbed()




.setColor('#FF0000')
.setTitle('Komendy:')
.setDescription('\n`ban` - Banuje osobe.\n`Kick` - Wyrzuca dowołną osobę.\n`clear` - Usuń dowolną liczbę wiadomości.\n`rr` - Stwórz role za reakcje.\n`embed` - Tworzy embed.')
.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
 
message.channel.send(newembed)
}
}
