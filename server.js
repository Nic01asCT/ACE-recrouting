require('dotenv').config()

const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'ACE recruting API',
            version: '1.0.0',
            description: 'Documentation for the ACE recrouting API and all endpoints of it'
        }
    },
    basePath: '/api',
    apis: ['./routes/*.js'],
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

const tempRouter = require('./routes/temp')
const primeRouter = require('./routes/prime')
const numberRouter = require('./routes/number')

app.use('/api/temp', tempRouter)
app.use('/api/prime', primeRouter)
app.use('/api/number', numberRouter)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})