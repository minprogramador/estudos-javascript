

/*
    Diferenças entre:
    callback > promise > async/await
    
    Utilizando o filesystem com nodejs.
    
    origem: youtube.com/watch?v=7Bs4-rqbCQc
*/


const fs = require('fs');


//# utlizando callback
fs.readFile('./file.txt', function(err, res) {
    console.log('---> Callback - Tamanho do txt 1: ', String(res).length);
    fs.readFile('./file2.txt', function(err, res2) {
        console.log('---> Callback - Tamanho do txt 2: ', String(res2).length);
        console.log(`\n`);
    });
});


// //============================================================================//

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


//============================================================================//

//# Usando async await

const init = async() => {
    try{
        const res  = await lerArquivo('./file.txt');
        const res2 = await lerArquivo('./file2.txt');

        return '-----> Promise async await - Tamanho do txt 1: ' + String(res).length +
        "\n-----> Promise async await - Tamanho do txt 2: " + String(res2).length;
    }catch(err){
        console.log(err);
    }
}


init().then(res => {
    console.log(res);
});

