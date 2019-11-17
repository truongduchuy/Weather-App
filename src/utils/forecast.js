const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = `https://api.darksky.net/forecast/0c4be23f44cef1fafa8974bb9ca2334a/${latitude},${longtitude}?units=si`

    request({url, json: true}, (error, {body}) => {
        if(error)
            callback('Unable to connect weather service!', undefined)
        else if(body.error)
            callback('Unable to find location', undefined)
        else
           callback(undefined, `It is currently ${body.currently.temperature} degrees out. This high today is ${body.daily.data[0].temperatureHigh} with a low of ${body.daily.data[0].temperatureLow}. There is a ${body.currently.precipProbability*100}% chance of rain`)
 
        })
}

module.exports = forecast