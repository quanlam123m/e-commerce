const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Carts extends Model {
    static associate(db) {
      //Khai báo các khóa liên quan
    }
  }

  Carts.init(
    {
      userId: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "userID",
      },
      productsId: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "productsId",
      },
      total: {
        type: DataTypes.NUMBER,
        allowNull: true,
        field: "total",
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "Đang chuẩn bị",
      },
    },
    {
      sequelize,
      modelName: "Carts", // model name,
      tableName: "cart",
      timestamps: false,
    }
  );

  return Carts;
};
