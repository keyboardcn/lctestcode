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
      }
    }, {
      timestamps: false,
      tableName: 'quotes'
    });
  
    return Quote;
  };