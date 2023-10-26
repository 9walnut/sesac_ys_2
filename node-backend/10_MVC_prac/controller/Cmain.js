const { axoisInfos } = require("../model/Comment");

exports.main = (req, res) => {
  res.render("index");
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
