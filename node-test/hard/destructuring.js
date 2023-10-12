const fruits = ["apple", "banana", "grape"];

const [apple2, banana2 = "banana2", grape2, mango = "mango"] = fruits;
console.log(apple2, mango);
console.log(banana2);

const obj = {
  name: "guho",
  gender: "male",
  age: 31,
  test: "test",
};

console.log(obj.name);

const { age, name: name2 } = obj;
console.log(name2);

// 위에하는 것과 동일한 것임
// const age = obj.age
// const name = obj.name

// console.log(age, test);

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = ["a", "b", "c", "d", "e"];

// 스프레드 연산자
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const hello = [..."hello"];
console.log(hello);

const word1 = "abc";
const word2 = "xyz";
const word3 = (word1 + word2).split("");
console.log(word3);

const obj2 = {
  name: "guho",
  gender: "male",
  age: 31,
};
const obj3 = {
  // obj2의 키-밸류 전부 가져오기
  ...obj2,
  test: "test",
};

console.log(obj3);

const values = [10, 20, 30];
function get(a, ...rest) {
  console.log(a);
  console.log(rest);
}

get(...values);
