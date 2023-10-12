const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiple = (a, b, c) => a * b * c;
const PI = 3.14;

// 1) 하나만 내보낼 경우
// module.exports = add
// 아래가 es6문법임
// export default add;

// 2) 여러개를 export할 경우
export default PI;
export { add, minus, multiple };
