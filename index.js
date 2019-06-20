const Discord = require('discord.js');
const Client = new Discord.Client();
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

Client.on('ready', () => {
  console.log("Bot is running");
});

Client.on('message', (message) => {
  if(message.author.bot) return;
  message.reply(`Hello`);
});

Client.login(process.env.BOT_TOKEN);
