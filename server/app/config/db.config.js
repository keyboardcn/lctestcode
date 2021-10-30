module.exports = {
    HOST: "localhost",
    USER: "liming",
    PASSWORD: "12345678",
    DB: "lctestdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  