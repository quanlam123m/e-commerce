const { Model, DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  class Products extends Model {
    static associate(db) {
      //Khai báo các khóa có liên quan
      this.hasMany(db.ProductConnectOrder, {
        foreignKey: "productId",
      });
      this.hasMany(db.Comments, {
        as: "comment",
        foreignKey: "productId",
      });

      this.belongsTo(db.Categories, {
        as: "category",
        foreignKey: "categoryId",
      });
    }
  }
  Products.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "name",
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "categoryId",
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
