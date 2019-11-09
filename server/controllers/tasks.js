const Tasks = require("../models/task");

exports.addtask = function(req, res, next) {
  const task = req.body.task;
  const description = req.body.description;
  const dueDate = Date.parse(req.body.dueDate);
  const completion = Boolean(req.body.completion);

  const new_task = new Tasks({
    task,
    description,
    dueDate,
    completion
  });

  new_task
    .save()
    .then(() => res.json("New task was added!"))
    .catch(err => res.status(400).json("Error: " + err));
};

exports.deleteTask = function(req, res, next) {
  Tasks.findByIdAndDelete(req.params.id)
    .then(() => res.json("Task Number: " + req.params.id + " was deleted."))
    .catch(err => res.status(400).json("Error: " + err));
};

exports.getTasks = function(req, res, next) {
  Tasks.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json("Error" + err));
};

//this will probably change, placeholder for now when I get a better feel for the UI i guess?
exports.updateTasks = function(req, res, next) {
  Tasks.findById(req.params.id).then(task => {
    task.task = req.body.task;
    task.description = req.body.description;
    task.dueDate = req.body.dueDate;
    task.completion = req.body.completion;

    task.save()
    .then(() => res.json("Task was updated!"))
    .catch(err => res.status(400).json("Error: "+err))
  })
  .catch(err => res.status(400).json("Error: "+ err));
};
