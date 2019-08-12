
/*

reduce

para somar valores de um vetor.

*/

const carrinho = [
    {
        id: 1,
        preco: 2,
        qnt: 2
    },
    {
        id: 2,
        preco: 3,
        qnt: 1
    },
    {
        id: 3,
        preco: 3,
        qnt: 3
    }    
];

const total = carrinho.reduce( (soma, item) => item.preco + soma, 0);

console.log(total);