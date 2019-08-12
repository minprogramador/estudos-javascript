/*
    Chainability com javascript de: youtube.com/watch?v=L3dyVrLP6Ic
    > Objetos dentro da arrow function
    a cada methodo, retornar o proprio obj.

    > Fazendo uma calculadora < 
*/

const calculadora = (inicial = 0) => {
    const obj = {
        total: inicial,
        add:  (num) => {
            obj.total+= num;
            return obj;
        },
        sub: (num) => {
            obj.total-= num;
            return obj;
        },
        div:  (num) => {},
        mult: (num) => {},
        out: () => {
            console.log(obj.total);
            return obj;
        }
    }
    return obj;
}

calculadora().add(10).sub(5).out().add(3).out();