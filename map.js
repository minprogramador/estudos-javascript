
/*
//#Percorrer elementos de um vetor/array
*/

const vetor = [
    {
        id: 1,
        nome: 'Manoel',
        categoria: 1
    },
    {
        id: 2,
        nome: 'Maria',
        categoria: 2
    }
];

const categorias = {
    1: 'Bicicletas',
    2: 'Natação'
}

/*
//forma antiga.
const vetor2 =vetor.forEach( (num, index) => {
    let ok = vetor[index] = num.nome;
    console.log('Nome: ', ok);
 });
*/ 

/*
vetor.map( (item) => {
   // console.log(item);
   // return item;
});
*/


//#modo arrow function 1
// const vetor2 = vetor.map((item) => {
//     return 'Nome: ' + item.nome;
// });



//#modo arrow function 2, enxuto.
//const vetor2 = vetor.map((item) => 'Nome: ' + item.nome );

//console.log(vetor2);


//#Atribuir o nome de categoria com o map.
//mapeando valores.

const vetor3 = vetor.map((item) => {
    item.categoria = categorias[item.categoria];
    return item;
});

console.log(vetor3);