const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = `https://api.darksky.net/forecast/0c4be23f44cef1fafa8974bb9ca2334a/${latitude},${longtitude}?units=si`

    request({url, json: true}, (error, response) => {
        if(error)
            callback('Unable to connect weather service!', undefined)
        else if(response.body.error)
            callback('Unable to find location', undefined)
        else
           console.log(undefined, `It is currently ${response.body.currently.temperature} degrees out.There is a ${response.body.currently.precipProbability*100}% chance of rain`)
    })
}

module.exports = forecast