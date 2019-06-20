const Discord = require('discord.js')
const fs = require('fs')
const profile = require('../profile.json')
const shop = require('../shop.json')

module.exports.run = async (client, message, args) => {
  if(profile[message.author.id].coin < shop.items[args[0]].price) {
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .setDescription(`${client.emojis.find(emoji => emoji.name === "no")} У вас недостаточно средст для совершения покупки. Ваш баланс состовляет ${client.emojis.find(emoji => emoji.name === "crystal")} ${profile[message.author.id].coin}`)
    message.channel.send(embed)
  }
  else {
		if(args[0] == "VIP" || args[0] == "GodMode" || args[0] == "DjRole" || args[0] == "Размут" || args[0] == "Комната" || args[0] == "smile" || args[0] == "Шмот"){
    	profile[message.author.id].coin = parseInt(profile[message.author.id].coin) - parseInt(shop.items[args[0]].price)
    	fs.writeFile('../profile.json', JSON.stringify(profile),(err)=>{
        if(err) console.log(err)
    	})
    	if(args[0] == "VIP" || args[0] == "GodMode" || args[0] == "DjRole") {
        const role = message.guild.roles.find(r => r.name == args[0])
        message.guild.member(message.author.id).addRole(role)
        date = new Date()
        profile[message.author.id].cooldown[args[0]] = `${date.toDateString(".")} ${date.toTimeString(":")}`
      }
      if (args[0] == "Размут") {
				const role = message.guild.roles.find(r => r.name == args[0])
				message.guild.member(message.author.id).removeRole(role)
    	}
      if (args[0] == "Шмот"){
        client.guilds.get("556392341045248000").channels.get("572464032670285834").send(`${message.guild.member(message.author.id).displayName} купил шмотку из доты`)
      }
    	let embed = new Discord.RichEmbed()
				.setAuthor(message.author.username, message.author.avatarURL)
				.setColor("RANDOM")
        .setDescription(`${client.emojis.find(emoji => emoji.name === "yes")} Вы купили ${args[0]} за ${shop.items[args[0]].price}. Ваш баланс: ${client.emojis.find(emoji => emoji.name === "crystal")} ${profile[message.author.id].coin}`)
      message.channel.send(embed)
		} else{
			let embed = new Discord.RichEmbed()
				.setAuthor(message.author.username, message.author.avatarURL)
				.setColor("RANDOM")
            	.setDescription(`Такого тавара нет. Список таваров: -shop`)
			message.channel.send(embed)
		}
  }
}

module.exports.help = {
    name: "bi"
}
