const Discord = require('discord.js')
const fs = require('fs')
let profile = require('../profile.json')

module.exports.run = async (client, message, args) => {
	let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    
    let argsUser
    if (member) argsUser = member.user
        else argsUser = message.author
	
	let profAuth = profile[message.author.id]
	let profArgs = profile[argsUser.id]
	await message.delete()
	if (args[1] == 0) return
	if (args[1] > profAuth) return
	profArgs.coin += parseInt(args[1])
	profAuth.coin -= parseInt(args[1])
	fs.writeFile('../profile.json', JSON.stringify(profile), (err) => {
		if (err) console.log(err)
	})
	let embed = new Discord.RichEmbed()
		.setAuthor(message.guild.member(message.author.id).displayName,message.author.avatarURL)
		.setColor("RANDOM")
		.setDescription(`Передача денежных средств`)
		.addField(`Игрок ${message.guild.member(message.author.id).displayName} передал ${args[1]} ${client.emojis.find(emoji => emoji.name === "crystal")} игроку ${message.guild.member(argsUser.id).displayName}`)
		.setFooter(`Bank Transfer || Ds.bot v2.0`)
	message.channel.send(embed)
}

module.exports.help = {
	name: "tm"
}