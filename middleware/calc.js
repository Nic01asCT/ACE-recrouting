function convertTo(req, res, next) {
    const { celsius, kelvin } = req.query
    if (!celsius && !kelvin) res.status(400).json({ error: 'No value provided' })
    
    if (celsius) {
        if (isNaN(parseFloat(celsius))) res.status(400).json({ error: 'Celsius must be a number' })
        req.result = { 'kelvin': parseFloat(celsius) + 273.15, celsius }
    }

    if (kelvin) {
        if (isNaN(parseFloat(kelvin))) res.status(400).json({ error: 'Kelvin must be a number' })
        req.result = { kelvin, 'celsius': parseFloat(kelvin) - 273.15 }
    }

    next()
}

function getPrimes(req, res, next) {
    const { limit } = req.query
    if (!limit) res.status(400).json({ error: 'No temperature value provided' })
    if (isNaN(parseInt(limit))) res.status(400).json({ error: 'Limit must be a number' })

    let isPrime = new Array(parseInt(limit) + 1).fill(true)
    isPrime[0] = isPrime[1] = false

    for (let i = 2; i <= Math.sqrt(limit); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= limit; j += i) isPrime[j] = false
        }
    }

    let primes = []
    for (let i = 2; i <= limit; i++) if (isPrime[i]) primes.push(i)

    req.primes = { primes }
    next() 
}
module.exports = {
    convertTo,
    getPrimes
}