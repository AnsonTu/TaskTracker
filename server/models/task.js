const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  userID: { type: String, required: true },
  task: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date, required: true },
  dueDate: { type: Date, required: true },
  completion: { type: Boolean, required: true }
});

const TaskClass = mongoose.model("task", taskSchema);
module.exports = TaskClass;
