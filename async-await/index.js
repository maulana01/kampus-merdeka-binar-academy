/** @format */

console.log('ok');
const fs = require('fs');
const option = { encoding: 'utf-8' };

// const callback = (err, data) => {
//   console.log('muncul pertama');
//   if (err) return console.error('Error: ', err);
//   console.log('Isi File : ', data);
// };

// fs.readFile('contoh.txt', option, callback);

// console.log('muncul kedua');

// to promise
const promise = new Promise((resolve, reject) => {
  fs.readFile('contoh.txt', option, (err, data) => {
    if (err) return reject(err);
    resolve(data);
  });
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
