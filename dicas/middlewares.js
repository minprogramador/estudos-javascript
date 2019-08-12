

//Javascript - Middleware/pipeline pattern
//sequencia de passos 1 por 1 <3
//empilha funcionabilidades.

const App = () => {
    const middlewares = [];

    const use = fn => middlewares.push(fn)

    const runMiddlewares = (index) => {
        const count = middlewares.length;

        if(index < count)
            middlewares[index].call(null, () => runMiddlewares(index+1) )
    };

    const get = () => {
        runMiddlewares(0);
//        console.log(middlewares);
        console.log('get');
    };

    return {
        get,
        use
    }
}


const app = App();

app.use( (next) => {
    console.log('primeiro');
    next()
});

app.use( (next) => {
    setTimeout( () => {
        console.log('esperou 2s....');
    }, 2000);
});

app.use( (next) => {
    console.log('segundo');
    next()
});

app.get();