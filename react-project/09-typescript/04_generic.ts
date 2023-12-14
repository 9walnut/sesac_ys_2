// Generic
// 기본적으로 선언할 때 type을 지정을 해주는데
// 사용하다보면 다양한 타입에 대해서 처리를해줘야할 수 있음
// function printXY(x: number, y: number): void;
// function printXY(x: string, y: string): void;
// 호출하거라 사용할 때 타입을 넘겨서 해당 타입으로 지정할 수 있는 방법
function printXY(x: number | string, y: number | string) {
  console.log(x, y);
}

printXY(1, 2);
printXY("a", "b");

function printXYByGeneric<T>(x: T, y: T) {
  console.log(x, y);
}

printXYByGeneric<string>("a", "b");
printXYByGeneric<number>(1, 2);

function numArrarrLength(arr: number[]): number {
  return arr.length;
}

const numArrarrLength2 = (arr: number[]): number => arr.length;

function numStrLength(arr: string[]): number {
  return arr.length;
}
// 만약? 객체 배열, 이외 다른 타입의 배열도 length를구하는 함수를 만들고 싶다면?

function arrLength<T>(arr: T[]): number {
  return arr.length;
}

arrLength<string>(["a", "b"]);

function exampleGeneric<T, U>(x: T, y: U) {
  console.log(x, y);
}
exampleGeneric<string, number>("a", 1);

let a: string[];
let b: Array<string>;

interface Phone<T> {
  company: string;
  model: string;
  option: T;
}

interface SamsungOption {
  a: string;
  b: number;
}

interface iPhoneOption {
  a: string;
  c: number;
}

const samsung23: Phone<SamsungOption> = {
  company: "samsung",
  model: "s23",
  option: {
    a: "asdf",
    b: 5,
  },
};
const iphone15: Phone<iPhoneOption> = {
  company: "Apple",
  model: "iphone 15",
  option: {
    a: "asdf",
    c: 5,
  },
};

function arrElement<T>(arr: T[], index: number) {
  if (arr.length < index) return false;
  return arr[index];
}

console.log(arrElement<string>(["a"], 0));
