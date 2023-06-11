const express = require("express");
const categoriesController = require("../../controllers/categories.controller");
const categoriesRouter = express.Router();

//Lấy tất cả thông tin của các category
categoriesRouter.get("/", categoriesController.getCategories);
//Như trên nhưng thông qua ID của category
categoriesRouter.get("/:id", categoriesController.getCategoriesById);
//Tạo category mới
categoriesRouter.post("/", categoriesController.createCategories);
//Xóa category
categoriesRouter.delete("/:id", categoriesController.deleteCategories);

module.exports = categoriesRouter;
