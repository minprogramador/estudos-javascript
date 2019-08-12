
const fs = require('fs');

/*
    # utlizando callback

*/

fs.readFile('./file.txt', function(err, res) {
    console.log('---> Callback - Tamanho do txt 1: ', String(res).length);
    fs.readFile('./file2.txt', function(err, res2) {
        console.log('---> Callback - Tamanho do txt 2: ', String(res2).length);
    });
});