const { Users, Carts } = require("../models");

//Lấy toàn bộ thông tin của tất cả người dùng
const getUsers = async (req, res) => {
  try {
    const user = await Users.findAll({
      //hiển thị tất cả thông tin người dùng trừ password
      attributes: { exclude: ["password"] },
      //hiện thị thông tin mua hàng của user đã đăng ký
      include: [{ model: Carts, as: "cart" }],
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

//Lấy tất cả thông tin của người dùng thông qua ID
const getUserById = async (req, res) => {
  const id = Number(req.params.id);

  if (!id) {
    res.status(400).json("Invalid request");
  }

  try {
    const user = await Users.findByPk(id, {
      include: [{ model: Carts, as: "cart" }],
    });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ content: "User not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

//Tạo người dùng mới
const createUser = async (req, res) => {
  const { name, email, password, address, role } = req.body;

  try {
    const user = await Users.create({
      name,
      email,
      password,
      address,
      role,
    });
    res.status(201).json(user, { content: "Create User Successfully" });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      res.status(400).json(400, error);
    }
    console.log(error);
  }
};

//Cập nhật người dùng
const updateUser = async (req, res) => {
  const id = Number(req.params.id);
  const { name, email, address, role } = req.body;

  if (!id) {
    res.status(400).json("Invalid content");
  }

  const newUser = { name, email, address, role };

  try {
    await Users.update(newUser, {
      where: {
        id,
      },
    });
    res.status(201).json({ content: "Update User Successfully" });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      res.status(400).json(400, error);
    }
    console.log(error);
  }
};

//Xóa người dùng
const deleteUser = async (req, res) => {
  const id = Number(req.params.id);
  if (!id) {
    res.status(400).json({ content: "Invalid request" });
  }
  try {
    const user = await Users.findByPk(id);
    if (!user) {
      res.status(400).json({ content: "User not found" });
    }
    await Users.destroy({ where: { id } });
    res.status(200).json({ content: "Delete User Successfully" });
  } catch (error) {
    res.status(404).json(console.log(error));
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
