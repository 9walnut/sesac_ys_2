import { useCallback, useReducer, useState } from "react";

const initialValue = { value: 0 };
const reducer = (prevState, action) => {
  switch (action.type) {
    case "PLUS":
      return { value: prevState.value + 1 };
    case "MINUS":
      return { value: prevState.value - 1 };
    case "RESET":
      return initialValue;
    case "MULTIFLY":
      return { value: prevState.value * action.number };
    case "DIVIDE":
      return { value: prevState.value / action.number };
    default:
      return { value: prevState.value };
  }
};

// state : 상태
// dispact : 액션을 발생시키는 함수
// reducer : 상태를 update하는 함수 , 결국 dispatch가 실행시키는 함수

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [number, setNumber] = useState(0);

  const handleChangeNumber = useCallback((e) => setNumber(e.target.value), []);

  const plus = () => dispatch({ type: "PLUS" });
  const minus = () => dispatch({ type: "MINUS" });
  const reset = () => dispatch({ type: "RESET" });
  const multifly = () => dispatch({ type: "MULTIFLY", number: number });
  const divide = () => dispatch({ type: "DIVIDE", number: number });

  // 지금은 3가지 연산만 있지만
  // 곱하기, 나누기 등 더 많은 연산을 이용한다면?
  // 또 컴포넌트 자체가 복잡해져서 코드가 일어지면?
  // state의 변화를 추적하고 싶음 => setState를 일일이 찾아가야함
  // const plus = () => {
  //   setState({ value: state.value + 1 });
  // };
  // const minus = () => {
  //   setState({ value: state.value - 1 });
  // };
  // const reset = () => {
  //   setState(initialValue);
  // };
  return (
    <>
      <h3>useReducer 공부</h3>
      <div>
        {state.value}
        <button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>
        <button onClick={reset}>RESET</button>
        <input
          type="number"
          value={number}
          onChange={handleChangeNumber}
        ></input>
        <button onClick={multifly}>곱하기</button>
        <button onClick={divide}>나누기</button>
      </div>
    </>
  );
}
