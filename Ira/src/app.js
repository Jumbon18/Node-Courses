const express= require('express');
const path = require('path');
const hbs = require('hbs');

const app =express();
const port = process.env.PORT || 3000;

const publicDirPath  = path.join(__dirname, '../public');

const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirPath));
app.listen(port,()=>{
    console.log(`Server is up on port ${port}.`);
})