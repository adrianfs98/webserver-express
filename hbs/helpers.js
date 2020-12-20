const hbs = require('hbs');
//Helpers

//? lo que hace con los helpers es, primero mirar el render si la variable o que pide el html esta, sino esta se va a los helpers para ver si esta

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear()
})

//? metodo para que nos ponga lo que nos pase a mayuscula la primera letra de cada palabra
hbs.registerHelper('capitalize', (text) => {

    let palabras = text.split(' ')
    for (const i in palabras) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase()
    }

    return palabras.join(' ')
})