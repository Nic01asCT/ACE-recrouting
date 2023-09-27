const express = require('express')
const router = express.Router()

const { getPrimes } = require('../middleware/calc')

/**
 * @swagger
 * tags:
 *   name: Primes
 *   description: API endpoints related to prime numbers
 */

/**
 * @swagger
 * /api/primes:
 *   get:
 *     summary: Get prime numbers up to a specified limit
 *     tags: [Primes]
 *     parameters:
 *       - in: query
 *         name: limit
 *         required: true
 *         type: integer
 *         description: The limit up to which to find prime numbers
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Invalid request or missing parameters
 */
router.get('/', getPrimes, (req, res) => {
    res.status(200).send(req.primes)
})

module.exports = router