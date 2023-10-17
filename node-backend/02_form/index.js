const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

// req.body를 해석하기 위한 코드(미들웨어)
//  x-www-form-unlencoded 형태의 데이터를 해석
app.use(express.urlencoded({ extended: true }));
// true일 경우 qs 모듈(외부 모듈)을 이용, false일 경우 내장 모듈인 queryString 모듈을 사용한다.
//  application/json 형태의 데이터 해석
app.use(express.json());

// localhost:8000 url 접속
app.get("/", function (req, res) {
  res.render("index");
});

// get요청은 req.query에 데이터가 담겨서 온다
// get요청은 데이터를 보낼 떄 url에 직접 query를 만들어서 전송이 가능하다.
// 데이터 전송 시 form태그를 이용할 경우 , method를 get으로 해놓으면 get 요청
// get 요청은 url로 접속이 가능하다.
// get요청을 위해선 query를 사용해야함
// CRUD 중 READ를 의미하는 요청에 사용
// get은 url에 전송되는 데이터가 노출된다. 개인정보를 위한 전송은 get을 사용하면 안됀다
app.get("/get", function (req, res) {
  console.log(req.query);
  //  req,query: get요청에 대해 client가 보낸 데이터를 담고 있음
  //  url에서 기본 주소 뒤에 오는 주소를 의미
  //  ?id=guho&pw-1234
  //   req.query;
  res.send("get 요청 성공");
});
// 조회, 데이터 저장, 원래있던 데이터 변경
// CRUD

// POST
// request에 본문(body)에 실어서 전송
// 무언가 생성하거나 어떤 저보를 보낼때 쓰임
// 데이터를 숨겨서 전송할 수 있음

app.get("/join", function (req, res) {
  console.log(req.query);
  res.send("get요청 성공");
});

// localhost:8000/post 요청을 받기위한 준비
// post는 url로 전송될 수 없음, url로 직접 요청하는 것은 불가능
// post 요청에 대한 데이터는 req.body에 담겨서 옮겨짐
// 정보가 url에 노출되지 않음. 데이터를 새로 생성하는 요청에 자주 사용됨
// CRUD 중 Create에 사용됨
app.post("/post", function (req, res) {
  console.log(req.body);
  res.send("post 요청 성공!");
});

app.post("/validation", function (req, res) {
  res.send("post 요청 성공!");
});

app.post("/post/ver2", function (req, res) {
  console.log(req.body);
  res.render("result", {
    name: req.body.name,
    email: req.body.email,
  });
});

app.listen(PORT, function () {
  console.log("Server Open: ${PORT}");
});
