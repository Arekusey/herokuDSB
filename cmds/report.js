const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
	await message.delete(2500)
	let argus = args.slice(1).join(" ");
	let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.args[0]);
	let embed = new Discord.RichEmbed()
		.setDescription("Жалоба на игрока")
		.addField("Автор жалобы",`${message.guild.member(message.author.id).displayName}`)
		.addField("На кого жалоба", message.guild.member(rUser).nickname)
		.addField("Причина ",argus)
	client.guilds.get("556392341045248000").channels.get("564410725054021652").send(embed);
	message.reply('successfull');
};

module.exports.help = {
	name: "report"
};