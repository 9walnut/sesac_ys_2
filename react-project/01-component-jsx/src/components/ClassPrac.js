import propsTypes from "prop-types";
import { Component } from "react";

class ClassPrac extends Component {
  TextCheck = () => {
    if (this.text) {
      return this.text;
    } else {
      return "이건 기본 text props 입니다.";
    }
  };

  render() {
    return (
      <>
        <div>클래스형 컴포넌트를 이용하여 (Props) </div>
        <div>{this.TextCheck()}</div>
        <button
          onClick={() => {
            console.log("콘솔 띄우기 성공!");
          }}
        >
          버튼
        </button>
      </>
    );
  }
}

ClassPrac.propsTypes = {
  text: propsTypes.string.isRequired,
  valid: propsTypes.string,
};

export default ClassPrac;
