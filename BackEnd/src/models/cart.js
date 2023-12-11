const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Carts extends Model {
    static associate(db) {
      //Khai báo các khóa liên quan
      this.belongsTo(db.Users, {
        as: "user",
        foreignKey: "userId",
      });
      this.hasMany(db.ProductConnectOrder, {
        foreignKey: "cartId",
      });
    }
  }

  Carts.init(
    {
      userId: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "userId",
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
