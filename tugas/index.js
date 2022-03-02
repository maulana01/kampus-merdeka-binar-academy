const fs = require('fs')
const option = {encoding : "utf-8"}

const myPromise = new Promise((resolve, reject) => {
    fs.readFile('contoh-lagi.txt', option, (err, res)=> {
        if(err) reject(err);
        resolve(res)
    }); 
})

myPromise.then(response => {
    console.log(response)
}).catch(err => {
    console.log(err.message)
})
