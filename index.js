const { Client }= require("discord.js-selfbot-v13");
const fs = require('fs');
const { joinVoiceChannel } = require("@discordjs/voice");
const client = new Client({
    checkUpdate: false,
  });

const data = fs.readFileSync('tokens.txt', 'UTF-8');
const lines = data.split(/\r?\n/);
lines.forEach((line) => {
    Hosting(line);
});

function Hosting(token)  {
 client.on("ready", () => {
console.log('Connected: ' + client.user.tag);
       
   const channel = client.channels.cache.get("1190928131842916373");

   if (!channel) return console.error("Không Tìm thấy kênh");

   const connection = joinVoiceChannel({
     channelId: channel.id,
     guildId: channel.guild.id,
     adapterCreator: channel.guild.voiceAdapterCreator,
       selfDeaf:  false,         
       selfMute: false
   });
            
    });
    client.login(token)
}



process.on('uncaughtException', function (exception) {
  console.error('Uncaught Exception:', exception);
});

process.on('unhandledRejection', error => {
  console.error('Unhandled Rejection:', error);
});