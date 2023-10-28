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

exports.patchLogin = (data, cb) => {
  const sql = `UPDATE practice SET userid='${data.userid}', name='${data.name}', password='${data.pw}' WHERE id=${data.id}`;
  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }

    console.log("index.js: ", result);
    cb(result);
  });
};

exports.deletelogin = (id, cb) => {
  const sql = `delete from practice where id = ${id}`;

  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }

    let flag = false;
    if (result.affectedRows) {
      flag = true;
    }

    console.log("visitor delete", result);
    cb(flag);
    // cb(true);
  });
};

exports.getLoginById = (id, cb) => {
  conn.query(`SELECT * FROM practice WHERE id=${id}`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("Visitor.js: ", rows);
    cb(rows[0]);
  });
};
