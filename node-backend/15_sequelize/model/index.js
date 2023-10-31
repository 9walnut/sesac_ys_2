const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const db = {};
// sequelize 겍체 생성
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize; // 새로 생성한 객체
db.Sequelize = Sequelize; //모듈 그 자체
// db = {sequelize : sequelize, Sequelize, Sequelize}

// const Visitor = requeir('./visitor)
// db.Visitor = Visitor(sequelize, Sequelize)

db.Visitor = require("./Visitors")(sequelize, Sequelize);
// db.Visitor에는 sequelize로 visitor테이블을 정의한 객체가 담겨있음

module.exports = db;
