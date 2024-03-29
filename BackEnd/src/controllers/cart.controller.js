const { Carts, Products, Users } = require("../models");

//Lấy toàn bộ thông tin giỏ hàng
const getCarts = async (req, res) => {
  try {
    const cart = await Carts.findAll({
      include: [
        { model: Products, as: "products" },
        { model: Users, as: "users" },
      ],
    });
    res.status(200).json(cart);
  } catch (error) {
    console.log(error);
  }
};

//Lấy toàn bộ thông tin giỏ hàng thông qua ID
const getCartsById = async (req, res) => {
  const id = Number(req.params.id);

  if (!id) {
    res.status(400).json({ content: "Invalid request" });
  }

  try {
    const cart = await Carts.findByPk(id);
    if (cart) {
      res.status(200).json(cart);
    } else {
      res.status(404).json({ content: "Cart not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

//Tạo giỏ hàng mới
const createCart = async (req, res) => {
  const { userId, productsId, total, status } = req.body;
  try {
    const cart = await Carts.create({
      userId,
      productsId,
      total,
      status,
    });
    res.status(200).json({ content: "Create Cart Successfully" });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      res.status(400).json(400, error);
    }
    console.log(error);
  }
};

//Cập nhật giỏ hàng
const updateCart = async (req, res) => {
  const id = Number(req.params.id);
  const { userId, productsId, total, status } = req.body;

  if (!id) {
    res.status(400).json({ content: "Invalid content" });
  }

  const newCart = { userId, productsId, total, status };

  try {
    await Carts.update(newCart, {
      where: {
        id,
      },
    });
    res.status(201).json({ content: "Update Cart Successfully" });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      res.status(400).json(400, error);
    }
    console.log(error);
  }
};

//Xóa giỏ hàng
const deleteCart = async (req, res) => {
  const id = Number(req.params.id);

  if (!id) {
    res.status(400).json({ content: "Invalid request" });
  }
  try {
    const cart = await Carts.findByPk(id);
    if (!cart) {
      res.status(404).json({ content: "Cart not found" });
    }
    await Carts.destroy({ where: { id } });
    res.status(200).json({ content: "Delete Cart Successfully" });
  } catch (error) {
    res.status(404).json(console.log(error));
  }
};

module.exports = {
  getCarts,
  getCartsById,
  createCart,
  updateCart,
  deleteCart,
};
