const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    //confirms bot launch
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on('message', msg => {
    if (msg.toString().split("")[0] === '!'){
    //parse message to see if command
   msg.channel.send(commandProcessor(msg));
}
});

function commandProcessor(rcvdMessage){
    var message = rcvdMessage.content.substr(1).toLowerCase();
    //checks for recap command
    if (message.toLowerCase()== "recap"){
        var channelId = rcvdMessage.channel.id;
        var messageArray = loadMessages();
        function loadMessages(){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {

                }
            };
            xhttp.open("GET", "demo_get.asp", true);
            xhttp.send();
        }
        }
        //placeholder return for function to be built
        return "Here is a placeholder for the recap"
    }else if (message.toLowerCase()== "ping") {
        //test case I'm keeping
        return "pong!";
    }else if (message.toLowerCase()=="time"){
        //trying to confirm timestamp format
        //I promise to give you a date
        try {
            if (rcvdMessage.createdTimestamp != undefined) {
                return rcvdMessage.channel.id;
            }else{
                console.log(message);
                return "Unable to determine timestamp"
            }
            //where is the fucking promise
        }catch (err){
            console.log(err)
            return "encountered unknown error"
        }
    }else{
        var responseArray = ["Trash T8m", "I don't fuck around.", "Read the instructions", "Uninstall, idiot.", "Do I look like a bitch?", "Did you just assume my functionality?", "L2P, n00b", "Git gud"];
        return '"'+message+'"' +" is not a recognized command. "+responseArray[Math.floor(Math.random()*responseArray.length)]
    }
}

// function recapFunction(message){
//     var currentTime = message.createdAt;
//     return currentTime;
//
// }


client.login(auth.token);