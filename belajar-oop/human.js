/** @format */

class Human {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  greeting() {
    console.log(`Hello, my name is ${this.name} and I live in ${this.address}`);
  }

  work() {
    return `I am working`;
  }
}

module.exports = Human;
