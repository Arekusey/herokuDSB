const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
    let user = message.guild.members.random();
    await message.delete();
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    const role = message.guild.roles.get('561660510907400192');
    if(user.roles.has(role)) return;
    user.addRole(role.id).catch(console.error);
    message.channel.send(`Пользователю ${user} была выдана роль DjRole`);
};

module.exports.help = {
    name: "rr"
};