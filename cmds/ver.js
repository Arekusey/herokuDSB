const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (client,message,args) => {
	let arg = args.join();
	let m = arg.split("@!").pop();
	m = m.split(">");
	let ms = message.author.id;
	await message.delete();
	if(!message.member.hasPermission("ADMINISTRATOR")) return;
	message.channel.send(`Пользователь ${"<@"+ms+">"} дал доступ пользователю ${args} к каналу Заявки`).then(function(){
		const role = message.guild.roles.get("564753857780121602");
		message.guild.members.find(member => member.id === m[0]).addRole(role).catch(console.error);
		console.log(m);
	}).catch(function(){});
};
module.exports.help = {
	name: "ver"
};