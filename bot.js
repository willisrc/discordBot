const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', , function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    console.log(message.content);
    if (message.content.substring(0, 1) == '!') {
        var args = message.content.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !help
	    case 'help':
                client.sendMessage({
                    to: channelID,
                    message: 'UwU here is what I can do for you, senpai: \n\t!link ---> gimme those wacky 6 digits and I will give you the sauce \n\t!random ---> Your risky click of the day'
                });
            break;
			
	    // !sauce
            case 'link':
                client.sendMessage({
                    to: channelID,
                    message: 'http://www.nhentai.com/g/' + args
                });
            break;
			
	    // !random
	    case 'random':
                var i = Math.floor(Math.random() * 1000000);
		client.sendMessage({
		    to: channelID,
                    message: 'http://www.nhentai.com/g/' + i
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
