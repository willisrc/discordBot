const waifudrop = (message, args) => {
  return 'hi';
}

exports.waifudrop = waifudrop;

class Waifu {
  constructor(message, args) {
    this.author = message.author;
    this.args = args;
  }

  getStats() {
    return `
      Author: ${this.author}
      Args: ${this.args}
    `;
  }
}
