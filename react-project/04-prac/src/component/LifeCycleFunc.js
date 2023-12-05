import { useEffect, useState } from "react";

function LifeCycle(props) {
  const { number } = props;
  const [text, setText] = useState("");

  // useEffect(콜백함수, 의존성 배열)
  // 1. 의존성 배열이 빈 배열일 때. (mount시 콜백함수 실행시킴)
  // 콜백함수 내부에서 return 뒤에 오는 함수를 unmount시 실행시킴
  useEffect(() => {
    console.log("function componenet : ⭕ mount");
    return () => {
      console.log("function componenet : ❌ unmount");
    };
  }, []);

  // 2. 의존성 배열을 전달하지 않을 경우
  // mount & update시에 콜백함수를 실행 시킴
  useEffect(() => {
    console.log("function componenet : 💢 update");
  });

  // 3. 의존성 배열에 원소가 존재할 경우
  // 해당 원소가 업데이트 될 때마다 콜백함수를 실행시킴
  useEffect(() => {
    console.log("function componenet : 💢💢 text update");
  }, [text]);

  return (
    <>
      <h2>함수형 컴포넌트 LifeCycle 공부</h2>
      <div>number : {number}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
    </>
  );
}

export default LifeCycle;
