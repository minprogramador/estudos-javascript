
/*
    Contador com closure / preserva o escopo.
    com arrow function.
    Exemplo 2.

*/

const contador = function(num) {
 
    let atual = 1
    let timer = setInterval( () => {
        if(atual === num) {
            clearInterval(timer);
        }
        console.log(atual++, num)
    }, 1000)
}

contador(5);

contador(10);