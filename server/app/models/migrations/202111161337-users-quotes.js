const { DataTypes } = require('sequelize');

module.exports = {
    up: async (query) => {
        await query.createTable('users', {
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
                validat: { isEmail: true },
            },
        }, {
            timestamps: false,
            tableName: 'users',
        });
        await query.bulkInsert('users', [
            {name: 'Ray Lau', email: 'rlau@gmail.com'},
            {name: 'Steve Law', email: 'sLaw@yahoo.com'},
            {name: 'Harrison Ford', email: 'hFord@163.com'}
        ]);
        await query.addColumn('quotes', 'user_id', {type: DataTypes.INTEGER});
        await query.bulkUpdate('quotes', {user_id: 1});
    },

    down: async (query) => {
        await query.removeColumn('quotes', 'user_id');
        await query.bulkDelete('users');
        await query.dropTable('users');
    }

}