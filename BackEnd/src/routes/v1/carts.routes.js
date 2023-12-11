const express = require("express");
const cartsController = require("../../controllers/cart.controller");
const cartRouter = express.Router();

//Lấy tất thông tin của cart
cartRouter.get("/", cartsController.getCarts);
//Như trên nhưng thông qua id
cartRouter.get("/:id", cartsController.getCartsById);
//Tạo cart mới
cartRouter.post("/", cartsController.createCart);
//Cập nhât cart
cartRouter.put("/:id", cartsController.updateCart);
//Xóa cart
cartRouter.delete("/:id", cartsController.deleteCart);

module.exports = cartRouter;
