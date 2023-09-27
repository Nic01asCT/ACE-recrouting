const express = require('express')
const router = express.Router()

const { convertTo } = require('../middleware/calc')

router.get('/', convertTo, (req, res) => {
    res.status(200).send(req.result)
})

module.exports = router