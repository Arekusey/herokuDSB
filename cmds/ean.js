const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (client,message,args) => {
    await message.delete();
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    message.channel.send(`@everyone
    Через 10 мин будем выбирать режим, будьте готовы!
    А пока выбераем доту:
    1. Обычная Дота
    2. Кастомка`).then(function (message) {
        message.react('1⃣');
        message.react('2⃣');
    }).catch(function(){});;
};
module.exports.help = {
    name: "ean"
};