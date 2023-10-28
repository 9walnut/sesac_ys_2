const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "qwer1234!",
  database: "sesac_test",
});

exports.getVisitors = (cb) => {
  conn.query(`SELECT * FROM visitors`, (err, rows) => {
    // sql문을 날리고 두번째부터 결과에 대한 처리를 하는데
    // err라는 매개변수에 빈 값이 아니면 err가 발생
    if (err) {
      throw err;
    }
    console.log("Visitor: ", rows);
    cb(rows);
  });
};

exports.insertVisitor = (data, cb) => {
  const sql = `insert into visitors (username, comment) values ('${data.username}', '${data.comment}')`;
  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("Visitor insert: ", result);
    cb(result.insertId);
  });
};

exports.delVisitor = (id, cb) => {
  const sql = `delete from visitors where id = ${id}`;

  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    let flag = false;
    if (result.affectedRows) {
      flag = true;
    }
    console.log("Visitor delete: ", result);
    cb(flag);
  });
};
