const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

if(location) {
    geocode(process.argv[2], (error,  { latitude, longitude, location } = {}) => {
        if(error){
            console.log('Error: ', error)
        } else if(location) {
            forecast(latitude, longitude, (error, forecastData) => {
                if(error) console.log('Error: ', error)
                else if(forecastData) console.log('Data: ', location, forecastData)
            });   
        }
    });
} else { 
    console.log('Please provide a location.') 
}
