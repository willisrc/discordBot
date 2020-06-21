const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('Ready to give the sauce');

});

 

client.on('message', message => {
    console.log(message);
    if (message.content === 'daddy') {

       message.reply('yes?');

       }

});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
