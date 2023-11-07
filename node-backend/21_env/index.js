const express = require("express");
const path = require("path");
const app = express();
const ps = process.env;
const dotenv = require("dotenv");

const PORT = 8000;
// cross-env
// 배포 버전이냐? 개발 버전이냐?에 따라 다른 env 파일을 로드할 수 있게끔 도와줌

dotenv.config({ path: path.join(__dirname, "./config/envs/.env") });
dotenv.config({
  path: path.join(__dirname, `./config/envs/${ps.NODE_ENV}.env`),
});
//index.js와 같은 위치에 있는 .env 파일을 불러와서 환경변수로 사용할 수 있게끔 함

console.log(ps.PASSWORD);
app.get("/", (req, res) => {
  res.send("hellow world");
});

app.listen(ps.PORT, () => {
  console.log(`Server Open: , ${ps.PORT}`);
});
