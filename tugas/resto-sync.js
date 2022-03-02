const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Selamat Datang di restoran kami, siapa nama anda?", (answer)=> {
 console.log(`Hello ${answer}`);
 pilihMakanan(answer);
})
function pilihMakanan(nama){
    let makanan
    console.log(`Anda Mau Makan Apa ${nama} ?`)
    console.log("(1)Nasi Goreng , (2)Mie Goreng , (3)Mie Rebus ");
    rl.question("Silahkan Masukkan nomor Pilihan Menu Anda?", (answer)=>{
        switch(answer){
            case "1":
                makanan = "Nasi Goreng";
                break;
            case "2":
                makanan = "Mie Goreng";
                break;
            default:
                makanan = "Mie Rebus";
        }
        
        console.log(`Tunggu sebentar pesanan ${makanan} sedang dibuat`)
        setTimeout(() => console.log(`Selamat Menikmati Makanan ${makanan} nya`), 10000)
        // console.log(`Selamat Menikmati Makanan ${makanan} nya`)
        pilihMinuman(nama);
    })
}

function pilihMinuman(nama){
    console.log(`Anda Mau Minum Apa ${nama} ?`)
    console.log("(1)Es Teh , (2)Jus Jeruk , (3)Es Campur ");
    let minuman;
    rl.question("Silahkan Masukkan nomor Pilihan Menu Anda?", (answer)=>{
        switch(answer){
            case "1":
                minuman = "Es Teh";
                break;
            case "2":
                minuman = "Jus Jeruk";
                break;
            default:
                minuman = "Es Campur";
        }
        
        console.log(`Tunggu sebentar pesanan ${minuman} sedang dibuat`)
        setTimeout(() => console.log(`Selamat menikmati minuman ${minuman} nya`), 2000)
        rl.close();
    })
}