const Tasks = require("../models/task");

exports.viewtasks = function(req, res, next) {};

exports.addtask = function(req, res, next) {
  const task = req.body.task;
  const description = req.body.description;
  const completion = Boolean(req.body.completion);

  const user = new user({
    task,
    description,
    completion
  });
};