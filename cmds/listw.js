const Discord = require("discord.js");
const fs = require("fs");
const profile = require("../profile.json");

module.exports.run = async (client,message,args) => {
	try {
		function msg(msg) {
			message.channel.send(msg);
		}
		let mId = message.author.id;
		m = message.guild.members.find(m => m.id == mId);
		let argus = args.slice(1).join(" ");
		if (!message.member.hasPermission("ADMINISTRATOR")) return;
		let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.args[0]);
        
		let embed = new Discord.RichEmbed().setDescription("Список предупреждений");
        for(i = 1;i < profile[rUser.id].warns + 1;i++){
            embed.addField(`${i}. `,profile[rUser.id].warns_reason[i]);
        };
		msg(embed);
	} catch (err) {
		console.log(`1. ${err.name}\n2. ${err.message}\n3. ${err.stack}`);
	}
};

module.exports.help = {
	name: "listw"
};