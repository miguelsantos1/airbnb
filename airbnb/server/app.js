// IMPORT
const express = require('express')
const app = express()
const cors = require('cors')

const accommodation = require('./routes/accommodation')

// CONFIG
app.use(express.json())
app.use(cors())

// ROUTES
app.use(accommodation) 

// SERVER
const port = 3333
app.listen(port, () => console.log("Servidor rodando na porta "+port))