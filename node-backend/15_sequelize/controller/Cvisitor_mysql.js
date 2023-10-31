const Visitor_mysql = require("../model/Visitor_mysql");

exports.home = (req, res) => {
  res.render("index");
};

exports.visitor = (req, res) => {
  //   const data = Visitor.getVisitors();
  //   res.render("visitor", { data: data });
  Visitor_mysql.getVisitors((rows) => {
    res.render("visitor", { data: rows });
  });
};

// POST /visitor => 방명록 insert
exports.postVisitor = (req, res) => {
  // insert할 데이터
  console.log("req.body", req.body);
  Visitor_mysql.insertVisitor(req.body, (id) => {
    console.log("ctrl postVisitor ", id);
    res.send({
      ...req.body,
      id,
    });
  });
};

// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
  console.log(req.params);
  Visitor_mysql.delVisitor(req.params.id, (result) => {
    res.send({ result: result });
  });
};

// GET /visitor/:id => 방명록 하나 조회
exports.getVisitorById = (req, res) => {
  Visitor_mysql.getVisitorById(req.params.id, (result) => {
    console.log("ctrl getVisitorById: ", result);
    res.send(result);
  });
};

// PATCH /visitor/:id => 방명록 수정
exports.patchVisitor = (req, res) => {
  console.log(req.body);

  Visitor_mysql.patchVisitor(req.body, (result) => {
    console.log("ctrl getVisitorById: patchVisitor", result);
    res.send({ result: true });
  });
};
