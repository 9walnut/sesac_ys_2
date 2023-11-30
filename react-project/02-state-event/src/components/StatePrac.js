import { useState } from "react";

function StatePrac() {
  const [number1, setNumberPlus] = useState(0);
  const [number2, setNumberMinus] = useState(0);
  const [text, setText] = useState("hello");

  return (
    <>
      <h3>함수형 컴포넌트 state 실습</h3>
      <div>
        number state Plus {number1}{" "}
        <button
          onClick={() => {
            setNumberPlus((prevNumber) => prevNumber + 2);
          }}
        >
          +2
        </button>
      </div>
      <div>
        number state Minus {number2}{" "}
        <button
          onClick={() => {
            setNumberMinus((prevNumber) => prevNumber - 1);
          }}
        >
          -1
        </button>
      </div>
    </>
  );
}

export default StatePrac;
