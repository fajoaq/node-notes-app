const request = require('postman-request');
const API_KEY = require('../api/weatherstack.js')
const chalk = require('chalk');

const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=37.8267,-122.4233&units=f`

request({ url, json: true }, (error, res) => {
    const { temperature, feelslike, weather_descriptions } = res.body.current;
    console.log(`It is currently ${weather_descriptions[0].toLowerCase()}, ${chalk.blue(temperature)} degrees out.`);
    console.log(`It feels like ${chalk.blue(feelslike)} degrees.`);
});
