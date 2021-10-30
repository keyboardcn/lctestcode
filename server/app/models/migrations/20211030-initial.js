const {
    Sequelize
} = require('sequelize');
module.exports = {
    // `query` was passed in the `index.js` file
    up: async (query) => {
        await query.createTable('quotes', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            price: {
                type: Sequelize.INTEGER
            },
        }, {
            timestamps: false,
            tableName: 'quotes'
        });
        await query.bulkInsert('quotes', [
            {name: 'Vancouver tour', description: 'Flight tour', price: '500'},
            {name: 'Calgary tour', description: 'Ridding Experience', price: '100'},
            {name: 'Toronto tour', description: 'Yatch over lake', price: '500'},
        ], {}); 
    },
    down: async (query) => {
        await query.dropTable('quotes')
    }
}