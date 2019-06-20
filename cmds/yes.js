const Discord = require('discord.js')
const fs = require('fs')
const merge = require('../merge.json')

module.exports.run = async (client, message, args) => {
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    
    let User
    if (member) User = member.user
        else User = message.author
    
    let u1 = message.guild.member(message.author.id).displayName
    let u2 = message.guild.member(merge[message.author.id]).displayName
    let embed = new Discord.RichEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter("Merge Service || Ds.bot v2.0")
        .setDescription(`Вы приняли предложение ${args[0]}`)
    message.channel.send(embed)
    message.guild.createRole({
        name: `Муж ${message.guild.member(merge[message.author.id]).displayName}`,
        color: "Green"
    })
    message.guild.createRole({
        name: `Жена ${message.guild.member(message.author.id).displayName}`,
        color: "Green"
    })
    merge[message.author.id] = "require"
    fs.writeFile('./merge.json', JSON.stringify(merge), (err) => {
        if (err) console.log(err)
    })
    const role1 = message.guild.roles.find(r => r.name == `Жена ${u1}`)
    const role2 = message.guild.roles.find(r => r.name == `Муж ${u1}`)
    message.guild.member(message.author.id).addRole(role1)
    message.guild.member(merge[message.author.id]).addRole(role2)
}

module.exports.help = {
    name: "yes"
}