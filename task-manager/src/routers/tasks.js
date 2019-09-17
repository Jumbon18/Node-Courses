const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth');
const Task = require('../db/models/task');


router.post('/tasks',auth,(req,res)=>{
    const task = new Task({
        ...req.body,
        owner: req.user._id
    });
    task.save().then(result=>{
        res.status(201).send(result);
    }).catch(e=>{
        res.status(400).send(e);
    })


});

router.get('/tasks',auth,async(req,res)=>{
try{
    await req.user.populate('tasks').execPopulate();
    res.send(req.user.tasks);

}
    catch(e){
        res.status(500).send(e);
    }
});
router.get('/tasks/:id',auth,async(req,res)=>{
    const _id = req.params.id;
   try{
       const task = await Task.findOne({_id,owner:req.user._id});
        if(!task){
           return res.status(404).send();
       }
       res.send(task);
   }
   catch (e) {
       res.status(404).send(e);
   }
});

router.patch('/tasks/:id',auth,async(req,res)=>{
    const id = req.params.id;
    const updates = Object.keys(req.body);
    const updatesAllow = ['description','completed'];
    const isValidation = updates.every((update)=>updatesAllow.includes(update));

    if(!isValidation){
        res.status(404).send({error:'Invalid updates field'});
    }
    try{
      const task = await Task.findOne({_id:id,owner:req.user._id});
      updates.forEach((update)=>task[update] = req.body[update]);
      await task.save();
        //  const task = await Task.findByIdAndUpdate(id,req.body,{new:true,runValidators:true});
                if(!task){
                    return res.status(400).send();
                }
        res.send(task);
    }
    catch (e) {
        res.status(400).send(e);
    }
});

router.delete('/tasks/:id',auth,async(req,res)=>{
    const id = req.params.id;
    try{
        const task = await Task.findOneAndDelete({_id:id,owner:req.user._id});
        if(!task){
            return    res.status(404).send({error:"NOt found task"});
        }

        res.send(task);
    }
    catch (e) {
        res.status(500).send(e);
    }
});
module.exports = router;