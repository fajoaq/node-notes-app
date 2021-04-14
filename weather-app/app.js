const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Porto Portugal', (error, data) => {
    if(error){
        console.log('Error: ', error)
    } else if(data) {
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error) console.log('Error: ', error)
            else if(forecastData) console.log('Data: ', data.place_name, forecastData)
        });   
    }
});