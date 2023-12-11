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
    if (error.name === "SequelizeValidationError") {
      res.status(400).json(400, error);
    }
    console.log(error);
  }
};

module.exports = {
  createComments,
};
