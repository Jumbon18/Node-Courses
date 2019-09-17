 const https = require('https');
 const URL = `https://api.darksky.net/forecast/656ca035c4ce60b2fe2555dbe9aaf5e2/40,-75?lang=uk&units=si`;
 https.request(URL,(response)=>{
    response.on('data',(chunk)=>{
    });
    response.on('end',()=>{

    });
 });
