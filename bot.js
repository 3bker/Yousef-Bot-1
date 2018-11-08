const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("509739688362508298")
setInterval(function() {
channel.send(`tarek tarek yousef yousef ========`);
}, 30)
})

client.login(process.env.BOT_TOKEN);