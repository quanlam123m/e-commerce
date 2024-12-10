const { Comments } = require("../models");

//Tạo bình luận mới
const createComments = async (req, res) => {
  const { content, productId, userId } = req.body;
  try {
    const comment = await Comments.create({
      content,
      productId,
      userId,
    });
    res.status(200).json(comment, { content: "Create Comments Successfully" });
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
