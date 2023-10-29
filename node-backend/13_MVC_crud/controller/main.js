const model = require("../model/model");

exports.index = (req, res) => {
  res.render("index");
};

// 회원가입
exports.signup = (req, res) => {
  res.render("signup");
};

exports.post_signup = (req, res) => {
  model.post_signup(req.body, () => {
    res.send({ return: true });
  });
};

// 로그인
exports.login = (req, res) => {
  res.render("index");
};

exports.post_login = (req, res) => {
  model.post_login(req.body, function (rows) {
    // console.log(rows[0]);
    if (rows.length > 0) res.send({ result: true, id: rows[0].id });
    else res.send({ result: false });
  });
};

// 프로필
exports.post_profile = (req, res) => {
  model.get_user(req.body.id, function (result) {
    console.log("profile", result);
    if (result.length > 0) res.render("profile", { data: result[0] });
    else res.redirect("/signin");
  });
};

exports.profile_edit = (req, res) => {
  const data = {
    ...req.body,
    id: req.params.id,
  };
  model.update_profile(data, function () {
    res.send({ result: true });
  });
};

exports.profile_delete = (req, res) => {
  model.delete_user(req.params.id, function () {
    res.send({ result: true });
  });
};
