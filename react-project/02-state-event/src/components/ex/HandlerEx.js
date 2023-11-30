import proptype from "prop-types";
import { useState } from "react";

// class HandlerEx extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       msg: "Hello World",
//     };
//     this.handleOnClick = this.handleOnClick.bind(this);
//   }

//   handleOnClickHello = (e) => {
//     console.log(e);
//     this.setState({ msg: "Goodbye World!" });
//   };

//   render() {
//     return (
//       <>
//         {this.state.msg}
//         <br></br>
//         <button onClick={this.handleOnClickHello}>클릭</button>
//       </>
//     );
//   }
// }

// function HandlerEx() {
//   const [color, setColor] = useState("black");
//   const [msg, setMsg] = useState("검정색 글씨");

//   const handleOnRed = (e) => {
//     setMsg("빨간색 글씨");
//     setColor("Red");
//   };

//   const handleOnBlue = (e) => {
//     setMsg("파란색 글씨");
//     setColor("Blue");
//   };

//   return (
//     <>
//       <div style={{ color: color }}>
//         {msg}
//         <br></br>
//         <button onClick={handleOnRed}>빨간색</button>
//         <button onClick={handleOnBlue}>파란색</button>
//       </div>
//     </>
//   );
// }

// function HandlerEx() {
//   const [msg, setMsg] = useState("안녕하세요");
//   const [btn, setBtn] = useState("사라져라");

//   const handleOnDismiss = (e) => {
//     if (btn === "사라져라") {
//       setMsg("");
//       setBtn("보여라");
//     } else {
//       setMsg("안녕하세요");
//       setBtn("사라져라");
//     }
//   };

//   return (
//     <>
//       <div>
//         {msg}
//         <br></br>
//         <button onClick={handleOnDismiss}>{btn}</button>
//       </div>
//     </>
//   );
// }
function FuncPropsEx() {
  const [fruit, setFruit] = useState("사과");
  const [background, setBg] = useState("black");
  const [textColor, setTc] = useState("black");
  const [msg, setMsg] = useState("text");

  const handleEnter = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      console.log("엔터가 눌렸습니다");
    }
  };

  return (
    <>
      <div>
        <div>
          과일 :
          <select
            value={fruit}
            onChange={(e) => {
              setFruit(e.target.value);
            }}
          >
            <option value="/hodu.jpg">복숭아</option>
            <option value="/hodu2.jpg">망고</option>
            <option value="/hodu3.jpg">바나나</option>
          </select>
          <br></br>
          배경색 :{" "}
          <select
            value={background}
            onChange={(e) => {
              setBg(e.target.value);
            }}
          >
            <option value="black">검정</option>
            <option value="red">빨강</option>
            <option value="blue">파랑</option>
            <option value="yellow">노랑</option>
          </select>
          <br></br>
          글자색 :
          <select
            value={textColor}
            onChange={(e) => {
              setTc(e.target.value);
            }}
          >
            <option value="black">검정</option>
            <option value="red">빨강</option>
            <option value="blue">파랑</option>
            <option value="yellow">노랑</option>
          </select>
          <br></br>
          <img src={fruit}></img>
          내용 :{" "}
          <input
            type="text"
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
            onKeyDown={handleEnter}
          ></input>
          <div style={{ color: textColor, background: background }}>{msg}</div>
        </div>
      </div>
    </>
  );
}
FuncPropsEx.defaultProps = {
  fruit: "사과",
  background: "black",
  textColor: "black",
};

FuncPropsEx.propTypes = {
  fruit: proptype.string,
  background: proptype.string,
  textColor: proptype.string,
  msg: proptype.string,
};

export default FuncPropsEx;
