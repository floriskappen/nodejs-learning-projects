const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/3737a27c88d45cc644b0cec7c29349e3/' + latitude + ',' + longitude + '?units=si'

    request({
        url,
        json: true
    }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to forecast services!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                summary: body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + 'C out. There is a ' + body.currently.precipProbability + '% chance of rain.',
                temperatureMin: body.daily.data[0].temperatureMin,
                temperatureMax: body.daily.data[0].temperatureMax,
            })
        }
    })
}

module.exports = forecast