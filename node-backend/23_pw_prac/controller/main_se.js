const { model } = require("../model");
const crypto = require("crypto");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.post_signup = async (req, res) => {
  let body = req.body;
  let inputPassword = body.password;
  let salt = Math.round(new Date().valueOf() * Math.random()) + "";
  let hashPassword = crypto
    .createHash("sha512")
    .update(inputPassword + salt)
    .digest("hex");

  try {
    let data = {
      userid: req.body.userid,
      name: req.body.name,
      password: hashPassword,
      salt: salt,
    };
    const createModel = await model.create(data);

    if (createModel) {
      res.send({ return: true });
    } else {
      res.status(500).send({ return: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ return: false });
  }
};

// 로그인
exports.login = (req, res) => {
  res.render("index");
};

exports.post_login = async (req, res) => {
  const { userid, password } = req.body;

  try {
    // Sequelize를 사용하여 사용자 검색
    const user = await model.findOne({ where: { userid, password } });
    // console.log("userkkk", user);
    if (user) {
      // 사용자가 존재할 경우
      req.session.user = user.id;
      res.send({ result: true, id: user.id });
    } else {
      // 사용자가 존재하지 않을 경우
      res.send({ result: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ result: false });
  }
};
// ================= 수정 중 ===============================
// 프로필 -
exports.post_profile = async (req, res) => {
  if (!req.session.user) {
    res.redirect("/user/login");
    return false;
  }

  const sessionId = req.session.user;

  try {
    // Sequelize를 사용하여 사용자 검색
    const user = await model.findOne({ where: { id: sessionId } });

    if (user) {
      // 사용자가 존재할 경우
      res.render("profile", { data: user });
    } else {
      // 사용자가 존재하지 않을 경우
      res.redirect("/signin");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

// 수정
exports.profile_edit = (req, res) => {
  const data = {
    ...req.body,
  };
  model
    .update(data, {
      where: {
        id: req.params.id,
      },
    })
    .then((result) => {
      console.log("update", result); // [1] or [0]
      if (result[0]) res.send({ result: true });
      else res.send({ result: false });
    });
};

exports.profile_delete = (req, res) => {
  model
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((result) => {
      if (result) res.send({ result: true });
      else res.send({ result: false });
    });
};

exports.logout = (req, res) => {
  if (req.session.user)
    req.session.destroy(function (err) {
      res.send({ result: true });
    });
  else res.send({ result: false });
};
