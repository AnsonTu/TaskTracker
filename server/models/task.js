const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task:{type: String, required:true},
    description:{type:String},
    completion: {type:Boolean, required:true},
    //dueDate:{type:Date, required: true},
});

const TaskClass = mongoose.model('task', taskSchema);
module.exports = TaskClass;