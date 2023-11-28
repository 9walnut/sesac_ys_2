const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.applicants = require("./applicants")(sequelize, Sequelize);
db.score = require("./score")(sequelize, Sequelize);

// db.Customer.hasMany(db.Orders, {
//   // onDelete: 'CASCADE',
//   foreignKey: "custid",
//   //sourceKey: "custid"
// });
// db.Orders.belongsTo(db.Customer, {
//   // onDelete: 'CASCADE',
//   foreignKey: "custid",
//   // targetKey: 'custid', // 같으면 안써줘도 됨
// });

module.exports = db;
