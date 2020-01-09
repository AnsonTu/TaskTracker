const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const taskSchema = new Schema({
  userID: { type: ObjectId },
  task: { type: String, required: true },
  description: { type: String },
  completion: { type: Boolean, required: true },
  startDate: { type: Date, required: true },
  dueDate: { type: Date, required: true }
});

const TaskClass = mongoose.model("task", taskSchema);
module.exports = TaskClass;
