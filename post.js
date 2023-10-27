class Post {
  name;

  #number = 0;

  constructor(name) {
    this.name = name;
  }

  get summary() {
    return `${this.name} publication number ${this.#number}`;
  }
}
module.exports = Post;
