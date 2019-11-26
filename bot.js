const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    //confirms bot launch
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on('message', msg => {
    if (msg.toString().split("")[0] === '!'){
    //parse message to see command
   msg.channel.send(commandProcessor(msg.content.substr(1)));
   //testing responsiveness
}else if (msg.content.toLowerCase() === 'marco')   {
    msg.channel.send('polo!');
}
});

function commandProcessor(message){
    //checks for recap command
    if (message.toLowerCase()!= "recap"){
        return '"'+message+'"' +" is not a recognized command.  I don't fuck around, Josh"
        //anything other than recap should return this for now
    }else if (message.toLowerCase()== "recap"){
        //I promise to give you a date
        try {
            return message.createdAt;
            //where is the fucking promise
        }catch (err){
            console.log(err)
            return "encountered unknown error"
        }
    }
}

// function recapFunction(message){
//     var currentTime = message.createdAt;
//     return currentTime;
//
// }


client.login(auth.token);