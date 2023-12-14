// or
type gender = "Men" | "Women";
const lily: gender = "Men";

type productInfo = [string, number];
const cola: productInfo = ["cola", 2500];

// 객체에 대한 타입을 지정할 경우
interface ProductInfo2 {
  productName: string;
  price: number;
}

const cider: ProductInfo2 = { productName: "cider", price: 2500 };

type ProductInfo3 = {
  productName: string;
  price: number;
  // undefined : 없어도 된다는 뜻
  sale?: number;
};

const beer: ProductInfo3 = { productName: "beer", price: 2500, sale: 10 };
console.log(beer.sale);

interface Seller {
  name: string;
}
type ProductInfo4 = {
  productName: string;
  price: number;
  // undefined : 없어도 된다는 뜻
  sale?: object;
  seller?: Seller;
};
const soju: ProductInfo4 = {
  productName: "soju",
  price: 2000,
  seller: { name: "lily" },
};

// 옵셔널 체이닝
console.log(soju.seller?.name);
// soju.seller =>  =>undefined가 될 수 있음

interface Person {
  name: string;
  age: number;
}
interface Student extends Person {
  studentID: string;
  eat: (aa: number) => void;
}

const person: Person = { name: "lily", age: 88 };

const stu: Student = {
  name: "lily",
  age: 88,
  studentID: "00",
  eat: () => console.log("밥을 먹는다"),
};

interface Game1 {
  title: string;
  price: number;
  category: string;
  platform: string;
}

interface Game extends Game1 {
  desc?: string | undefined;
}

let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};

let heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};
