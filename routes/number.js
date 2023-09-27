const express = require('express')
const router = express.Router()

const { getFibonacci } = require('../middleware/calc')

router.get('/', getFibonacci, (req, res) => {
    res.status(200).send(req.number)
})

module.exports = router