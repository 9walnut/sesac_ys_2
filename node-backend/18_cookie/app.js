const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;
app.set("view engine", "ejs");

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", (req, res) => {
  // 체크할 경우 y가 담겨있음
  const noPopup = req.cookies.popup;
  res.render("index", { noPopup });
});

// 옵션 설정
const cookieConfig = {
  httpOnly: true, // document.cookie로 접근 불가. 서버에서만 쿠키에 접근할 수 있다.
  maxAge: 1000 * 60 * 60 * 24, // ms 단위로 보존하고자 하는 기간을 설정
  // expires : "2023-11-04T18"
  // path: "/" // "/"에서 쿠키를 생성하겠다는 의미
  // secure : true // https에서만 쿠키를 동작하게한다
  // signed: true // 쿠키를 암호화 >>> req.signedCookies를 활용해서 사용 가능
};

app.post("/setCookie", (req, res) => {
  res.cookie("popup", "y", cookieConfig);
  res.send({ result: true });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
