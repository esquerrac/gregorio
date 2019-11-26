const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on('message', msg => {
    if (msg.toString().split("")[0] === '!'){
    msg.reply ("Command Received!");
}else if (msg.content.toLowerCase() === 'marco')   {
    msg.reply('polo!');
}
});


client.login(auth.token);