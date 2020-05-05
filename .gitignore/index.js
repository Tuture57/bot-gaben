const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  console.log("Le bot a bien démarré !!!")
})
client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong")
  }
  client.user.setActivity("ouvrir des caisses", {type: "PLAYING"})
})
client.login(process.env.TOKEN)
