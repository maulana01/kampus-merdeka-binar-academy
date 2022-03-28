/** @format */

class Human {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }

  static isEating(food) {
    let foods = ['plant', 'animal'];
    return foods.includes(food.toLowerCase());
  }
}

let mj = new Human('Michael Jackson', 'Jakarta');
console.log(mj);

console.log(mj.introduce());
console.log(Human.isEating('Plant'));
console.log(Human.isEating('Human'));
