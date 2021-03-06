const Tasks = require("../models/task");

exports.addtask = function (req, res, next) {
  const userID = req.user._id;
  const title = req.body.title;
  const description = req.body.description;
  const startDate = req.body.startDate;
  const dueDate = req.body.dueDate;

  const new_task = new Tasks({
    userID,
    title,
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
    .then(() => res.json(req.params.id))
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

exports.updateTasks = function (req, res, next) {
  Tasks.findById(req.params.id)
    .then((task) => {
      const { title, description, startDate, dueDate, completion } = req.body;
      task.title = title;
      task.description = description;
      task.startDate = startDate;
      task.dueDate = dueDate;
      task.completion = completion;

      task
        .save()
        .then(() => res.json(task))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};
