const request = require('postman-request');
const GEO_API_KEY = require('../../api/geocoding');


const geocode = (address, callback) => {
    const uriComponent = encodeURIComponent(address);
    const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${uriComponent}.json?access_token=${GEO_API_KEY}&limit=1`;

    request({ url: geocodingUrl, json: true}, (error, res) => {
        if(error) {
            callback('Unable to connect to location services', undefined);
        } else if(res.body.features.length === 0) {
            callback('No matching results. Try another location.', undefined)
        } else {
            const { center, place_name } = res.body.features[0];
            callback(undefined, { 
                longitude: center[0], 
                latitude: center[1], 
                place_name 
            });
        }
    });
};

module.exports = geocode;