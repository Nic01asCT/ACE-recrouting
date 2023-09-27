const express = require('express')
const router = express.Router()

const { convertTo } = require('../middleware/calc')

/**
 * @swagger
 * tags:
 *   name: Temperature
 *   description: API endpoints related to temperature
 */

/**
 * @swagger
 * /api/temp:
 *   get:
 *     summary: Get temperature conversion
 *     tags: [Temperature]
 *     description: Convert temperature between celcius and kelvin
 *     parameters:
 *       - in: query
 *         name: celsius
 *         required: false
 *         type: number
 *         description: Temperature in Celsius
 *       - in: query
 *         name: kelvin
 *         required: false
 *         type: number
 *         description: Temperature in Kelvin
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Invalid request or missing parameters
 */
router.get('/', convertTo, (req, res) => {
    res.status(200).send(req.result)
})

module.exports = router