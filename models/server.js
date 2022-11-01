const express = require('express')

class Server{
    app = express()
    port = process.env.PORT
    constructor(){
        this.routes();
    }

    routes(){
        this.app.get('/', (req, res) => res.send('Hello World!'))
    }

    listen(){
        this.app.listen(this.port, () => console.log(`servidor HTTP port: ${this.port}`))
    }
}

module.exports = Server;