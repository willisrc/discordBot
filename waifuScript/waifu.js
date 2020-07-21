class Waifu {
  // var rString = null;
  //const users = require('./waifuUsers.json')

  // TODO: create/pull the json for everyones info
  constructor(message, args) {
    this.author = message.author;
    this.args = args.toString();
  }

  // main() {
  //   // Keep running as long as there is no determined output
  //   while(rString == null) {
  //     if (!checkExisting()) {
  //       // TODO: add the user
  //     }
  //     switch(args) {
  //       // TODO: add subcommands: roll,
  //     }
  //   }
  // }

  getStats() {
    // return `
    //   Author: ${this.author} \nArgs: ${this.args}
    // `;
    const fs = require('fs')
    fs.readFile('./waifuUsers.json', 'utf8', (err, users) => {
      if (err) {
          console.log("File read failed:", err)
          return
      }
      console.log('File data:', users)
      return users;
    })
  }

  // if the user exists in the logs, return true
  checkExisting() {
    // TODO: read the json
  }


}

module.exports = Waifu;
