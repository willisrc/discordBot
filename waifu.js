class Waifu {
  constructor(message, args) {
    this.author = message.author;
    this.args = args;
  }

  getStats() {
    return `
      Author: ${this.author} \nArgs: ${this.args}
    `;
  }

  checkExisting() {

  }


}

module.exports = Waifu;
