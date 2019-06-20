const Discord = require('discord.js')
const fs = require('fs')
const shop = require('../shop.json')

module.exports.run = async (client, message, args) => {
    if(args[0] != "VIP") return
    if(args[0] != "DjRole") return
    if(args[0] != "smile") return
    if(args[0] != "Комната") return
    if(args[0] != "Размут") return
    if(args[0] != "GodMode") return
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author, message.author.avatarURL)
        .setColor("RANDOM")
        .setDescription("Информация о предмете")
        .setFooter('Item Info || Ds.bot v2.0')
        .addField(`Name`,shop.items[args[0]].name,true)
        .addField(`Price`,`${client.emojis.find(emoji => emoji.name === "crystal")} ${shop.items[args[0]].price}`,true)
        .addField(`Description`, shop.items[args[0]].Description,false)
        .addField(`Time remaining`,shop.items[args[0]].Time_remaining,true)
        .addField(`Role required`,shop.items[args[0]].Role_required,true)
        .addField(`Role given`,shop.items[args[0]].Role_given,true)
        .addField(`Role removed`,shop.items[args[0]].Role_removed,true)
        .addField(`Reply message`,shop.items[args[0]].Reply_message,true)
    message.channel.send(embed)
}

module.exports.help = {
    name: "ii"
}