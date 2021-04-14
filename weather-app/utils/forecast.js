const request = require('postman-request');
const WS_API_KEY = require('../../api/weatherstack');
const chalk = require('chalk');

const forecast = (longitude, latitude, callback) => {
    const weatherUrl = `http://api.weatherstack.com/current?access_key=${WS_API_KEY}&query=${longitude},${latitude}&units=f`

    request({ url: weatherUrl, json: true }, (error, res) => {
        if(error) {
            console.log("Unable to connect to weather service.")
            callback(error, undefined);
        } else if(res.body.error) {
            console.log("Unable to find location.")
            callback(res.body.error, undefined);
        } else {
            const { temperature, feelslike, weather_descriptions } = res.body.current;
            const data = `
            It is currently ${chalk.blue(temperature)} degrees out, ${weather_descriptions[0].toLowerCase()}. 
            It feels like ${chalk.blue(feelslike)} degrees.`;

            callback(undefined, data)
        }
    });
};

module.exports = forecast;