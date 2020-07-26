const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  userID: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date },
  dueDate: { type: Date },
  completion: { type: Boolean }
});

const TaskClass = mongoose.model("task", taskSchema);
module.exports = TaskClass;
