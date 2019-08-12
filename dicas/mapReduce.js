
/*

O map transforma o item em subTotal.

O reduce soma os valores transformados!

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

const subtotal = item => item.preco * item.qnt;

const reduzir = (soma, subtotal) => {
    return subtotal + soma;
}

const total = carrinho.map(subtotal).reduce(reduzir, 0)

console.log(total);
