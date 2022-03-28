/** @format */

class Human {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  #doGossip = () => {
    console.log(`My address will become viral ${this.address}`);
  };

  talk() {
    console.log(this.#doGossip());
  }

  static #isHidingArea = true;
}

let mj = new Human('Michael Jackson', 'Jakarta');
console.log(mj.talk());
