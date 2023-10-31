const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize; // 새로 생성한 객체
db.Sequelize = Sequelize; //모듈 그 자체

db.model = require("./model_se")(sequelize, Sequelize);

module.exports = db;
