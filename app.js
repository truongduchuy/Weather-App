const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
// const url = 'https://api.darksky.net/forecast/0c4be23f44cef1fafa8974bb9ca2334a/16.470410,107.596537?units=si'

// request({url, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect weather service!')
//     }
//     else if(response.body.error)
//         console.log('Unable to find location')
//     else
//     console.log(`It is currently ${response.body.currently.temperature} degrees out.There is a ${response.body.currently.precipProbability*100}% chance of rain`)
// })

// const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Hue,V22ietnam.json?access_token=pk.eyJ1IjoiMDkzNTkwMzcxOCIsImEiOiJjazJzc2RrMmYwbnA3M2RudHJtNXpwbzkyIn0.Idf5PI0HTnwQsXV18liBOg&limit=1';
// request({url: url2, json: true}, (error, response) => {
//     if(error)
//         console.log('Unable to connect location service!')
//     else if(response.body.features.length === 0)
//     console.log('Unable to find location. Try another search')
//     else 
//     console.log(response.body.features[0].center)
// })

geocode('Boston', (error, data)=>{
    console.log('Error', error)
    console.log('Data', data)
})

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })