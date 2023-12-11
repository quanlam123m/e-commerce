const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Comments extends Model {
    static associations(db) {
      //Khai báo các khóa có liên quan
      this.belongsTo(db.Products, {
        as: "product",
        foreignKey: "productId",
      });

      this.belongsTo(db.Users, {
        as: "user",
        foreignKey: "userId",
      });
    }
  }
  Comments.init(
    {
      content: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "content",
      },
      productId: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "productId",
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "userId",
      },
    },
    {
      sequelize,
      modelName: "Comments", // model name,
      tableName: "comment",
      timestamps: false,
    }
  );
  return Comments;
};
