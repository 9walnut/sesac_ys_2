const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "qwer1234!",
  database: "sesac_test",
});

exports.getLog = (cb) => {
  conn.query(`SELECT * FROM practice`, (err, rows) => {
    if (err) {
      throw err;
    }
    cb(rows);
  });
};

exports.register = (data, cb) => {
  const sql = `insert into practice (userid, name, pw) values ('${data.userid}', '${data.name}', '${data.password}')`;
  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("Register: ", result);
    cb(result);
  });
};

exports.login = (data, cb) => {
  const sql = `select userid, pw from practice `;
  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    let flag = false;
    console.log(result);
    console.log(data);
    for (let i = 0; i < result.length; i++) {
      if (data.userid == result[i].userid && data.password == result[i].pw) {
        flag = true;
        break;
      }
    }
    cb(flag);
  });
};
