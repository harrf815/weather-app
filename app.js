

const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=c2acdde62e495458535872c4f09622d5&query=37.8267,-122.4233&units=f'
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGFycmY4MTUiLCJhIjoiY2twa2hndmNrMGVrMzJvcnhzMmdyajJxdyJ9.1j8PZSuoUXtSgc7ImbT_-Q&limit=1'

request({ url: url, json: true }, (error, response) => {

    if(error){
        console.log('Unable to connect to weather service!', 'Code: ' + error.code)
    } else if (response.body.error) {
        console.log("Unable to find location", 'Code: ' + response.body.error.info)
    }else {
        console.log('The weather is currently: ' + response.body.current.temperature + ' degrees')
    }

})

request({ url: geocodeURL, json: true}, (error, response) => {

    if(error){
        console.log('Unable to connect to location service!', 'Code: ' + error.code)
    } else if (response.body.features.length === 0) {
        console.log("Invalid location. Please try again!")
    } else {
        const long = response.body.features[0].center[0]
        const lat = response.body.features[0].center[1]
        console.log(lat, long)
    }
})
