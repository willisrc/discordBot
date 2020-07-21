class Waifu {
  var rString = '';
  //const users = require('./waifuUsers.json')

  // TODO: create/pull the json for everyones info
  constructor(message, args) {
    this.author = message.author;
    this.args = args.toString();
  }

  main() {
    // Keep running as long as there is no determined output
    if(args == 'help'){
      rString = 'I can set you up with the waifu of your dreams. Type \'!waifu roll\' to roll for a random waifu to get started'
    }
    while(rString == '') {
      if (!checkExisting()) {
        // TODO: add the user
      }
      switch(args) {
        // TODO: add subcommands: roll,
      }
    }
    return rString;
  }

  getStats() {
    // return `
    //   Author: ${this.author} \nArgs: ${this.args}
    // `;
    const fs = require('fs')
    fs.readFile('./waifuScript/waifuUsers.json', 'utf8', (err, jsonString) => {
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

  // if the user exists in the logs, return true
  checkExisting() {
    // TODO: read the json
  }


}

module.exports = Waifu;
