class Waifu {
  //const users = require('./waifuUsers.json')

  // TODO: create/pull the json for everyones info
  constructor(message, args) {
    this.author = message.author;
    this.args = args.toString();
    this.rString = '';
  }

  readJson() {
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

  checkExisting() {
    const users = readjson();
    console.log('json successfully ported', users);
    var temp = this.author.username;
    if(users.contains(temp)) {
      return true;
    }
    return false;

  }

  main() {
    // Keep running as long as there is no determined output
    console.log(this.author.username);
    if(this.args == 'help'){
      this.rString = 'I can set you up with the waifu of your dreams. Type \'!waifu roll\' to roll for a random waifu to get started'
    }
    while(this.rString == '') {
      if (!checkExisting()) {
        // TODO: add the user
      }
      switch(this.args) {
        // TODO: add subcommands: roll,
      }
    }
    return this.rString;
  }
}
module.exports = Waifu;
