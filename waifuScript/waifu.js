class Waifu {
  //const users = require('./waifuUsers.json')

  // TODO: create/pull the json for everyones info
  constructor(message, args) {
    this.author = message.author;
    this.args = args.toString();
    this.rString = '';
  }

  main() {
    // Keep running as long as there is no determined output
    console.log(this.author.username);
    if(this.args == 'help'){
      this.rString = 'I can set you up with the waifu of your dreams. Type \'!waifu roll\' to roll for a random waifu to get started'
    }
    while(this.rString == '') {
      const users = readjson();
      if (!checkExisting()) {
        // TODO: add the user
        this.rString = 'New user detected. You have been added to the database';
      }
      console.log('User exists in the json');
      switch(this.args) {
        // TODO: add subcommands: roll,
      }
    }
    return this.rString;

    function checkExisting() {
      const users = readjson();
      console.log('json successfully ported', users);
      var temp = this.author.username;
      if(users.contains(temp)) {
        return true;
      }
      return false;
    }

    function readJson() {
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

  }
}
module.exports = Waifu;
