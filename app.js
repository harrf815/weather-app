
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


forecast(37.8045, -122.2714, (error, data) => {
    console.log(error)
    console.log(data)
})

geocode('Oakland', (error, data) => {
    console.log(error)
    console.log(data)
})