const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on('message', msg => {
    if (msg.toString().split("")[0] === '!'){
   msg.channel.send(commandProcessor(msg.content.substr(1)));
}else if (msg.content.toLowerCase() === 'marco')   {
    msg.channel.send('polo!');
}
});

function commandProcessor(message){
    if (message.toLowerCase()!= "recap"){
        return message +" is not a recognized command"
    }else if (message.toLowerCase()== "recap"){
        return recapFunction(message)
    }
}

function recapFunction(message){
    var currentTime = message.createdAt;
    return currentTime;

}


client.login(auth.token);