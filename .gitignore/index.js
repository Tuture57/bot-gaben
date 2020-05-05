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
