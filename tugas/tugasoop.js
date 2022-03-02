/** @format */

class Mobil {
  static bergerakdidarat() {
    return true;
  }

  constructor(merek, warna, manual) {
    this.merek = merek;
    this.warna = warna;
    this.manual = manual;
  }

  mobilku() {
    // return (
    //   'Mobil ku bermerek ' +
    //   this.merek +
    //   ' berwarna ' +
    //   this.warna +
    //   ' yang memiliki mesin ' +
    //   (this.manual ? 'Manual' : 'Otomatis') +
    //   ' dan bisa bergerak ' +
    //   (Mobil.bergerakdidarat() ? 'didarat' : 'diudara')
    // );

    return `Mobil ku bermerek ${this.merek} berwarna ${this.warna} yang memiliki mesin ${
      this.manual ? 'Manual' : 'Otomatis'
    } dan bisa bergerak ${Mobil.bergerakdidarat() ? 'didarat' : 'diudara'}`;
  }
}

let bmw = new Mobil('BMW', 'Item', true);

console.log(bmw);
console.log(Mobil.bergerakdidarat());
console.log(bmw.mobilku());
