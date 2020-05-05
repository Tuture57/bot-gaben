var bot = require("discord-music-bot");
 
var serverName = "BOT TEST";
var textChannelName = "général";
var voiceChannelName = "test";
var aliasesFile = "bot-gaben";
var botToken = (process.env.TOKEN);
 
bot.run(serverName, textChannelName, voiceChannelName, aliasesFile, botToken);
