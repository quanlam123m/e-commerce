const { Images, Products } = require('../models');

// Lấy ảnh base64
const getImageBase64 = async (req, res) => {
    try {
        const image = await Images.findAll({
            include: [{model: Products, as: "product"}]
        })
        res.status(200).json(image)
    } catch (error) {
        res.status(400).json({error});
    }
};
  // Lấy ảnh base64 theo ID
const getImageBase64ById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const image = await Images.findByPk(id);
      if (!image || !image.data) return res.status(404).json({ message: 'Image not found' });
  
      res.status(200).json({data: image});
    } catch (error) {
      res.status(400).json({ error });
    }
};

// Tạo ảnh base64
const createImageBase64 = async (req, res) => {
    const { name, data, productId } = req.body;
  
    try {
      const image = await Images.create({
        name,
        data,
        productID: productId
      });
      res.status(200).json({data: image, content: "Create Image Successfully"});
    } catch (error) {
      console.error(error);
      res.status(400).json({ error });
    }
};

//Update ảnh
const updateImages = async (req, res) => {
  const id = Number(req.params.id);
  const { name, data, productId } = req.body;

  if (!id) {
    res.status(400).json("Invalid content");
  }

  const newImage = { name, data, productId };

  try {
    await Images.update(newImage, {
      where: {
        id,
      },
    });
    res.status(201).json({data: newImage, message: "Update Images Successfully" });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      res.status(400).json(400, error.errors);
    }
    console.log(error);
  }
};

//Xóa ảnh
const deleteImages = async (req, res) => {
  const id = Number(req.params.id);
  if (!id) {
    res.status(400).json({ message: "Invalid request" });
  }
  try {
    const image = await Images.findByPk(id);
    if (!image) {
      res.status(400).json({ message: "Image not found" });
    }
    await Images.destroy({ where: { id } });
    res.status(200).json({ message: "Delete Image Successfully" });
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  getImageBase64,
  getImageBase64ById,
  createImageBase64,
  updateImages,
  deleteImages,
};

