
/*
    # arrow functions, funcoes anonimas.
    arrow é igual a: =>


    > Quando se usa o `this`, dentro de uma function, ele o contexto interno.

    > Quando se usa o `this`, dentro de uma arrow function, ele encherga 
    o contexto externo.



    a arrow function nao tem contexto interno, ela esta atrelada ao pai.

*/

//function normal.
const func1 = function(param) {

}



//arrow function
const func11 = (param) => {

}

//----------------------------------------------------------------------------//

//antes
const func2 = function(valor) {
    return valor * 2;
}

//depois
const func22 = (valor) => valor * 2;

//console.log(func2(10));

//----------------------------------------------------------------------------//

const vetor = [1,2,3];

//antes
const vetormap = vetor.map(function(valor) {
    return valor * 2;
})

//depois
const vetormap2 = vetor.map(valor => valor * 2);

console.log(vetormap);