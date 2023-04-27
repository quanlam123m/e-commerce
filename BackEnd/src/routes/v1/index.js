const express = require("express");
const userRouter = require("./user.routes");

//url: api/v1
const rootRouter = express.Router();

// userRouter
rootRouter.use("/users", userRouter);

module.exports = rootRouter;
