class Post {
  name;

  #subscribers = [];

  #number = 0;

  constructor(name) {
    this.name = name;
  }

  get summary() {
    return `${this.name} publication number ${this.#number}`;
  }

  getSubscribers() {
    return this.#subscribers.map((user) => user.name).join(',');
  }

  attach(user) {
    if (!this.#subscribers.includes(user)) {
      this.#subscribers.push(user);
    }
  }

  detach(user) {
    if (this.#subscribers.includes(user)) {
      this.#subscribers.splice(this.#subscribers.indexOf(user), 1);
    }
  }
}
module.exports = Post;
