const express = require("express");
const userRouter = require("./user.routes");
const categoriesRouter = require("./categories.routes");

//url: api/v1
const rootRouter = express.Router();

//userRouter
rootRouter.use("/users", userRouter);

//ticketRouter
rootRouter.use("/categories", categoriesRouter);

module.exports = rootRouter;
