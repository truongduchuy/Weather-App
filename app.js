const request = require('request')

const url = 'https://api.darksky.net/forecast/0c4be23f44cef1fafa8974bb9ca2334a/16.470410,107.596537?units=si'

request({url, json: true}, (error, response) => {
    console.log(`It is currently ${response.body.currently.temperature} degrees out.There is a ${response.body.currently.precipProbability*100}% chance of rain`)
})