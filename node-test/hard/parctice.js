async function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}
async function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}
async function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callbackhell");
    }, 1000);
  });
}
// promise
call("kwon")
  .then(function (name) {
    console.log(name + "반가워");
    return back();
  })
  .then(function (txt) {
    console.log(txt + "을 실행했구나");
    return hell();
  })
  .then(function (message) {
    console.log("여기는" + message);
  });
// async + await
async function exec() {
  const x = await call("kwon");
  console.log(x + "님 환영합니다");
  const y = await back();
  console.log(y + "을 실행했구나");
  const z = await hell();
  console.log("여기는" + z);
}

//exec()
async function changeColor(color) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = color;
      resolve();
    }, 1000);
  });
}

async function exec2() {
  await changeColor("red");
  await changeColor("orane");
  await changeColor("yellow");
  await changeColor("green");
  await changeColor("blue");
}

exec2();
