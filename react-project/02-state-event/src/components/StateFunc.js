import { useState } from "react";

// const [a, b, c] = ["aaa", "bbb", "ccc"];
// console.log(a);
// console.log(b);
// console.log(c);

function StateFunc() {
  // useState는 배열을 반환 -> 그 배열을 구조분해하여 number와 setNumber 선언
  // [state 변수, state를 변경시키는 함수] = useState(state 초기값)
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("hello");

  return (
    <>
      <h3>함수형 컴포넌트 state 공부</h3>
      <div>
        number state value {number}{" "}
        <button
          onClick={() => {
            // 아래처럼하면 +2 안됨
            // setNumber(number + 1);
            // setNumber(number + 1);

            // 이렇게는 됨
            setNumber((prevNumber) => prevNumber + 1);
            setNumber((prevNumber) => prevNumber + 1);
          }}
        >
          +2
        </button>
      </div>
    </>
  );
}

export default StateFunc;
