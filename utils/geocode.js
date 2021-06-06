const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaGFycmY4MTUiLCJhIjoiY2twa2hndmNrMGVrMzJvcnhzMmdyajJxdyJ9.1j8PZSuoUXtSgc7ImbT_-Q&limit=1'

    request({ url: url, json: true }, (error, response) => {

        if (error) {
            callback('Unable to connect location service!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                lat: response.body.features[0].center[1],
                long: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode