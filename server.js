require('dotenv').config()

const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})