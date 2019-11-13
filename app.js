const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address){
    console.log('Please provide an address')
}
else{
    geocode(address, (error, {location, latitude, longitude})=>{
        if(error){
            return console.log(error)
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
    
            console.log(location)
            console.log(forecastData)
        })
    })
}


