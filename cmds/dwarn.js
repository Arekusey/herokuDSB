const Discord = require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");

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

		if(!args[0]) return msg("Вы не указали пользователя");
		if(!rUser) return msg("Такого пользователя нет");

		profile[rUser.id].warns = 0;
		if(profile[rUser.id].warns == 5) {
			const role = message.guild.roles.get('564133962356883477');
			message.guild.member(rUser).addRole(role).then(function(){}).catch(function(){});
		}
		profile[rUser.id].warns_reason[profile[rUser.id].warns] = argus;
		let embed = new Discord.RichEmbed()
			.setDescription("Предупреждение")
			.addField("Администратор ", message.guild.member(m).nickname)
			.addField("Снял предупреждения ", `${rUser.user.username}`)
			.addField("Количество предупреждений ",`${profile[rUser.id].warns}/5`);
		msg(embed);
		fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
			if (err) console.log(err);
		});
	} catch (err) {
		console.log(`1. ${err.name}\n2. ${err.message}\n3. ${err.stack}`);
	}
};

module.exports.help = {
	name: "dwarn"
};
