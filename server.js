const express = require('express')
const app = express()
const hbs = require('hbs');


//? lo que hace con los helpers es, primero mirar el render si la variable o que pide el html esta, sino esta se va a los helpers para ver si esta
//ubicacion helpers
require('./hbs/helpers')

//heroku

const port = process.env.PORT || 3000

//? un middlewere es una instruccion o callback que se va a ejecutar simpre, da igual que url pida el usuario

//* en public es donde va a estar siempre lo publico que pueda ver el usuario, pero sino creamos un app get como los de bajo para el nombre de esa pagina, el usuario solo podra acceder con el nombre completo del archivo

//?EJ: tenemos un home.html en public, pero sino le creamos una isntanci con get, el usuario si intenta acceder con solo .../home no va a poder, debera poner el nombre completo del archivo, en este caso .../home.html

//!para decirle a nodemon que este pendiente y se recarge cada vez que cambian deterninados tipos de archivos: nodemon server -e js,hbs,html,css 

app.use(express.static(__dirname + '/public'))

//* Express HBS engine, una libreria para tipo los componentes de vue y el poder tener mostrar variables en el html

//? le estamos diciendo a hbs que busque en el directotio actual en /views/partials
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', function (req, res) {

    //? le estamos dicendo renderiza esta pagina, que es el hbs que habiamos creado ace un momento
    res.render('home.hbs', {
        nombre: 'adrian ferranNdis'
    })
})

app.get('/about', function (req, res) {

    //? le estamos dicendo renderiza esta pagina, que es el hbs que habiamos creado ace un momento
    res.render('about.hbs', {
        nombre: 'Adrian Ferrandis'
    })
})
app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto ' + 3000)
})