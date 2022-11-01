const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT
app.get('/', (req, res) => res.send('Hello World!'))
/*app.get('/empleado', (req,res)=>{
    res.json({"id":121212,"nombre":"Juan"})
})*/
app.listen(port, () => console.log(`servidor HTTP port: ${port}`))