const express = require('express')
const router = express.Router()

const { getFibonacci } = require('../middleware/calc')

/**
 * @swagger
 * tags:
 *   name: Number (fibonacci)
 *   description: API endpoints related to fibonacci numbers
 */

/**
 * @swagger
 * /api/number:
 *   get:
 *     summary: Get Fibonacci number for a given position
 *     tags: [Number (fibonacci)]
 *     parameters:
 *       - in: query
 *         name: n
 *         required: true
 *         type: integer
 *         description: The position of the Fibonacci number to retrieve
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Invalid request or missing parameters
 */
router.get('/', getFibonacci, (req, res) => {
    res.status(200).send(req.number)
})

module.exports = router