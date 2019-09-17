const request = require('request');
const chalk = require('chalk');

const forecast = (lat,long,callback)=>{
    const URL = `https://api.darksky.net/forecast/656ca035c4ce60b2fe2555dbe9aaf5e2/${lat},${long}?lang=uk&units=si`;
    request({url:URL, json: true},(error,{body:{error:bodyError,currently:{temperature,precipProbability}}})=>{
      console.log(chalk.blue.inverse('Starting load weather data....'));
        if(error){
        callback(chalk.red.inverse('Unable to connect to weather service!'),undefined);
      }
      else if(bodyError){
          callback(chalk.red.inverse(`Unable to find location`),undefined);
      }
      else{
       //   const data = response.body.currently;
 callback(undefined,`It is currently ${temperature} degrees out. There is a ${precipProbability} % chance of rain.`);

      }

    });
};

module.exports={
    forecast
};