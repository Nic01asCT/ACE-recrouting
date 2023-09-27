require('dotenv').config()

const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

const tempRouter = require('./routes/temp')
const primeRouter = require('./routes/prime')
const numberRouter = require('./routes/number')

app.use('/temp', tempRouter)
app.use('/prime', primeRouter)
app.use('/number', numberRouter)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})