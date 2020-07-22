class Waifu {
  //const users = require('./waifuUsers.json')

  // TODO: create/pull the json for everyones info
  constructor(message, args) {
    this.author = message.author;
    this.args = args.toString();
    this.rString = '';
  }

  const fs = require('fs')
  function jsonReader(filePath, cb) {
      fs.readFile(filePath, (err, fileData) => {
          if (err) {
              return cb && cb(err)
          }
          try {
              const object = JSON.parse(fileData)
              return cb && cb(null, object)
          } catch(err) {
              return cb && cb(err)
          }
      })
  }

  checkExisting() {
    // TODO: read the json
    jsonReader('./waifuUsers.json', (err, user) => {
      if (err) {
          console.log(err)
          return
      }
    console.log(user)
    })
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

  // getStats() {
  //   // return `
  //   //   Author: ${this.author} \nArgs: ${this.args}
  //   // `;
  //   const fs = require('fs')
  //   fs.readFile('./waifuScript/waifuUsers.json', 'utf8', (err, jsonString) => {
  //     if (err) {
  //         console.log("File read failed:", err)
  //         return
  //     }
  //     try {
  //       const users = JSON.parse(jsonString)
  //       console.log('File data:', users)
  //     }
  //     catch(err) {
  //       console.log('Error parsing JSON string:', err)
  //     }
  //   })
  //   return users;
  // }

  // if the user exists in the logs, return true



}
module.exports = Waifu;
