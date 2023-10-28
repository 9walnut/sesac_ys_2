const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "qwer1234!",
  database: "sesac_test",
});

// 회원가입
exports.signin = (data, cb) => {
  const sql = `insert into userInfos (userid, name, pw) values ('${data.userid}', '${data.name}', '${data.password}')`;
  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("Model signin: ", result);
    cb(result);
  });
};
