const { model } = require("../model");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.post_signup = async (req, res) => {
  try {
    let data = {
      userid: req.body.userid,
      name: req.body.name,
      password: req.body.password,
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
    console.log("userkkk", user);
    if (user) {
      // 사용자가 존재할 경우
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

// 프로필
exports.post_profile = async (req, res) => {
  const userId = req.body.id;

  try {
    // Sequelize를 사용하여 사용자 검색
    const user = await model.findOne({ where: { id: userId } });

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
      console.log("update");
      res.send({ result: true });
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
      res.send({ result: true });
    });
};
