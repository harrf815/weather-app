

const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=c2acdde62e495458535872c4f09622d5&query=37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})