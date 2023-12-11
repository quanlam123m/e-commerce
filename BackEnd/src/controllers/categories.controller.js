const { Categories, Products } = require("../models");

//Lấy tất cả thông tin của tất cả loại
const getCategories = async (req, res) => {
  try {
    const category = await Categories.findAll({
      include: [{ model: Products, as: "product" }],
    });
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
  }
};

//Lấy tất cả thông tin của loại theo id
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

//Tạo phân loại mới
const createCategories = async (req, res) => {
  const { name, description } = req.body;
  try {
    const category = await Categories.create({
      name,
      description,
    });
    res
      .status(200, category.id)
      .json({ content: "Create Category Successfully" });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      res.status(400).json(400, error);
    }
    console.log(error);
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
