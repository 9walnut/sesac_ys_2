const http = require("http");
const express = require("express");
const app = express();
// 소켓이 http모듈로 생성된 서버에서만 동작
const server = http.createServer(app);
const PORT = 8000;

const io = require("socket.io")(server);

// 위가 줄여서 쓴 것임
// const Socket = require("socket.io")
// const id = Socket(server)

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("client1");
});

io.on("connection", (socket) => {
  // 콜백함수의 매개변수에 있는 socket 객체
  // 접속한 클라이언트의 소켓
  console.log("socket id", socket.id);

  // on을 이용해 클라이언트에서 socket을 이용해서 보내준 데이터를 받을 이벤트를 등록
  socket.on("hello", (res) => {
    console.log(res);
    io.emit("bye", { msg: "안녕하세요" });
  });

  socket.on("entry", (res) => {
    console.log(res);
    io.emit("notice", { msg: "공부합시다" });
  });

  socket.on("bye", (res) => {
    console.log(res);
    io.emit("pracbye", { msg: "bye 잘가~" });
  });
});

server.listen(PORT, function () {
  console.log("Server Open: ${PORT}");
});
