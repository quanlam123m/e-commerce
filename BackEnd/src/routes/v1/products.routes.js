const express = require("express");
const productController = require("../../controllers/products.controller");
const productRouter = express.Router();

//Lấy thông tin sản phẩm
productRouter.get("/", productController.getProducts);
//Như trên nhưng thông qua ID sản phẩm
productRouter.get("/:id", productController.getProductsById);
//Tạo sản phẩm mới
productRouter.post("/", productController.createProducts);
//Cập nhật sản phẩm mới
productRouter.put("/:id", productController.updateProducts);
//Xóa sản phẩm
productRouter.delete("/:id", productController.deleteProducts);

module.exports = productRouter;
