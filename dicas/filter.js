

const carrinho = [
    {
        id: 1,
        preco: 2,
        qnt: 2,
        estoque: 10
    },
    {
        id: 2,
        preco: 3,
        qnt: 5,
        estoque: 2
    }
];


const subtotal = item => item.preco * item.qnt;
const reduzSoma    = (soma, subtotal) => subtotal + soma;
const filtroEmEstoque = item => item.estoque >= item.qnt;

const total = carrinho.filter(filtroEmEstoque).map(subtotal).reduce(reduzSoma, 0)

console.log(total);


//const semEstoque = carrinho.filter(item => item.estoque < item.qnt)

//console.log(semEstoque);

