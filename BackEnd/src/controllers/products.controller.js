const { Products, Categories, Comments } = require("../models");

//Lấy tất cả thông tin về sản phẩm
const getProducts = async (req, res) => {
  try {
    const product = await Products.findAll({
      include: [
        { model: Categories, as: "category" },
        { model: Comments, as: "comments" },
      ],
    });
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

//Lấy tất cả thông tin về sản phẩm theo id
const getProductsById = async (req, res) => {
  const id = Number(req.params.id);

  if (!id) {
    res.status(400).json("Invalid request");
  }

  try {
    const product = await Products.findByPk(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ content: "Product not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

//Tạo sản phẩm mới
const createProducts = async (req, res) => {
  const { name, categoryID, quantity, price } = req.body;
  try {
    const product = await Products.create({
      name,
      categoryID,
      quantity,
      price,
    });
    res.status(200).json({ content: "Create Product Successfully" }, product);
  } catch (error) {
    if (err.name === "SequelizeValidationError") {
      res.status(400).json(400, err.errors);
    }
    console.log(err);
  }
};

//Cập nhật sản phẩm
const updateProducts = async (req, res) => {
  const id = Number(req.params.id);
  const { name, categoryID, quantity, price } = req.body;

  if (!id) {
    res.status(400).json("Invalid content");
  }

  const newProduct = { name, categoryID, quantity, price };

  try {
    await Products.update(newProduct, {
      where: {
        id,
      },
    });
    res.status(201).json({ content: "Update Product Successfully" });
  } catch (error) {
    if (err.name === "SequelizeValidationError") {
      res.status(400).json(400, err.errors);
    }
    console.log(err);
  }
};

//Xóa sản phẩm
const deleteProducts = async (req, res) => {
  const id = Number(req.params.id);
  if (!id) {
    res.status(400).json({ content: "Invalid request" });
  }
  try {
    const user = await Products.findByPk(id);
    if (!user) {
      res.status(404).json({ content: "Product not found" });
    }
    await Products.destroy({ where: { id } });
    res.status(200).json({ content: "Delete Product Successfully" });
  } catch (error) {
    res.status(404).json(console.log(error));
  }
};

module.exports = {
  getProducts,
  getProductsById,
  createProducts,
  updateProducts,
  deleteProducts,
};
