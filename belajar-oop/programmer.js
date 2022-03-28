/** @format */

// const {isLivingOnEarth}
const Human = require('./human.js');
class Programmer extends Human {
  constructor(name, address, programmingLanguage) {
    super(name, address);
    this.programmingLanguage = programmingLanguage;
  }

  introduce() {
    super.greeting();

    return `I can write ${this.programmingLanguage}`;
  }
}

module.exports = Programmer;
