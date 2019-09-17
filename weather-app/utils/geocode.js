const request = require('request');
const chalk  = require('chalk');
const geoCode = (addres, callback) => {


    const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${addres}.json?access_token=pk.eyJ1Ijoib2xla3NpaXB5dm92YXJvdiIsImEiOiJjanYxN3JqNncxMmZoNGRybzByNDFrczhwIn0.62teJlSXgdtKMqPM6ggyGg&limit=1`;
    request({url: mapBoxUrl, json: true}, (error, {body:{features}}) => {
        console.log(chalk.yellow.inverse('Starting load map data....'));
        if (error) {
            callback(chalk.red.inverse('Unable to connect to mapBox service!'), undefined);
        } else if (features.length === 0) {
            callback(chalk.red.inverse(`Unable to find location`), undefined);
        } else

            callback(undefined,{
          latitude: features[0].geometry.coordinates[1],
                longitude:features[0].geometry.coordinates[0]
        })

    });
};
module.exports={
    geoCode
};