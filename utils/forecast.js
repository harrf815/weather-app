
const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c2acdde62e495458535872c4f09622d5&query='+ lat + ',' + long +'&units=f'

    request({ url: url, json: true }, (error, response) => {

        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'The weather is currently: ' + response.body.current.temperature + ' degrees' )
        }
    })
}

module.exports = forecast