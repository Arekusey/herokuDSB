const Discord = require('discord.js')
const strftime = require('strftime')
const profile = require('../profile.json')

module.exports.run = async (client,message,args) => {
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    
    let argsUser
    if (member) argsUser = member.user
        else argsUser = message.author

    let VIP = profile[argsUser.id]["cooldown"]["VIP"]
    let God = profile[argsUser.id]["cooldown"]["GodMode"]
    let DjRole = profile[argsUser.id]["cooldown"]["DjRole"]

    let statuses = {
        online: "В сети",
        idle: "Нет на месте",
        dnd: "Не беспокоить!!",
        offline: "Не в сети"
    }
    let game
    if (!argsUser.presence.game) game = `Имеет статус **${statuses[argsUser.presence.status]}**`
        else if (argsUser.presence.game.type == 0) game = `Играет в **${argsUser.presence.game.name}**`
        else if (argsUser.presence.game.type == 1) game = `Стримит [**${argsUser.presence.game.name}**](${argsUser.presence.game.url})`
        else if (argsUser.presence.game.type == 2) game = `Слушает **${argsUser.presence.game.name}**`
        else if (argsUser.presence.game.type == 3) game = `Смотрит **${argsUser.presence.game.name}**`

    let day = 1000 * 60 * 60 * 24
    let date1 = new Date(message.createdTimestamp)
    let date2 = new Date(argsUser.createdTimestamp)
    let date3 = new Date(message.guild.member(argsUser).joinedTimestamp)
    let diff1 = Math.round(Math.abs((date1.getTime() - date2.getTime()) / day))
    let diff2 = Math.round(Math.abs((date1.getTime() - date3.getTime()) / day))

    let u = profile[argsUser.id];
    let embed = new Discord.RichEmbed()
        .setTitle(argsUser.username)
        .setDescription(game)
        .addField('Дата регистрации', `${strftime('%d.%m.%Y в %H:%M',new Date(argsUser.createdTimestamp))}\n(${diff1} дн. назад)`, true)
        .addField('Дата вступления', `${strftime('%d.%m.%Y в %H:%M',new Date(message.guild.member(argsUser).joinedTimestamp))}\n(${diff2} дн. назад)`, true)
        .addField('Роли', message.guild.member(argsUser).roles.filter(r => r.id != message.guild.id).map(role => role.name).join(", ") || "Не имеет ролей", true)
        .addField('Уровень', u.level+`(${u.xp}/${u.level*10+1})`, true)
        .addField('Количество предупреждений', u.warns,false)
        .addField('Баланс',`${u.coin} ${client.emojis.find(emoji => emoji.name === "crystal")}`,true)
        .addField(`🎖 Репутация`,`${profile[argsUser.id].rep}`,true)
        .setColor(message.guild.member(argsUser).displayHexColor)
        .setTimestamp()
        .setThumbnail(argsUser.avatarURL)
        .setFooter(`ID: ${argsUser.id} || DS.bot v2.0`)
    if(profile[message.author.id].cooldown["VIP"] !== ''){
        embed.addField(`@VIP `,`Была куплена ${strftime('%d.%m.%Y в %H:%M',new Date(VIP))}`,false)
    }
    if(profile[message.author.id].cooldown["GodMode"] !== ''){
        embed.addField(`@GodMode `,`Был куплен ${strftime('%d.%m.%Y в %H:%M',new Date(God))}`,false)
    }
    if(profile[message.author.id].cooldown["DjRole"] !== ''){
        embed.addField(`@DjRole `,`Была куплена ${strftime('%d.%m.%Y в %H:%M',new Date(DjRole))}`,false)
    }
    message.channel.send(embed)
}

module.exports.help = {
    name: "ui"
}