const model = require("../model/model");

exports.main = (req, res) => {
  res.render("index");
};
exports.signin = (req, res) => {
  res.render("signin");
};
exports.delete = (req, res) => {
  res.render("delete");
};
exports.update = (req, res) => {
  res.render("update");
};

// 회원가입
exports.signin = (req, res) => {
  model.signin(req.body, (result) => {
    console.log("main.js:", result);
    //   res.render("success", { data: result });
  });
};
