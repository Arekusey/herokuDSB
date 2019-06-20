const Discord = require('discord.js')
const fs = require('fs')
const merge = require('../merge.json')

module.exports.run = async (client, message, args) => {
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
    
    let User
    if (member) User = member.user
        else User = message.author
    if(args[0] == "invite") {
        let embed = new Discord.RichEmbed()
            .setTimestamp()
            .setColor("RANDOM")
            .setFooter("Merge Service || Ds.bot v2.0")
            .setDescription(`Вы пригласили ${args[1]} в брак`)
        message.channel.send(embed)
        merge[User.id] = message.author.id
        fs.writeFile('./merge.json', JSON.stringify(merge), (err) => {
            if (err) console.log(err)
        })
    }
}

module.exports.help = {
    name: "merge"
}