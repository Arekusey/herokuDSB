const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (client,message,args) => {
    await message.delete();
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    message.channel.send(`@everyone
    Проходит голосование на режим игры для Эвента
    Начало через ${args[0]} мин
    Голосовать можно только за 1 режим.
    1. ${args[1]}
    2. ${args[2]}
    3. ${args[3]}
    4. ${args[4]}
    5. ${args[5]}
    6. ${args[6]}`).then(function (message) {
        message.react('1⃣');
        message.react('2⃣');
        message.react('3⃣');
        message.react('4⃣');
        message.react('5⃣');
        message.react('6⃣');
    }).catch(function(){});
};
module.exports.help = {
    name: "revs"
};