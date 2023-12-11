const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");

module.exports = (sequelize) => {
  class Users extends Model {
    static associate(db) {
      this.hasMany(db.Carts, {
        as: "cart",
        foreignKey: "userId",
      });

      this.hasMany(db.Comments, {
        as: "comment",
        foreignKey: "userId",
      });
    }
  }

  Users.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "name", //key to access the database
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false, //don't allow null
        unique: true, // don't allow duplicated
        validate: {
          isEmail: {
            msg: "Email invalidate",
          },
        },
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        set(value) {
          if (!value) {
            value = nanoid();
          }

          const salt = bcrypt.genSaltSync();
          const hash = bcrypt.hashSync(value, salt);
          this.setDataValue("password", hash);
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "address", //key to access the database
      },
      cartId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "cartId",
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "Staff",
      },
    },
    {
      sequelize,
      modelName: "Users", // model name,
      tableName: "user",
      timestamps: false,
    }
  );

  return Users;
};
