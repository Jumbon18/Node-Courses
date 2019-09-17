const request = require('request');
const chalk = require('chalk');
const geoCode = require('./utils/geocode');
const weather = require('./utils/forecast');

const address =  process.argv[2];
if(!address){
    console.log('Please provide an address');
}
else {
    geoCode.geoCode(address, (error, {latitude,longitude}) => {
        if (error) {
            console.log(error)
        } else {
            console.log(`Coordinates is : ${latitude} lat and ${longitude} long`);

            weather.forecast(latitude, longitude, (error, data) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(data);
                }
            });

        }

    });


}