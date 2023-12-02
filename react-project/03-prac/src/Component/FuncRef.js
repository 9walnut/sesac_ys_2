import { useRef } from "react";
function FuncRef() {
  const input = useRef();
  const localVar = useRef(0);

  const focusInput = () => {
    input.current.focus();
  };

  const plusLocalVar = () => {
    localVar.current++;
    console.log(plusLocalVar);
  };
  return (
    <>
      <input type="text" ref={input}></input>
      <button type="button" onClick={focusInput}>
        버튼
      </button>
      <br></br>
      <div>{localVar.current}</div>
      <button type="button" onClick={plusLocalVar}>
        버튼
      </button>
    </>
  );
}

// 재렌더링이 필요하면 State
// 필요 없으면 ref
export default FuncRef;
