const { Comments } = require("../models");

//Tạo bình luận mới
const createComments = async (req, res) => {
  const { content, productId } = req.body;
  try {
    const comment = await Comments.create({
      content,
      productId,
    });
    res.status(200).json({ content: "Create Comments Successfully" }, comment);
  } catch (error) {
    if (err.name === "SequelizeValidationError") {
      res.status(400).json(400, err.errors);
    }
    console.log(err);
  }
};

module.exports = {
  createComments,
};
