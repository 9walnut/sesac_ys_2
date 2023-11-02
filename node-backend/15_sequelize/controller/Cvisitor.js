const { Visitor } = require("../model");

exports.home = (req, res) => {
  res.render("index");
};

// GET /visitors 기존 방명록 전체 조회 후 render("visitor")
exports.visitor = (req, res) => {
  // select * from visitor;
  Visitor.findAll().then((result) => {
    // console.log("findAll result:", result);
    // console.log("0 index의 username", result[0].username); // datavalues는 생략해도 됨
    // 기대 : [{id :, username:, comment:}]
    res.render("visitor", { data: result });
  });
  // Visitor.findAll({
  //     where : { username:"guho" }
  // })
};

// POST /visitor => 방명록 insert
exports.postVisitor = async (req, res) => {
  // insert할 데이터
  let data = {
    username: req.body.username,
    comment: req.body.comment,
  };
  Visitor.create(data)
    .then((result) => {
      console.log("create result", result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("오류 발생");
    });
  // 위와 같은 기능
  //   const createVisitor = await Visitor.create(data).catch((err) => {});
  //   res.send(createVisitor);
};

// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
  Visitor.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log("destroy", result);
    res.send({ result: true });
  });
};

// GET /visitor/:id => 방명록 하나 조회
exports.getVisitorById = (req, res) => {
  Visitor.findOne({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.send(result);
  });
};

// PATCH /visitor/:id => 방명록 수정
// update visitors set
exports.patchVisitor = (req, res) => {
  const data = {
    username: req.body.username,
    comment: req.body.comment,
  };
  Visitor.update(data, {
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    console.log("update");
    res.send({ result: true });
  });
};

exports.getTest = (req, res) => {
  //select username from visitor where id = 16 limit 1;
  Visitor.findAll({
    attributes: ["username", "id"],
    // where: {
    //   id: req.params.id,
    // },
    order: [["username", "asc"]],
  }).then((result) => {
    // console.log("findOne", result);
    res.send(result);
  });
};

// ------------------------ 회원가입 ----------------------------
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
