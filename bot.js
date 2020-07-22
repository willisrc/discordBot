const Discord = require('discord.js');
const client = new Discord.Client();

const Waifu = require('./waifuScript/waifu');

client.on('message', message => {
    //console.log(message);
    // Command Messages - Starting with `!`
    if (message.content.substring(0, 1) == '!') {
        var args = message.content.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);

        switch(cmd) {
          // !help
    	    // case 'help':
          //   const hp = require('fs')
          //   hp.readFile('files/help.txt', (err, data) => {
          //     if (err) throw err;
          //   //console.log(data.toString());
          //   message.channel.send(data.toString());
          //   });
          // break;

          case 'setstatus':
            statusSet(message, args);
          break;

    	    // !saucelink
          // case 'saucelink':
          //   message.channel.send('http://www.nhentai.com/g/' + args);
          // break;

    	    // !saucerandom
    	    case 'saucerandom':
            var i = Math.floor(Math.random() * 1000000);
            message.channel.send('http://www.nhentai.com/g/' + i);
          break;

          // !waifu
    	    case 'waifu':
            const newWaifu = new Waifu(message, args);
            const users = readJson('./waifuScript/waifuUsers.json');
            message.channel.send(newWaifu.main());
          break;

          //!roll
          case 'roll':
            switch(args.toString().trim()) {
              case 'd20':
                var i = Math.floor(Math.random() * 20) + 1;
                message.channel.send(i);
              break;

              case 'd6':
                var i = Math.floor(Math.random() * 6) + 1;
                message.channel.send(i);
              break;

              default:
                message.channel.send('Please specify what you\'d like to roll (d20, d6, etc)');
              break;
            }
          break;

          //!odds
          case 'odds': case 'Odds':
            var i = Math.floor(Math.random() * 101);
            message.channel.send('Odds are ' + i + "%");
          break;

          //!penissize
          case 'penissize': case 'dicksize':
            var i = Math.floor(Math.random() * 61);
              if (i == 60) {
                message.channel.send('BIG DONG');
                return;
              }
            message.channel.send(i + "um");
          break;

          // !copypasta
          case 'copypasta':
            const fs = require('fs')
            fs.readFile('files/copypastas.txt', (err, data) => {
              if (err) throw err;
            //console.log(data.toString());

            var arr = data.toString().split('\n');
            var i = Math.floor(Math.random() * arr.length);
            message.channel.send(arr[i]);
          });
          break;

          // !food
          case 'food':
            const f = require('fs')
            f.readFile('files/food.txt', (err, data) => {
              if (err) throw err;
            //console.log(data.toString());

            var arr = data.toString().split('\n');
            var i = Math.floor(Math.random() * arr.length);
            message.channel.send(arr[i]);
          });
          break;

          // !fetish
          case 'fetish':
            const fs1 = require('fs')
            fs1.readFile('files/fetish.txt', (err, data) => {
              if (err) throw err;
            //console.log(data.toString());

            var arr = data.toString().split('\n');
            var i = Math.floor(Math.random() * arr.length);
            message.channel.send(arr[i]);
          });
          break;

          //!help
          case 'help':
          // inside a command, event listener, etc.
            const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Konichiwa Senpais!')
            .setURL('https://nhentai.com/')
            .attachFiles(['./images/godisdead.jpg', './images/slack.png'])
	          //.setImage('attachment://godisdead.jpg');
            .setAuthor('Slack-chan', 'attachment://godisdead.jpg', 'https://en.wikipedia.org/wiki/Ahegao')
            .setDescription('Slack-chan is here to fullfill all of your needs! This bot was made with the purpose of having a Slackbot equivalent in Discord! All of your favorite commands have been moved to here! Here is what I can currently do: ' +
              '\n (Slack-chan is currently in beta)')
            .setThumbnail('attachment://slack.png')
            .addFields(
              { name: 'Commands', value: '!help - it\'s the command you just typed, dumbass' +
              '\n!odds/!Odds - I\'ll tell you the odds' +
              '\n!penissize/!dicksize - Find out what you\'re penis size is. I can tell you right now it\'s small' +
              '\n!fetish - Wanna know you\'re fetish? I sure as hell don\'t. But I\'ll tell ya' +
              '\n!copypasta - random copypasta' +
              '\n!saucerandom - Your risky click of the day' +
              '\n!statusset - sets my status' +
              '\n!food - where you can get da gud eats' +
              '\n!roll - roll the dice'
              },
              // { name: '\u200B', value: '\u200B' },
              // { name: 'Inline field title', value: 'Some value here', inline: true },
              // { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .addField('Reactions', 'In addition to commands, there are some key words that will set me off', true)
            .setImage('https://media.giphy.com/media/jleNxE9BsJVO8/source.gif')
            .setTimestamp()
            .setFooter('Bow before me, peasants', 'attachment://godisdead.jpg');

            message.channel.send(embed);
          break;
         }
     }
     // Random Response Messages
     if (message.content.includes('anime')) {
       message.channel.send('Anime is a sin');
       return;
     }

     if (message.content.includes('bleach')) {
       message.channel.send('an engineer\'s favorite drink!');
       return;
     }

     if (message.content.includes('rawr')) {
       message.channel.send('Rawr x3 nuzzles how are you pounces on you you\'re so warm o3o notices you have a bulge o: someone\'s happy ;) nuzzles your necky wecky~ murr~ hehehe rubbies your bulgy wolgy you\'re so big :oooo rubbies more on your bulgy wolgy it doesn\'t stop growing ·///· kisses you and lickies your necky daddy likies (; nuzzles wuzzles I hope daddy really likes $: wiggles butt and squirms I want to see your big daddy meat~ wiggles butt I have a little itch o3o wags tail can you please get my itch~ puts paws on your chest nyea~ its a seven inch itch rubs your chest can you help me pwease squirms pwetty pwease sad face I need to be punished runs paws down your chest and bites lip like I need to be punished really good~ paws on your bulge as I lick my lips I\'m getting thirsty. I can go for some milk unbuttons your pants as my eyes glow you smell so musky :v licks shaft mmmm~ so musky drools all over your cock your daddy meat I like fondles Mr. Fuzzy Balls hehe puts snout on balls and inhales deeply oh god im so hard~ licks balls punish me daddy~ nyea~ squirms more and wiggles butt I love your musky goodness bites lip please punish me licks lips nyea~ suckles on your tip so good licks pre of your cock salty goodness~ eyes role back and goes balls deep mmmm~ moans and suckles');
       return;
     }

     if (message.content.includes('vibe check')) {
       message.channel.send('You have failed the Vibe check');
       return;
     }

     if (message.content.includes('fitness')) {
       message.channel.send('You can go ahead and fittin\' this dick in your mouth');
       return;
     }

     if (message.content.includes('slack-chan')) {
       message.channel.send('Yeah, keep talking about me like I\'m not here... jackass');
       return;
     }

     if (message.content.includes('stocks') || message.content.includes('stonks')) {
       message.channel.send({files: ['./images/ahegao_stonks.jpg']});
       // message.channel.send('STONKS', {file: ['images/ahegao_stonks.jpg']});
       return;
     }

});

client.login(process.env.BOT_TOKEN);

// FUNCTIONS
function statusSet(message, args) {
  client.user.setActivity(args.toString(), {type: 'WATCHING'});
  message.channel.send('Anything for you, senpai');
  return;
}

//Reads in a json file
function readJson(path) {
  const fs = require('fs')
  fs.readFile(path, 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    try {
      const users = JSON.parse(jsonString)
      console.log('File data:', users)
    }
    catch(err) {
      console.log('Error parsing JSON string:', err)
    }
  })
    return users;
}

// function waifudrop(message, args) {
//   client.user.setActivity(args.toString(), {type: 'WATCHING'});
//   message.channel.send('Anything for you, senpai');
//   return;
// }
