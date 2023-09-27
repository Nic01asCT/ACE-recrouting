function convertTo(req, res, next) {
    const { celsius, kelvin } = req.query
    if (!celsius && !kelvin) res.status(400).json({ error: 'No temperature value provided' })
    
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

module.exports = {
    convertTo
}