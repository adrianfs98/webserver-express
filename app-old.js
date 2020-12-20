const http = require('http')

http.createServer((req, res) => {

        res.writeHead(200, {
            'Content-Type': 'application/json'
        })

        let salida = {
            name: 'adrian',
            url: req.url
        }

        //res.write('hello world')
        res.write(JSON.stringify(salida))
        res.end()
    })

    .listen(8080)

console.log('escuchando puerto 8080')