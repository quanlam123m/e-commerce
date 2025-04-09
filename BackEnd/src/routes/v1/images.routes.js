const express = require("express");
const imagesController = require("../../controllers/images.controller");
const imagesRouter = express.Router();

//Lấy tất thông tin của cart
imagesRouter.get("/", imagesController.getImageBase64);
//Như trên nhưng thông qua id
imagesRouter.get("/:id", imagesController.getImageBase64ById);
//Tạo cart mới
imagesRouter.post("/", imagesController.createImageBase64);
//Cập nhât cart
imagesRouter.put("/:id", imagesController.updateImages);
//Xóa cart
imagesRouter.delete("/:id", imagesController.deleteImages);

module.exports = imagesRouter;
