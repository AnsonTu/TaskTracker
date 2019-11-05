const Tasks = require("../models/task");

exports.addtask = function(req, res, next) {
  const task = req.body.task;
  const description = req.body.description;
  const dueDate = Date.parse(req.body.dueDate);
  const completion = Boolean(req.body.completion);

  const task_whole = new Tasks({
    task,
    description,
    dueDate,
    completion
  });

  res.json(task_whole);
};
