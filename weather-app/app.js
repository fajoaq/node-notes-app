const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('philadelphia', (error, data) => {
    if(error) console.log('Error: ', error)
    if(data) console.log('Data: ', data)
});
 
forecast(44.1545, -75.7088, (error, data) => {
    if(error) console.log('Error: ', error)
    if(data) console.log('Data: ', data)
})