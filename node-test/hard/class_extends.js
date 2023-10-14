class House {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    console.log(`이 건물은 ${new Date().getFullYear() - this.year}년 됐습니다`);
  }
}

// const House1 = new House("새싹", 2022);
// House1.age();

class Apartment extends House {
  constructor(name, year, floor) {
    // 부모의 생성자 호출 - super로 처리를 해줘야함
    super(name, year);
    this.floor = floor;
  }
  // 오버라이딩 : 부모에 있는 메서드를 그대로 자식이 다시 정의
  age() {
    super.age();
    console.log(`입주는 ${this.year + 1}부터 시작했습니다 `);
  }
}

const sun = new Apartment("햇빛마을은", 1995, 25);
// sun.age();
// console.log(sun.floor);

// 오버로딩 : 상속의 개념과는 상관 없이 같은 함수의 이름으로 여러 개의 함수를 선언

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const rec1 = new Shape(3, 4);
// console.log(rec1.getArea());

class Rectangle extends Shape {
  getArea() {
    return Math.sqrt(this.width ** 2) + Math.sqrt(this.height ** 2);
  }
}
class Triangle extends Shape {
  getArea() {
    return (this.width * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  getArea() {
    return this.radius ** 2 * 3.14;
  }
}

let rect = new Rectangle(3, 4);
console.log(rect.getArea());
let tri = new Triangle(3, 4);
console.log(tri.getArea());
let circ = new Circle(3, 4, 10);
console.log(circ.getArea());
