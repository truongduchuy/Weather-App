const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Define paths for Express.config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '..//templates/partials')

const app = express()

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
    res.render('index', {
        title: 'Home',
        name: 'huy'
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        title: 'may',
        name: 'huy'
    })
})

app.get('/help/*', (req, res)=>{
    res.render('404',{errorMessage: 'help article is not found'})
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'Huy',
        name: 'Huy'
    })
})

app.get('/weather', (req, res)=>{
    if(!req.query.address)
        return res.send({error: 'You must provide an address'})

    geocode(req.query.address, (error, data) => {
        if(error)
            return res.send({error})
        
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error) res.send({error})
            res.send({
                forecast: forecastData,
                location: data.location, 
            })
        })
    })
})



app.get('/*', (req, res)=>{
    res.render('404',{errorMessage: 'Page is not found'})
})

app.listen(3000, ()=>{
    console.log('Server is on up port 3000.')
}) 