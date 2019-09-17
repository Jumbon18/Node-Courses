const mongoose = require('mongoose');
const mongodb = require('mongodb');

 mongoose.connect('mongodb://127.0.0.1:27017/messanger',{
useNewUrlParser:true,
     useCreateIndex:true,
     useFindAndModify:false
 });

