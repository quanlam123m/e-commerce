const express = require("express");
const userRouter = require("./user.routes");
const ticketRouter = require("./ticket.routes");

//url: api/v1
const rootRouter = express.Router();

//userRouter
rootRouter.use("/users", userRouter);

//ticketRouter
rootRouter.use("/tickets", ticketRouter);

module.exports = rootRouter;
