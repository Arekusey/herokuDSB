const Discord = require('discord.js')
const fs = require('fs')
const profile = require('../profile.json')

module.exports.run = async (client,message,args) => {
  arg = args.slice(1);
  let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
  let argsUser
  if(member) argsUser = member.user
  else argsUser = message.author
  if(args[0] === 'am'){
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    await message.delete()
    profile[argsUser.id].coin = parseInt(profile[argsUser.id].coin) + parseInt(args[2])
    fs.writeFile('./profile.json',JSON.stringify(profile),(err) => {
      if(err) console.log(err)
    })
    message.channel.send(`${client.emojis.find(emoji => emoji.name === "yes")} Success!`)
  }

  if(args[0] === 'rm') {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    profile[argsUser.id].coin = parseInt(profile[argsUser.id].coin) - parseInt(args[2])
    fs.writeFile('./profile.json', JSON.stringify(profile),(err)=>{
      if(err) console.log(err)
    })
    message.channel.send(`${client.emojis.find(emoji => emoji.name === "yes")} Success!`)
  }

  if(args[0] === 'bal') {
    let embed = new Discord.RichEmbed()
      .setAuthor(message.guild.member(argsUser.id).displayName, message.guild.member(argsUser.id).avatarURL)
      .setColor("RANDOM")
      .setDescription(`Баланс: ${profile[argsUser.id].coin} ${client.emojis.find(emoji => emoji.name === "crystal")}`)
      .setFooter("Money Balance || Ds.bot v2.0")
    message.channel.send(embed)
  }

  if(args[0] === 'rep-'){
    await message.delete()
    let u = profile[au.id]
    if(!u.repl[message.author.id] == '') {
      u.rep--;
      u.repl[message.author.id] = '';
      fs.writeFile('./profile.json', JSON.stringify(profile),(err) => {
        if (err) console.log(err)
      })
      message.channel.send(`Успешно понижена репутация игроку ${au}`)
    } else {
      message.channel.send(`Вы еще не ставили репутацию ${au}`)
    }
  }

  if(args[0] === 'rep+'){
    await message.delete()
    let u = profile[au.id]
    if(!u.repl[message.author.id] || u.repl[message.author.id] == '') {
      u.rep++;
      u.repl[message.author.id] = 'set';
      fs.writeFile('./profile.json', JSON.stringify(profile),(err) => {
        if (err) console.log(err)
      })
      message.channel.send(`Успешно повышена репутация игроку ${au}`)
    } else {
      message.channel.send(`Вы уже ставили репутацию ${au}`)
    }
  }
}

module.exports.help = {
  name: "game"
}
