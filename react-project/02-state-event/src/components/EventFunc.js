import { useState } from "react";

function EventFunc() {
  const [msg, setMsg] = useState();
  const [name, setName] = useState();

  const handleEnter = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      console.log("엔터가 눌렸습니다");
    }
  };

  const handleOnClick = (e) => {
    console.log(e.target);
    setMsg("Bye");
  };

  function handleOnClickHello() {
    setMsg("hello");
  }

  const handleOnClickTest = (message) => {
    setMsg(message);
  };

  return (
    <>
      <h3>함수형 컴포넌트 event 핸들링 공부</h3>
      <div>
        {msg}
        <button onClick={handleOnClick}>잘 가</button>
        <button onClick={handleOnClickHello}>안 녕</button>

        {/* 함수에서 매개변수를 받고 싶다면? */}
        {/* 해결책 1 */}
        {/* <button
          onClick={() => {
            handleOnClickTest("안녕");
          }}
        >
          Test
        </button> */}
        {/* 해결책 2 */}
        {/* bind의 첫번쨰 매개변수 - null 위치를 얘기함*/}
        {/* null의 위치는 함수의 this를 결정하는 역할을 함 */}
        {/* bind는 매개변수를 여러개 받을수 있음, 첫번쨰는 고정임 - 암기사항 */}
        <button onClick={handleOnClickTest.bind(null, "안녕?")}>Test</button>

        {/* input태그에서 엔터를 누르면 "엔터를 눌렀습니다 문구 콘솔" */}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onKeyDown={handleEnter}
        ></input>
      </div>
    </>
  );
}

export default EventFunc;
