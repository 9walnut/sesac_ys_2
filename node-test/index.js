// CASE 3) 여러개의 식별자를 객체 형태로 내보는경우
// 모듈을 받아올 때
// 객체구조분해 할당(일부분만 필요한 경우)
const { add, PI } = require("./math.js");
console.log(add(1, 5));
// console.log(math.minus(1, 5));
console.log(PI);

// CASE 2) 파일을 여러개의 식별자를 객체 형태로 내보내는경우
// 모듈을 ㅂ다아올때 객체를 그대로 math로 받음
// const math = require("./math.js");
// console.log(math.add(1, 5));
// console.log(math.minus(1, 5));
// console.log(math.PI);

// CASE 1) 모듈을 파일에서 한개의 식별자만 내보내는 경우
// const add = require("./math.js");

// const sum = add(1, 3);
