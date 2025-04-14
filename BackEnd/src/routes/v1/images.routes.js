const express = require("express");
const imagesController = require("../../controllers/images.controller");
//const upload = require("../../middlewares/upload") -> khi muốn chuyển sang dùng cloud
const imagesRouter = express.Router();

//Lấy tất thông tin của image
imagesRouter.get("/", imagesController.getImageBase64);
//Như trên nhưng thông qua id
imagesRouter.get("/:id", imagesController.getImageBase64ById);
//Tạo image mới
imagesRouter.post("/", imagesController.createImageBase64);
//Cập nhât image
imagesRouter.put("/:id", imagesController.updateImages);
//Xóa image
imagesRouter.delete("/:id", imagesController.deleteImages);

module.exports = imagesRouter;
