const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};

exports.visitor = (req, res) => {
  // const data = Visitor.getVisitors();
  // res.render("visitor", { data: data });

  Visitor.getVisitors((rows) => {
    console.log("Cvisitor.js:", rows);
    res.render("visitor", { data: rows });
  });
};

exports.postVisitor = (req, res) => {
  console.log("req.body:", req.body);
  Visitor.insertVisitor(req.body, (id) => {
    console.log("ctrl postVisitor", id);
    res.send({
      ...req.body,
      id,
    });
  });
};

exports.insertVisitor = (req, res) => {
  Visitor.getVisitors((rows) => {
    console.log("Cvisitor.js:", result);
    res.render("visitor", { data: result });
  });
};

// delete /visitor/:id => 방명록
exports.deleteVisitor = (req, res) => {
  console.log("req.params:", req.params);
  Visitor.delVisitor(req.params.id, (result) => {
    res.send({ result: result });
  });
};
