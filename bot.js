const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    console.log(message);
    // Command Messages - Starting with `!`
    if (message.content.substring(0, 1) == '!') {
        var args = message.content.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);

        switch(cmd) {
          // !help
    	    case 'help':
            message.channel.send('UwU here is what I can do for you, senpai: \n\t!link ---> gimme those wacky 6 digits and I will give you the sauce \n\t!random ---> Your risky click of the day');
          break;
    	    // !link
          case 'link':
            message.channel.send('http://www.nhentai.com/g/' + args);
          break;
    	    // !random
    	    case 'random':
            var i = Math.floor(Math.random() * 1000000);
            message.channel.send('http://www.nhentai.com/g/' + i);
          break;
         }
     }
     // Response Messages
     if (message.content.contains('anime')) {
       message.channel.send('Anime is a sin');
     }
});

client.login(process.env.BOT_TOKEN);
