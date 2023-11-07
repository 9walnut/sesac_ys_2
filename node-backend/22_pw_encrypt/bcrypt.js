const bcrypt = require("bcrypt");

const salt = 10;

const bcryptPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

// console.log(bcryptPassword("1234"));

const comparePassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};

const dbPassword = bcryptPassword("1234");

console.log(dbPassword);
console.log(comparePassword("1234", dbPassword));
