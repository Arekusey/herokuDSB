const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
    await message.delete();
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    let argus = args.slice(1).join(" ");
    let embed = new Discord.RichEmbed()
        .setAuthor(message.guild.member(message.author.id).displayName,message.author.avatarURL)
    	.setColor("RANDOM")
        .setDescription("Викторина от администратора")
        .addField(`Всем Доброго времени суток! Провожу викторину, и кто первый павильно ответит на вопрос получает вознагрождение ${args[0]} ${client.emojis.find(emoji => emoji.name === "crystal")} от администратора! Удачи вам!`,`Просьба при ответе не пользоваться поисковыми системами, также запрещено использовать Доту.`)
        .addField(`А вопрос у нас такой:`,`${argus}`)
        .setFooter(`Викторина || Ds.bot v2.0`)
    message.channel.send(`@everyone`)
    message.channel.send(embed)
};

module.exports.help = {
    name: "v"
};