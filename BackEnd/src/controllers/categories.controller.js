const { Categories } = require("../models");

//Lấy tất cả thông tin của tất cả các vé
const getCategories = async (req, res) => {
  try {
    const category = await Categories.findAll();
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
  }
};

//Lấy tất cả thông tin của vé theo id
const getCategoriesById = async (req, res) => {
  const id = Number(req.params.id);

  if (!id) {
    res.status(400).json("Invalid request");
  }

  try {
    const category = await Categories.findByPk(id);
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(400).json({ content: "Category not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

//Tạo đơn hàng mới
const createCategories = async (req, res) => {
  const { name } = req.body;
  try {
    const ticket = await Categories.create({
      name,
    });
    res
      .status(200, ticket.id)
      .json({ content: "Create Category Successfully" });
  } catch (error) {
    if (err.name === "SequelizeValidationError") {
      res.status(400).json(400, err.errors);
    }
    console.log(err);
  }
};

//Xóa category
const deleteCategories = async (req, res) => {
  const id = Number(req.params.id);
  if (!id) {
    res.status(400).json({ content: "Invalid request" });
  }
  try {
    const category = await Categories.findByPk(id);
    if (!category) {
      res.status(400).json({ content: "Category not found" });
    }
    await Categories.destroy({ where: { id } });
    res.status(200).json({ content: "Delete Category Successfully" });
  } catch (error) {
    res.status(404).json(console.log(error));
  }
};

module.exports = {
  getCategories,
  getCategoriesById,
  createCategories,
  deleteCategories,
};
