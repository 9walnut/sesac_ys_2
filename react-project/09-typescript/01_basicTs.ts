const str: string = "Hellow world";
let num: number = 9;

// str = 5; error 발생
console.log(str);

let undif: undefined = undefined;
let nu: null = null;

let arr: number[] = [1, 2, 3, 4, 5];
console.log(arr);

let strArr: string[] = ["abc", "def"];
let strArr2: Array<string> = ["abc", "def"];

let numStrArr: (number | string)[] = [1, "a"];
let numStrArr2: Array<number | string> = [1, "a"];
let abc: number | string = "a";
abc = 5;

// typescript에서 any를 사용하는 건 지양 해야함
let anyArr: any[] = [1, "a", null, undefined, {}];

let obj: object = {
  name: "guho",
};

// Tuple
let drink: [string, number] = ["객", 1];
console.log(drink);
console.log(drink[0]);
console.log(drink[1]);
drink.push("aaa");
console.log(drink);

// 읽기만 가능
let drink2: readonly [string, number] = ["객", 1];

enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

console.log(Auth.admin);

let olimpic_newgame: readonly [object, boolean] = [
  { name: "쇼트트랙", type: "혼성계주" },
  true,
];

console.log(olimpic_newgame);
