class Waifu {
  //const users = require('./waifuUsers.json')

  // TODO: create/pull the json for everyones info
  constructor(message, args, users) {
    this.author = message.author;
    this.args = args.toString();
    this.rString = '';
    this.users = users;
  }

  // checkExisting() {
  //   const users = readjson();
  //   console.log('json successfully ported', users);
  //   var temp = this.author.username;
  //   if(users.contains(temp)) {
  //     return true;
  //   }
  //   return false;
  // }

  main() {
    // Keep running as long as there is no determined output
    console.log(this.author.username);
    if(this.args == 'help'){
      this.rString = 'I can set you up with the waifu of your dreams. Type \'!waifu roll\' to roll for a random waifu to get started'
    }
    while(this.rString == '') {
      if (this.author.username in this.users) {
        // TODO: add the user
        this.rString = 'User exists in the json';
      }
      this.rString = 'New user detected. You have been added to the database';
    //   switch(this.args) {
    //     // TODO: add subcommands: roll,
    //   }
    // this.rString = 'passed the test';
    }
    return this.rString;
  }
}
module.exports = Waifu;
