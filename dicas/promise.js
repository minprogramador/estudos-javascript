
const fs = require('fs');

// # utilizando Promise

const lerArquivo = arquivo => new Promise( (resolve, reject) => {
    fs.readFile(arquivo, (err, res) => {
        if(err) {
            reject(err);
        }else{
            resolve(res);
        }
    });
});

const promessa = lerArquivo('./file.txt').then(res => {
    console.log('----> Promise then - Tamanho do txt 1: ', String(res).length);
    //se quiser encadear promises, basta usar return e then abaixo.
    return lerArquivo('./file2.txt');
}).then(res2 => {
    console.log('----> Promise then - Tamanho do txt 2: ', String(res2).length);
    console.log(`\n`);
})
