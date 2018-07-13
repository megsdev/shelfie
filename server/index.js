const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const controller = require('./controller')
const cors = require('cors')

require('dotenv').config({ path: `${__dirname}/.env` })

const app = express()

app.use( bodyParser.json() )
app.use(cors())

massive(process.env.CONNECTION_STRING, {
    scripts: `${__dirname}/db`

}).then( dbInstance => {
    app.set('db', dbInstance)
}).catch(error => console.log(error))



//ENDPOINTS
app.get('/api/inventory', controller.getInventory)
app.post('/api/product', controller.addProduct)
app.delete('/api/product/:id', controller.delete)
app.put('/api/product/:id', controller.edit)
app.get('/api/inventory/:id', controller.getOne)


const port = 4000
app.listen( port, () => { console.log(`server listening on port ${port}`)})