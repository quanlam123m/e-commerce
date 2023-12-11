const express = require("express");
const userRouter = require("./user.routes");
const categoriesRouter = require("./categories.routes");
const productRouter = require("./products.routes");
const cartRouter = require("./carts.routes");
const commentRouter = require("./comments.routes");

//url: api/v1
const rootRouter = express.Router();

//userRouter
rootRouter.use("/users", userRouter);

//categoryRouter
rootRouter.use("/categories", categoriesRouter);

//productRouter
rootRouter.use("/products", productRouter);

//cartRouter
rootRouter.use("/carts", cartRouter);

//commentRouter
rootRouter.use("/comments", commentRouter);

module.exports = rootRouter;
