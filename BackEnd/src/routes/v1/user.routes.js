const express = require("express");
const userController = require("../../controllers/user.conntroller");
const userRouter = express.Router();

//Lấy tất cả thông tin người dùng
userRouter.get("/", userController.getUsers);
//Như trên nhưng thông qua ID của người dùng
userRouter.get("/:id", userController.getUserById);
//Tạo người dùng mới
userRouter.post("/", userController.createUser);
//Cập nhật người dùng
userRouter.put("/:id", userController.updateUser);
//Xóa người dùng
userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;
