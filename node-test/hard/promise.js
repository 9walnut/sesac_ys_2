// // Promise - 비동기 처리를 하기 위한 객체
// function promise1(flag) {
//   return new Promise(function (resolve, reject) {
//     if (flag) {
//       resolve(
//         `promise 상태는 fulfilled!! then으로 연결됩. \n 이떄의 flag가 true`
//       );
//     } else {
//       reject(
//         `promise 상태는 reject!! catch으로 연결됩. \n 이떄의 flag가 false`
//       );
//     }
//   });
// }

// // chaining으로 then, catch라는 메서드
// promise1(true)
//   .then((result) => {
//     // result에는 resolve로 보낸 인자값이 들어오게 된다
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// promise1(false)
//   .then((result) => {
//     // result에는 resolve로 보낸 인자값이 들어오게 된다
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 콜백 지옥을 발생시킨 경우

// function add(n1, n2, cb) {
//   setTimeout(function () {
//     let result = n1 + n2;
//     cb(result);
//   }, 1000);
// }

// function mul(n, cb) {
//   setTimeout(function () {
//     let result = n * 2;
//     cb(result);
//   }, 700);
// }

// function sub(n, cb) {
//   setTimeout(function () {
//     let result = n - 1;
//     cb(result);
//   }, 500);
// }

// add(4, 3, function (x) {
//   console.log("1:", x);
//   mul(x, function (y) {
//     console.log("2:", y);
//     sub(y, function (z) {
//       console.log("3: ", z);
//     });
//   });
// });

// // Promise로 변환
function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
      // reject("오류 발생");
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resole, reject) {
    setTimeout(function () {
      let result = n - 1;
      resole(result);
    }, 500);
  });
}

// // catch는 계속 써줄 필요 없고 미자믹만 써주면 됨
// add(4, 3)
//   .then((result) => {
//     console.log("1:", result);
//     return mul(result);
//   })
//   .then((result) => {
//     console.log("2:", result);
//     return sub(result);
//   })
//   .then((result) => {
//     console.log("3:", result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async / await와 함께 사용 - promise의 연장선--------------
// async promise 객체를 자동으로 리턴하게됨
async function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

async function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
      // reject("오류 발생");
    }, 700);
  });
}

async function sub(n) {
  return new Promise(function (resole, reject) {
    setTimeout(function () {
      let result = n - 1;
      resole(result);
    }, 500);
  });
}

// catch는 계속 써줄 필요 없고 미자믹만 써주면 됨
// add(4, 3)
//   .then((result) => {
//     console.log("1:", result);
//     return mul(result);
//   })
//   .then((result) => {
//     console.log("2:", result);
//     return sub(result);
//   })
//   .then((result) => {
//     console.log("3:", result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 1. async 함수는 promise를 return 한다
// 2. await 키워드는 asyncd 함수 내부에서만 사용 가능하다
async function exec() {
  const x = await add(4, 3);
  console.log("1:", x);
  const y = await mul(x);
  console.log("2:", y);
  const z = await sub(y);
  console.log("3:", z);
}

exec();

function test() {}
