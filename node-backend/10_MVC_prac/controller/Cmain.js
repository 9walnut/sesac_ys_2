const { axoisInfos, userInfos } = require("../model/Comment");

exports.main = (req, res) => {
  res.render("index");
};

exports.axiosGet = (req, res) => {
  console.log(req.query);
  res.send(req.query);
};
exports.axoisInfos = (req, res) => {
  const userData = axoisInfos();
  const data = {
    ...req.body,
    id: userData[0].id,
    pw: userData[0].pw,
  };
  if (req.body.id == data.id && req.body.pw == data.pw) {
    res.send("success");
  } else res.send("failed");
};

exports.usersList = (req, res) => {
  const userData = userInfos();
  for (let i = 0; i < userData.length; i++) {
    if (
      req.body.id == userData[i].userId &&
      req.body.pw == userData[i].userPw
    ) {
      data = {
        msg: "success",
        name: userData[i].userName,
      };
      break;
    } else {
      data = {
        msg: "failed",
      };
    }
  }
  res.send(data);
};
