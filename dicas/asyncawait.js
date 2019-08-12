const fs = require('fs');

//# Usando async await

const lerArquivo = arquivo => new Promise( (resolve, reject) => {
    fs.readFile(arquivo, (err, res) => {
        if(err) {
            reject(err);
        }else{
            resolve(res);
        }
    });
});


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

