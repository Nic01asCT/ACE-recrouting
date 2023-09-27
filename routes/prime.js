const express = require('express')
const router = express.Router()

const { getPrimes } = require('../middleware/calc')

router.get('/', getPrimes, (req, res) => {
    res.status(200).send(req.primes)
})

module.exports = router