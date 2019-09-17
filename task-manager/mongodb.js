// CRUD create read update delete

const {MongoClient,ObjectID} = require('mongodb');
const connectionURL = 'mongodb://127.0.0.1:27017';
/*const databaseName = 'task-manager';*/
const databaseName = 'messanger';

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{

    if(error){
       return console.log('Unable to connect to database!');
    }
  const db = client.db(databaseName);
 /*   db.collection('users').deleteOne({completed:  false}).then((result)=>{
        console.log(result);
    })*/

/*
    db.collection('tasks').find().toArray().then((result)=>{
        console.log(result);
    }).catch((e)=>{
        console.log(e);
    });
    db.collection('tasks').updateMany({completed:false},
        {  $set:{
            completed: true
        }
    }).then((result)=>{
        console.log(result);
    })
*/

  /* const updatePromise =  db.collection('users').updateOne(
        {_id:new ObjectID('5cd4067e7b3f5915f05fc1d9')},
        {
            $inc:{
                age: 5
            }


        });
   updatePromise.then((result)=>{
       console.log(result);
   }).catch((e)=>{
       console.log(e);
   })*/


   }
);