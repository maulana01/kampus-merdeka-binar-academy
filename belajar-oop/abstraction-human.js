/** @format */

class Human {
  constructor(props) {
    if (this.constructor === 'Human') {
      throw new Error('Cannot instantiate from Abstract Class');
    }

    let { name, address } = props;
    this.name = name;
    this.address = address;
    this.profession = this.constructor.name;
  }
}
