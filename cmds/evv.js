const Discord = require('discord.js')
const fs = require('fs')
const quest = require('../quest.json')
const ans = require('../answer.json')

module.exports.run = async (client, message, args) => {
	let embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setDescription(`Проводим Event-викорину. За каждый правильный ответ вы получаете 2500 ${client.emojis.find(emoji => emoji.name === "crystal")}`)
		.setFooter(`EventVictory || Ds.bot v2.0`)
		.setTimestamp()
		.setAuthor(`${message.guild.member(message.author.id).displayName}`)
		.addField(`Вопрос такой: ${quest[args[0]]}`, `Варианиты ответов: \`\`\`
1. ${ans[quest[args[0]]][1]}
2. ${ans[quest[args[0]]][2]}
3. ${ans[quest[args[0]]][3]}
4. ${ans[quest[args[0]]][4]}
\`\`\``, false)
	message.channel.send(embed)
}

module.exports.help = {
	name: "evv"
}