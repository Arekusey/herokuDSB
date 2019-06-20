const Discord = require('discord.js')
const fs = require('fs')
const shop = require('../shop.json')

module.exports.run = async (client, message, args) => {
    let u = message.author.id;
    await message.delete();
    let embed = new Discord.RichEmbed()
        .setTitle('Магазин')
        .setColor("RANDOM")
        .setDescription("Здесь вы можете преобрести необходимый товар\nДля подробностей e?ii [name item]")
        .setFooter(`ID: ${u} || Ds.bot v2.0`)
        .addField(`${client.emojis.find(emoji => emoji.name === "crystal")} ${shop["items"]["VIP"]["price"]} - VIP`, `Покупка роли VIP. Роль для Доступа ко всем комнатам`,false)
        .addField(`${client.emojis.find(emoji => emoji.name === "crystal")} ${shop["items"]["DjRole"]["price"]} - DjRole`,`Получения роли DJ для доступа к командам муз.бота`,false)
        .addField(`${client.emojis.find(emoji => emoji.name === "crystal")} ${shop["items"]["GodMode"]["price"]} - GodMode`,`Покупка роли GodMode для уникального цвета в чате.`,false)
        .addField(`${client.emojis.find(emoji => emoji.name === "crystal")} ${shop["items"]["Комната"]["price"]} - Комната`,`Покупка собственной комнаты на сервере`,false)
        .addField(`${client.emojis.find(emoji => emoji.name === "crystal")} ${shop["items"]["smile"]["price"]} - smile`,`Добавление своего смалика на сервер ( +анимированные )`,false)
        .addField(`${client.emojis.find(emoji => emoji.name === "crystal")} ${shop["items"]["Размут"]["price"]} - Размут`,`Покупка размута своего аккаунта.`,false)
        .addField(`${client.emojis.find(emoji => emoji.name === "crystal")} ${shop["items"]["Шмот"]["price"]} - Шмот`, `Рандомная шмотка из доты`, false)
    message.channel.send(embed)
}

module.exports.help = {
    name: "shop"
}
