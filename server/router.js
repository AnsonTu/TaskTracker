const Authentication = require("./controllers/authentication");
const passportService = require("./services/passport");
const passport = require("passport");
const tasks = require("./controllers/tasks");

// By default, passport wants to create a cookie-based session for this request
// Set session to false when using JWT
const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

// Export a function in node
module.exports = function (app) {
  // Route for root path
  // req (request) is the incoming http request
  // res (response) is the response that is returned to the user
  // next is used for error handling
  /*app.get("/", function(req, res, next) {
    res.send(["water bottle", "phone", "paper"]);
  });*/

  // At the root route, send user through requireAuth
  // If they pass, run the function to handle the request
  app.get("/", requireAuth, function (req, res) {
    res.send({ hi: "there" });
  });
  app.post("/signin", requireSignin, Authentication.signin);
  app.post("/signup", Authentication.signup);

  app.post("/tasks/add", requireAuth, tasks.addtask);
  app.get("/tasks", requireAuth, tasks.getTasks);

  //routing will probably change too for delete and update
  app.delete("/tasks/:id", requireAuth, tasks.deleteTask);
  app.post("/tasks/:id", requireAuth, tasks.updateTasks);
};
