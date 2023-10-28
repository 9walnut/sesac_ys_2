const model = require("../model/model");

exports.main = (req, res) => {
  res.render("index");
};

exports.visitor = (req, res) => {
  model.getLog((rows) => {
    console.log("Cvisitor.js:", rows);
    res.render("success", { data: rows });
  });
};

exports.postLogin = (req, res) => {
  console.log("req.body:", req.body);
  model.insertVisitor(req.body, (id) => {
    console.log("ctrl postVisitor", id);
    res.send({
      ...req.body,
      id,
    });
  });
};

exports.register = (req, res) => {
  model.register(req.body, (result) => {
    console.log("Cvisitor.js:", result);
    res.render("success", { data: result });
  });
};

exports.login = (req, res) => {
  let data;
  model.login(req.body, (result) => {
    if (result) {
      data = {
        isSuccess: true,
        msg: "로그인에 성공했습니다",
      };
    } else {
      data = {
        isSuccess: false,
        msg: "로그인에 실패했습니다",
      };
    }
    res.send(data);
  });
};

exports.patchLogin = (req, res) => {
  // console.log(req.body);

  model.patchLogin(req.body, (result) => {
    console.log("ctrl getVisitorById: patchVisitor", result);
    res.send({ result: true });
  });
};

exports.deletelog = (req, res) => {
  console.log(req.params);
  model.deletelogin(req.params.id, (result) => {
    res.send({ result: result });
  });
};

// GET /visitor/:id => 방명록 하나 조회
exports.getLoginById = (req, res) => {
  model.getLoginById(req.params.id, (result) => {
    console.log("ctrl getVisitorById: ", result);
    res.send(result);
  });
};
