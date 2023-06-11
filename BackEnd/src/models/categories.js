const { Model, DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  class Categories extends Model {
    static associate(db) {
      //Khai báo các khóa có liên quan
    }
  }

  Categories.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "name",
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
