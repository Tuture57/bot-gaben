const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$";
client.login(process.env.TOKEN);
client.on("ready", () => {
});
console.log("SA MARCHE !!!")
client.on('ready', () => {
    
    client.user.setActivity("ouvrir des caisses", {type: "PLAYING"})

var bot = require("discord-music-bot");
 
var serverName = "BOT TEST";
var textChannelName = "général";
var voiceChannelName = "test";
var aliasesFile = "bot-gaben";
var botToken = (process.env.TOKEN);
 
bot.run(serverName, textChannelName, voiceChannelName, aliasesFile, botToken);
})
