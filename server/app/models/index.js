const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const path = require('path');
const Umzug = require('umzug');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const umzug = new Umzug({
  migrations: {
    // indicates the folder containing the migration .js files
    path: path.join(__dirname, './migrations'),
    // inject sequelize's QueryInterface in the migrations
    params: [
      sequelize.getQueryInterface()
    ]
  },
  storage: 'sequelize',
  storageOptions: {
    sequelize: sequelize
  },
  logger: console,
})

const unzugUp = () => {
  const runup = async () => {
    await umzug.up();
    console.log('All migrations performed successfully')
  }
  runup();
}

unzugUp();

// Mimics output of sequelize-cli, whose paths were too messy when called programmatically
umzug.on('migrating', (name) => {
  console.log(`=== Starting "${name}" ===`);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.quotes = require("./quote.model.js")(sequelize, Sequelize);

module.exports = db;