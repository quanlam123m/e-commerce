const { Model, DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  class Categories extends Model {
    static associate(db) {
      //Khai báo các khóa có liên quan
      this.hasMany(db.Products, {
        as: "product",
        foreignKey: "categoryId",
      });
    }
  }

  Categories.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "name",
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false, // Not Null
        field: "description",
      },
    },
    {
      sequelize,
      modelName: "Categories", // model name,
      tableName: "category",
      timestamps: false,
    }
  );

  return Categories;
};
