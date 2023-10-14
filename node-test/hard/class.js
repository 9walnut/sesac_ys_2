const cat1 = {
  name: "나비",
  age: 2,
  mew: function () {
    console.log("야옹");
  },
};
const cat2 = {
  name: "장화",
  age: 80,
  mew: function () {
    console.log("야옹");
  },
};
const cat3 = {
  name: "코코",
  age: 4,
  mew: function () {
    console.log("야옹");
  },
};

// PascalCase 규칙을 이용해서 식별자 생성(camelCase에서 첫글자도 대문자)
class Cat {
  // 생성자 - 메서드의 종류 중 하나로 이해하자
  // 메서드 중 cat 클래스 를 이용해서 객체를 만드는 순간호출되는 메서드
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 메서드
  mew() {
    console.log("왕알알아와오랄ㅇㄹ알알");
  }
  info() {
    console.log(`이 친구의 이름은 ${this.name}, 나이는 ${this.age}`);
  }
}

const cat4 = new Cat("호두", 99);
const cat5 = new Cat("동동이", 99);

// console.log(cat4);
// cat4.mew();
cat4.info();
