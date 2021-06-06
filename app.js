

const request = require('request')
const geocode = require('./utils/geocode')

const url = 'http://api.weatherstack.com/current?access_key=c2acdde62e495458535872c4f09622d5&query=37.8267,-122.4233&units=f'
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGFycmY4MTUiLCJhIjoiY2twa2hndmNrMGVrMzJvcnhzMmdyajJxdyJ9.1j8PZSuoUXtSgc7ImbT_-Q&limit=1'

// request({ url: url, json: true }, (error, response) => {

//     if(error){
//         console.log('Unable to connect to weather service!', 'Code: ' + error.code)
//     } else if (response.body.error) {
//         console.log("Unable to find location", 'Code: ' + response.body.error.info)
//     }else {
//         console.log('The weather is currently: ' + response.body.current.temperature + ' degrees')
//     }

// })






// geocode('Oakland', (error, data) => {
//     console.log(error)
//     console.log(data)
// })