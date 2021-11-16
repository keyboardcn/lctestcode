
module.exports = (sequelize, Sequelize) => {
    const Quote = sequelize.define("quote", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
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
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
      }
    }, {
      timestamps: false,
      tableName: 'quotes'
    });
  
    return Quote;
  };