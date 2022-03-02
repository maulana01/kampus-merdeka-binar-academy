let jumlahPersedian = 3;

function promisePersediaan(jumlah) {
    return new Promise((resolve, reject) => {
        if (jumlah <= jumlahPersedian) {
            jumlahPersedian -= jumlah;
            resolve(`Sisa ${jumlahPersedian} persedian`);
        } else {
            reject(`Habis`);
        }
    });
}

const ambil = async (jumlah) => {
    try {
        const result = await promisePersediaan(jumlah);
        console.log(result);
    } catch (error) {
        console.log(error);   
    }
}

ambil(1);
ambil(2);
ambil(3);      