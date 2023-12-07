import { useMemo, useState } from "react";

// useMemo란?
// Redering 할 때, 불필요한 연산을 방지
export default function UseMemo() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  // [before]
  // count 변수가 변경되지 않아도 렌더링될때마다 연산되어 문제 >>>>> 비효율적임
  // const calc = () => {
  //   console.log("calc....");
  //   return count * 2;
  // };

  // [after]
  // useMemo(콜백함수, 의존성 배열)
  // useMemo : 불필요한 연산을 방지, 값을 기억함
  // count의 변경이 있을 때만 다시 연산하여 calc에 담음
  const calc = useMemo(() => {
    console.log("calc....");
    return count * 2;
  }, [count]);
  return (
    <>
      <h3>useMemo 공부</h3>
      <div>
        count : {count}
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
      <div>calc : {calc}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
    </>
  );
}
