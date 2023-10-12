const express = require("express");
// express module 불러오기
const app = express();
// server 객체
const PORT = 8000;
// port번호 1 ~ 1023까지는 정해진 기능이 있음
// 1 ~ 65536까지 존재함
// 3000~ , 8000~ 식으로 빈번하게 사용됨
// 3306 : MYSQL에서 사용하게됨

// app객체의 view engine 설정을 ejs로 변경
app.set("view engine", "ejs");
// app객체의 views 폴더 설정 기본값이 : ./views임
// 만약 설정을 바꾸고 싶다면 아래처럼 작성
// app.set("views", "./view")

app.use("/static", express.static(__dirname + "/static"));
// c://users~~~/01-express/statc을 /stac으로 들어올 수 있는 것임

// app.use("/public", express.static(__dirname + "static"));
// c://users~~~/01-express/statia을 /public 이라는 이름으로 들어올 수 있는 것임

// get이라는 메서드(http 메서드)
// "/"는 아래 서버를 열고 나서 그 뒤에 /를 붙이겠다는 거임
// http 메서드는 클라이언트가 요청할 수 있는 방법들을 정의
app.get("/", function (req, res) {
  // 응답 객체 내의 send 메서드 실행
  // "hello response 라는 문자열 응답"
  // send : 값을보냄
  res.send("hello express");
});
// http 메서드의 두 번째 인자로 넘겨주는 콜백함수의 매개변수 2개
// 1번째 매개변수 : request 객체(요청)
// 2번째 매개변수 : response 객체(응답)

// localhost:8000/test
app.get("/test", function (req, res) {
  // res.send("test");
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
  // res.sendFile("./index.html");
});

app.get("/ejs", function (req, res) {
  // render의 기본 dir : "./views"
  // res.render("index.ejs");
  res.render("test/index.ejs");
});
"요쳥", "응답";
app.get("/guho", function (req, res) {
  // render의 기본 dir : "./views"
  // res.render("index.ejs");
  res.render("guho", {
    name: "guho",
    product: ["운동화", "후드집업", "스웨터"],
  });
});

// 서버를 연다
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}! http://localhost:${PORT}`);
});
