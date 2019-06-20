const Discord = require('discord.js')

module.exports.run = async (client,message,args) => {
    if(args[0] == "all"){
        let embed = new Discord.RichEmbed()
            .setAuthor(message.guild.member(message.author.id).displayName, message.author.avatarURL)
            .setColor("RANDOM")
            .setDescription(`Вот что я умею делать: `)
            .setFooter(`Help || Ds.bot v2.0`)
            .setTimestamp()
            .addField(`-game [command]`,`Игровые команды. Для просмотра помощи смотрите -help game`,false)
            .addField(`-bi [item_name]`,`Покупка предметов.`,false)
            .addField(`-dwarn, -swarn, -listw`,`Система варнов`,false)
            .addField(`-ii [item_name]`,`Информация о предмете`,false)
            .addField(`-shop`,`Список предметов`,false)
            .addField(`-useri <@mention>`,`Статистика игрока`,false)
            .addField(`-ver [@mention]`,`Дать достук к комнате #✔заявки™©`,false)
            .addField(`-v [sum] [quest]`,`Викторина на деньги`,false)
            .addField(`-rr`,`Рандомному челику выдается роль`,false)
            .addField(`-tm <@mention> [sum]`,`Передать деньги`,false)
        message.channel.send(embed)
    }

    if (args[0] == "game"){
        let embed = new Discord.RichEmbed()
            .setAuthor(message.guild.member(message.author.id).displayName, message.author.avatarURL)
            .setColor("RANDOM")
            .setDescription(`Игровые команды: `)
            .setFooter(`Game help || Ds.bot v2.0`)
            .setTimestamp()
            .addField(`-game bal <@mention>`,`Проверка своего или @mention баланса`,false)
            .addField(`-game rep- [@mention]`,`Понизить репутацию @mention`,false)
            .addField(`-game rep+ [@mention]`,`Повысить репутацию @mention`,false)
        message.channel.send(embed)
    }
}

module.exports.help = {
    name: "help"
}