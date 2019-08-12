



function $(nome) {
    return {
        hide() {
            console.log('Esconder o ', nome);
        }
    }
}


$('div').hide();