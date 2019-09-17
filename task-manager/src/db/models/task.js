const mongoose = require('mongoose');
const validator= require('validator');
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true

    },
    completed: {
        type: Boolean,
        default: false
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User"

    }
});
taskSchema.pre('save',async function (next ) {

        const task = this;
        console.log('Before saving task', task);
        next();
    }
);
const Task  = mongoose.model('Task',taskSchema);
module.exports =
    Task
;