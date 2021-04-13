const geocode = require('./utils/geocode');
const API_KEY = require('../api/weatherstack.js');
const chalk = require('chalk');
/* 
const weatherUrl = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=37.8267,-122.4233&units=f`

request({ url: weatherUrl, json: true }, (error, res) => {
    if(error) {
        console.log('Unable to connect to weather service.');

    } else if (res.body.error) {
        console.log('Unable to find a location.')
    }
    else {
        const { temperature, feelslike, weather_descriptions } = res.body.current;
        console.log(`It is currently ${weather_descriptions[0].toLowerCase()}, ${chalk.blue(temperature)} degrees out.`);
        console.log(`It feels like ${chalk.blue(feelslike)} degrees.`);
    }
});


const geocodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZmFqb2FxIiwiYSI6ImNrbmNudXdieTF1NTQyb296cWVmbDJlbzIifQ.xcbVqKXvrUSWXs_USbb-2A&limit=1';

request({ url: geocodingUrl, json: true }, (error, res) => {
    if(error) {
        console.log('Unable to connect to geocoding service.')
    } else if(res.body.features.length === 0) {
        console.log('No matching results.')
    } else {
        const { center } = res.body.features[0];
        console.log(`longitude: ${chalk.green(center[0])}`);
        console.log(`latitute: ${chalk.green(center[1])}`);
    }
});
 */



geocode('philadelphia', (error, res) => {
    if(error) console.log('Error', error);
    if(res) console.log('Data', res.center, res.place_name);
});