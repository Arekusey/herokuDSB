const Discord = require('discord.js')
const fs = require('fs')
const uId = require('../uid.json')

module.exports.run = async (client,message,args) => {
    await message.delete()
    let array = message.guild.members.size
    uId[array] = message.guild.members.array().join(", ")
    fs.writeFile('./uid.json', JSON.stringify(uId), (err) => {
        if(err) console.log(err)
    })
    message.channel.send('Выполнен пересчет пользователей')
}

module.exports.help = {
    name: "uid"
}