const { Model, DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  class Products extends Model {
    static associate(db) {
      //Khai báo các khóa có liên quan
    }
  }
  Products.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "name",
      },
      categoryID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "categoryID",
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "quantity",
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "price",
      },
    },
    {
      sequelize,
      modelName: "Products", // model name,
      tableName: "product",
      timestamps: false,
    }
  );
  return Products;
};
