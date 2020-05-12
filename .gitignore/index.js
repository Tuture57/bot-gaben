const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$";
client.login(process.env.TOKEN);
client.on("ready", () => {
});
console.log("Le bot a bien démarré !")
client.on('ready', () => {
    
  client.user.setActivity("ouvrir des caisses", {type: "PLAYING"})

    client.on("message", msg => {
      if (msg.content === "ping") {
        client.users.get("someID").send("someMessage");
      }
    })
})
