const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "qwer1234!",
  database: "sesac_test",
});

// 회원가입
exports.post_signup = (data, cb) => {
  const sql = `insert into userInfos (userid, name, pw) values ('${data.userid}', '${data.name}', '${data.password}')`;
  conn.query(sql, (err) => {
    if (err) {
      throw err;
    }
    cb();
  });
};

// 로그인
exports.post_login = (data, cb) => {
  let sql = `SELECT * FROM userInfos WHERE userid='${data.userid}' and pw='${data.password}' limit 1;`;
  conn.query(sql, function (err, rows) {
    if (err) throw err;
    cb(rows);
  });
};

// 정보 가져오기
exports.get_user = (id, cb) => {
  let sql = `SELECT * FROM userInfos WHERE id='${id}' limit 1;`;
  conn.query(sql, function (err, rows) {
    if (err) throw err;
    cb(rows);
  });
};

// exports.update_profile = (data, cb) => {
//   let sql = `UPDATE userInfos SET name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
//   conn.query(sql, (err) => {
//     if (err) throw err;
//     cb();
//   });
// };
// exports.delete_user = (id, cb) => {
//   conn.query(`DELETE FROM userInfos WHERE id='${id}'`, (err) => {
//     if (err) throw err;
//     cb();
//   });
// };
