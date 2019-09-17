require('../src/db/mongoose');
const Tasks = require('../src/db/models/task');

/*Tasks.findByIdAndDelete('5cd754a34711ae0cc47a69ac').then(task=>{
    if(!task){
        return new Error('error');
    }
    console.log('Deleted', task);
    return Tasks.countDocuments({completed:false});

}).then(result=>{
    console.log(result);
}).catch(e=>{
    console.log(e);
});*/

const findAndDelete = async (id,completed)=>{
  const task = await Tasks.findByIdAndDelete(id);
  const uncompletedTasks = await Tasks.countDocuments(completed);
  return {task,uncompletedTasks};
};

findAndDelete('5cd81d529be69706f000319b',false).then(result=>{
    console.log(result);
});