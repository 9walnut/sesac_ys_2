// 비동기 코드를 처리하기 위한 방법 3가지
// callback, promise, asnyc await

// 콜백함수로 해결한 코드
// function goMart() {
//   console.log("마트에 가서 어떤 음료를 살지 고민한다.");
// }

// function pickDrink(callback) {
//   setTimeout(function () {
//     console.log("고민 끝!!");
//     product = "제로콜라";
//     price = 2000;
//     callback(product, price);
//   }, 3000);
// }

// function pay(product, price) {
//   console.log(`상품명 : ${product}, 가격 : ${price}`);
// }

let product;
let price;
// goMart();
// // 콜백함수는 () 없이 이름만으로 호출함 - 매개변수일 경우
// pickDrink(pay);
// pay(product, price);

// promise로 해결한 코드

function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다.");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝!!");
      product = "제로콜라";
      price = 2000;
      resolve();
    }, 3000);
  });
}

function pay(product, price) {
  console.log(`상품명 : ${product}, 가격 : ${price}`);
}

// goMart();
// // pickdrink안에 new promise 를 생성했기 때문에 객체가 끝나고 나면 then을 실행하겠다고 이해하면 됨
// pickDrink().then(() => {
//   pay(product, price);
// });

// async await
async function exec() {
  goMart();
  await pickDrink();
  pay(product, price);
}

exec();
