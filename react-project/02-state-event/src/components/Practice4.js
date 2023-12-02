import { useState } from "react";
import ColorSelect from "./ColorSelect";

function Practice4() {
  const [fruit, setFruit] = useState("hodu");
  const [bgColor, setBgColor] = useState("black");
  const [color, setColor] = useState("white");
  const [content, setContent] = useState("text");

  return (
    <>
      <label>과일</label>
      <select
        onChange={(e) => {
          setFruit(e.target.value);
        }}
      >
        <option value="hodu">사과</option>
        <option value="hodu2">바나나</option>
        <option value="hodu3">포도</option>
        <option value="peach">복숭아</option>
      </select>
      <ColorSelect
        mode="배경색"
        onChangeHandler={(e) => {
          setBgColor(e.target.value);
        }}
      ></ColorSelect>
      <ColorSelect
        mode="글자색"
        onChangeHandler={(e) => {
          setColor(e.target.value);
        }}
      ></ColorSelect>
      <label>내용 : </label>
      <input
        type="text"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      ></input>
      <br></br>
      <img src={`${fruit}.jpg`} width={200} />
      <div style={{ backgroundColor: bgColor, color: color }}>{content}</div>
    </>
  );
}

export default Practice4;
