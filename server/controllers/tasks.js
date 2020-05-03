const Tasks = require("../models/task");

exports.addtask = function (req, res, next) {
  const userID = req.user._id;
  const task = req.body.task;
  const description = req.body.description;
  const startDate = Date.parse(req.body.startDate);
  const dueDate = Date.parse(req.body.dueDate);

  const new_task = new Tasks({
    userID,
    task,
    description,
    startDate,
    dueDate,
    completion: false
  });

  new_task
    .save()
    .then(() => res.json(new_task))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.deleteTask = function (req, res, next) {
  Tasks.findByIdAndDelete(req.params.id)
    .then(() => res.json("Task Number: " + req.params.id + " was deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getTasks = function (req, res, next) {
  const userID = req.user._id;

  if (!userID) {
    res.statusMessage = "Something went wrong, userID not found";
    return res.status(422).send({ error: res.statusMessage });
  }

  let userTasks = [];
  let index = 0;
  Tasks.find({ userID: userID }, function (err, tasks) {
    if (err) {
      return next(err);
    }
    tasks &&
      tasks.forEach((task) => {
        if (task.userID === req.user._id) {
          userTasks[index] = task;
          index++;
        }
      });
  })
    .then((userTasks) => res.json(userTasks))
    .catch((err) => res.status(400).json("Error:" + err));
};

//this will probably change, placeholder for now when I get a better feel for the UI i guess?
exports.updateTasks = function (req, res, next) {
  Tasks.findById(req.params.id)
    .then((task) => {
      task.task = req.body.task;
      task.description = req.body.description;
      task.dueDate = req.body.dueDate;
      task.completion = req.body.completion;
      task.startDate = req.body.startDate;

      task
        .save()
        .then(() => res.json("Task was updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};
