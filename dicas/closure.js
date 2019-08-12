
/*
## Closure em js.

Funções dentro de funções.
a interna tem acesso ao escopo da função pai.

origem: youtube.com/watch?v=Iyp4F5TRjU8
*/


function func1(nome) {

    const saudacao = 'Olá ' + nome

    function func1b() {
        console.log(nome);
    }

    return func1b
}

const saudar = func1('Manoel')

saudar()