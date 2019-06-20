const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (client,message,args) => {
    await message.delete();
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    message.channel.send(`@everyone
    Хотите ${args}:
    1. Да
    2. Нет`).then(function (message) {
        message.react('1⃣');
        message.react('2⃣');
    }).catch(function(){});;
};
module.exports.help = {
    name: "golos"
};