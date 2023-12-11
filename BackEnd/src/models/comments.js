const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Comments extends Model {
    static associations(db) {
      //Khai báo các khóa có liên quan
    }
  }
  Comments.init(
    {
      content: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "content",
      },
      productID: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "productID",
      },
      userID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "userID",
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
