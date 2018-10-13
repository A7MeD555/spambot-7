const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});







client.on("ready", () => {
let channel =     client.channels.get("500019488431931392")
setInterval(function() {
channel.send(`احلام سا عليك ياابو جبل اديلو سبام اديلو اديلو`);
}, 25)
})







// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
