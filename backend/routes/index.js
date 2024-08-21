var { Router } = require("express");
const indexRouter = Router();

const { auth } = require("../middlewares/auth.guard");

const { authRouter } = require("./auth/auth.routes");
const { movRoute } = require("./movie");
const { userRoute } = require("./user");


/* GET home page. */
indexRouter.get("/", function (req, res, next) {
  res.send("<h1 style='text-align:center'>Welcome to our Test Task</h1>");
});

indexRouter.use("/auth", authRouter);
indexRouter.use("/user", userRoute);
indexRouter.use("/movie", movRoute);

module.exports = { indexRouter };
