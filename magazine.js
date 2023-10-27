const paidPost = require('./paid-post');

class Magazine extends paidPost {
  constructor(name, price, topic) {
    super(name, price);
    this.topic = topic;
  }

  get summary() {
    return `${super.summary} of ${this.topic}`;
  }
}
module.exports = Magazine;
