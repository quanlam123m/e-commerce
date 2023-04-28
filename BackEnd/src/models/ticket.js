const { Model, DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  class Tickets extends Model {
    static associate(db) {
      //Khai báo các khóa có liên quan
    }
  }

  Tickets.init(
    {
      userID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "userID",
      },
      movie: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "movie",
      },
      showtime: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "showtime",
      },
      room: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "room",
      },
      seats: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "seats",
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "quantity",
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "price",
      },
    },
    {
      sequelize,
      modelName: "Tickets", // model name,
      tableName: "ticket",
      timestamps: false,
    }
  );

  return Tickets;
};
