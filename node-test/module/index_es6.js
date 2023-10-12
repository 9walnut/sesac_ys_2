// import add2 from "./math_es6.js";
// import { add, minus, multiple } from "./math_es6.js";
// default로 export하고 있는 식별자를 add2라는 식별자로 받아옴

// console.log(add(2, 3));
// console.log(minus(1000, 176));
// console.log(multiple(10, 5));

// es6에서 문법에서 모듈 import할 때 구조분해 없이 받아오는 방법
// module파일에서 export하는 값에 default가 있어야한다다
// import math from "./math_es6.js"

import math from "./math_es6.js";
// 구조분해
import {} from "./math_es6.js";

console.log(math.add(2, 3));
