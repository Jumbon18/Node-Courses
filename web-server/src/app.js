const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geoCode = require('./geocode');
const forecast = require('./forecast');

const app = express();
const port = process.env.PORT || 3001;

// Define path for Express config
const publicDirPath  = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');


// Setup handlebars engine and views location
app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

//Setup static dir to serve
app.use(express.static(publicDirPath));

app.get('',(req,res)=>{
    res.send();
    res.render('index',{
        title:'Weather',
        name:'Alex Pyvovarov',
    });
});
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About page',
        name:'Irina Telesheva'
    });
});
app.get('/help',(req,res)=>{
   res.render('help',{
       title:'this is some helpful text',
       type:'button',
       value:'Click',
       name:'Unknown Person'
   });
});
app.get('/weather', (req, res) => {
   if(!req.query.address){
       return res.send({
           errorMessage:'You didnt pass the address'
       })
   }
   else{
       geoCode.geoCode(req.query.address, (error, {latitude,longitude} = {}) => {
           if (error) {
              return res.send({error});

           } else {
               console.log(`Coordinates is : ${latitude} lat and ${longitude} long`);

               forecast.forecast(latitude, longitude, (error, data) => {
                   if (error) {
                      return res.send({error});
                   } else {
                       return res.send({
                        location:req.query.address,
                          forecast:data
                       });
                   }
               });

           }

       });

   }
});
app.get('/products',(req,res)=>{
    if(!req.query.search){
       return  res.send({
            errorMessage:'You mus provide search item'
        })

    }
    console.log(req.query);
    res.send({
        products:[]
        }
    )
})
app.get('/help/*',(req,res)=>{
   res.render('404',{
       errorMessage:'Help article not found'
   })
});
app.get('*',(req,res)=>{
    res.render('404',{
        errorMessage:'Page not Found'
    });
});

app.listen(port, () => {
    console.log('Server is up on port 3000.')
});


