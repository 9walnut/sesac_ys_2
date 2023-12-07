import { useCallback, useState } from "react";

// useCallback : 함수를 기억함.
// 컴포넌트가 렌더링 될 때, 컴포넌트 내부에 있는 함수도 다시 선언하게됨
// 다시 선언할 필요가 없는 함수는 다시 선언하지 않고,
// 이전에 선언한 함수를 사용
// 이를 구현하는 것이 useCallback
export default function UseCallbackEx() {
  const [text, setText] = useState("");

  // 의존성 배열이 빈값인 경우 선언된 함수를 기억하다가
  // update될 때 다시 선언하지 않고 기억하고 있는 함수 사용
  // 컴포넌트 내부에서 변경될 수 있는 값은? 대표적으로 state, props가 있음
  // handleOnChange 함수에서는 useCallbackEx 컴포넌트에서 유일하게 변경될 수 있는 값인 text를 활용하고 있지 않음
  const handleOnChange = useCallback((e) => {
    setText(e.target.value);
  }, []);
  return (
    <>
      <h3>useCallback 공부</h3>
      <input type="text" value={text} onChange={handleOnChange}></input>
    </>
  );
}
