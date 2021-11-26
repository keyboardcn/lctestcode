module.exports = {
    HOST: "mysql_db",
    USER: "liming",
    PASSWORD: "12345678",
    DB: "lctestdb",
    dialect: "mysql",
    pool: {
      max: 15,
      min: 5,
      acquire: 30000,
      idle: 30000
    },
    dialectOptions: {
      connectTimeout: 60000
    }
  };
  