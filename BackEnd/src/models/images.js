const {Model, DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    class Images extends Model{}

    Images.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "name",
              },
              data: {
                type: DataTypes.TEXT('long'), // store bằng base64
                field: "data",
              },
              productID: {
                type: DataTypes.INTEGER,
                allowNull: true,
                field: "productId",
              },
        },
        {
            sequelize,
            modelName: "Images", // model name,
            tableName: "images",
            timestamps: false,
        }
    );
    return Images;
}