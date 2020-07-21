class Waifu {
  //var rString = null;
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
    return `
      Author: ${this.author} \nArgs: ${this.args}
    `;
  }

  // if the user exists in the logs, return true
  checkExisting() {
    // TODO: read the json
  }


}

module.exports = Waifu;
