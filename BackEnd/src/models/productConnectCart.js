const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class ProductConnectOrder extends Model {
    static associate(models) {
      //Khai báo khóa
      this.belongsTo(models.Carts, {
        foreignKey: "cartId",
      });
      this.belongsTo(models.Products, {
        foreignKey: "productId",
      });
    }
  }

  ProductConnectOrder.init(
    {
      productId: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
      selfGranted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "ProductConnectOrder",
    }
  );
  return ProductConnectOrder;
};
