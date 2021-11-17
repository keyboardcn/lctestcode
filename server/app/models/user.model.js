const { DataTypes } = require('sequelize');


module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            validat: {
                isEmail: true
            },
        },
    }, {
        timestamps: false,
        tableName: 'users'
    });

    return User;
};