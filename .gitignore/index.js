const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";
// 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  console.log("Le bot a bien démarré !!!")
})
// 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong")
  }
// 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  client.user.setActivity("ouvrir des caisses", {type: "PLAYING"})
//0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
})
client.login("Njk3MzkwNjMyNTIzNjYxMzY2.XrGPiw.ThkPgVFquyQhNJU6cB1WUDUS6GU")
