const Discord = require('discord.js');
const client = new Discord.Client(); 
var Long = require("long");

client.once('ready', () => {
    console.log('Yehaw is online!');
    client.channels.cache.get('758428623199535114').send("RTX MOTHERFUCKER")
    
});
 
client.on('message', message =>{
});

client.login('TOKEN'); //ENTER TOKEN