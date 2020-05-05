const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$";
client.login(process.env.TOKEN);
client.on("ready", () => {
});
console.log("SA MARCHE !!!")
client.on('ready', () => {
    
    client.user.setActivity("ouvrir des caisses", {type: "PLAYING"})

})

var bot = require("discord-music-bot");
 
var serverName = "Your server name here";
var textChannelName = "Your text channel name here (without #)";
var voiceChannelName = "Your voice channel name here";
var aliasesFile = "A file the bot will use to store your aliases";
var botToken = "Your bot token here";
 
bot.run(serverName, textChannelName, voiceChannelName, aliasesFile, botToken);
}
