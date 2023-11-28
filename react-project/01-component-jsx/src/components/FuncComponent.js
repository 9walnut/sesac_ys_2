// const FuncComponent = () => {
//   return <div> Functional Component 입니다.</div>;
// };

function FuncComponent() {
  const text = "hello world";
  const name = "hodu";
  const animal = "웰시코기";
  const cal = 8;

  const a = 8;
  const b = 5;

  const title = "Hello world";

  const calTest = () => {
    if (a > b) {
      return "a가 b보다 큽니다";
    }
  };

  const ifRenderTest = () => {
    if (name === "guho") {
      return "안녕하세요";
    } else if (name === "kuho") {
      return "k가 맞아?";
    } else {
      return "다 틀렸다 호두야!";
    }
  };

  const style = {
    fontSize: "20px",
    color: "red",
    background: "blue",
    width: "200px",
    margin: "0 auto",
    textAlign: "center",
  };

  const form = {
    width: "200px",
    margin: "0 auto",
  };
  return (
    <>
      {/* 1. 하나의 태그로 가싸서 return */}
      <div> Functional Component 입니다.</div>
      <div> Functional Component 입니다.</div>
      <div> Functional Component 입니다.</div>
      <div> Functional Component 입니다.</div>
      <div> Functional Component 입니다.</div>
      <div> Functional Component 입니다.</div>
      {/* 2. js 문법사용 가능 */}
      {/* 2-1. js 문법사용 가능(삼항 연산자를 조건에 따른 렌더링(간단한 것만 가능)) */}

      <h2>제 반려 동물의 이름은 {name}</h2>
      <h2>
        {name}는 {animal}입니다{" "}
      </h2>

      <h3>호두야 {text}</h3>
      {3 + 5 === cal ? "정답입니다" : "오답입니다"}

      <h3>{calTest()}</h3>

      <h1 style={style}>{title}</h1>
      <div style={form}>
        아이디 : <input></input>
      </div>
      <div style={form}>
        PW : <input></input>
      </div>

      <h3>호두야 {text}</h3>
      {name === "hello world" ? (
        <div>
          <h2>일치하는구나 호두야</h2>
        </div>
      ) : (
        <div>
          <h2>틀렸다 호두야</h2>
        </div>
      )}
      <h3>{ifRenderTest()}</h3>

      {/* 2-2. 조건에 따른 렌더링 (&&)  */}
      <h5>{name === "kuho" && "안녕하세요!"}</h5>

      {/* 3. inline style 적용 방법 - style 속성값으로 객체 전달 */}
      <div style={{ fontSize: "20px", color: "red" }}>안녕하세요</div>
      <div style={style}>안녕하세요</div>

      {/* 4. class와 onclick을 jsx에서 사용하기 */}
      <div className="test-css">jsx에서 css 사용하기</div>
      {/* html에서는 함수를 호출했으나 jsx에서는 함수를 선언 */}
      <button
        onClick={() => {
          console.log("hello");
        }}
      >
        버튼
      </button>
      {/* 5. 종료태그 필수! */}
      <br />
      {/* / 경로가 public 폴더 안 */}
      {/* <img src="/logo192.png" /> */}
      {/* src 내부의 이미지를 사용할 경우 */}
      {/* <img src={image} /> */}
    </>
  );
}

export default FuncComponent;
