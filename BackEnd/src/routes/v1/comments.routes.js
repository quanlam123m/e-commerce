const express = require("express");
const commentController = require("../../controllers/comments.controller");
const commentRouter = express.Router();

//Tạo comment mới
commentRouter.post("/", commentController.createComments);

module.exports = commentRouter;
