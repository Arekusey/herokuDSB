const Discord = require('discord.js')
const fs = require('fs')
const profile = require('../profile.json')

module.exports.run = async (client, message, args) => {
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))

    let aUser
    if (member ) aUser = member.user
        else aUser = message.author
    let emoji = client.emojis.find(emoji => emoji.name === "2_")
    let embed = new Discord.RichEmbed()
        .setAuthor(message.guild.member(message.author.id).displayName,message.author.avatarURL)
        .setColor("RANDOM")
        .setDescription(`Список ролей пользователя ${message.guild.member(aUser.id).displayName}`)
        .setFooter(`Role || Ds.bot v2.0`)
        .setTimestamp()
        .addField(`Роли у пользователя:`, `${message.guild.member(aUser).roles.filter(r => r.id != message.guild.id).map(role => role.name).join(", ") || "Не имеет ролей"}`, false)
    message.channel.send({embed, emoji})
}

module.exports.help = {
    name: "role"
}