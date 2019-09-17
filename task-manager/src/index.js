const express =require('express');
require('./db/mongoose');
const app = express();
const port = process.env.PORT || 3000 ;

const userRouter = require('./routers/user');
const taskRouter = require('./routers/tasks');
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
const jwt = require('jsonwebtoken');


app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
});

/*
const Task = require('./db/models/task');
const User = require('./db/models/user');

const main =  async()=>{
   /!* const task = await Task.findById('5ce55e1f546c3a02d041eb0c');
    await task.populate('owner').execPopulate();
    console.log(task.owner);*!/

   const user = await User.findById('5ce55b25a70db52124a89387');
   await user.populate('tasks').execPopulate();
   console.log(user.tasks);
};
main();
*/
