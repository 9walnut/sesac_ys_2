// :number는 꼭 지정할 필요는 없음
function sum(a: number, b: number): number {
  return a + b;
}

const sum2 = (a: number, b: number): number => {
  if (b) return a + b;
  return a;
};

interface Calculator {
  sum: (a: number, b: number) => number;
  sub?: () => void;
}

const calc: Calculator = {
  sum: sum,
};

function goingOn(): never {
  while (true) {
    console.log("go");
  }
}

function hello(numb: string, num2: number): number;
function hello(str: string, str2: string): string;

function hello(param: number | string, param2: number | string) {
  console.log(param);
  console.log(param2);
  return param;
}

function sum3(numb: number, numb2: number) {
  return numb + numb2;
}

console.log(sum3(5, 11));

function sum4(...numb: number[]): number {
  return [...numb].reduce((a, b) => a + b, 0);
}

console.log(sum4(1, 2, 3, 4, 10));
