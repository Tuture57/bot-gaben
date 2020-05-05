const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  console.log("Le bot a bien démarré !!!")
})
client.on('ready', () => {
    
    client.user.setActivity("twitch.tv/tuturetv", {type: "WATCHING"})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong")
  }
})
client.login(process.env.TOKEN)
