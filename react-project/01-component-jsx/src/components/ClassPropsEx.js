import propsTypes from "prop-types";
import { Component } from "react";

class ClassPropsEx extends Component {
  render() {
    return (
      <>
        <div>클래스형 컴포넌트를 이용하여 (Props) </div>
        <div>
          제목은 {this.props.title}, 내용은 {this.props.content}, 숫자는{" "}
          {this.props.number}
          랍니다
        </div>
      </>
    );
  }

  // static default = {
  //   name : "코딩온"
  // }
}

ClassPropsEx.propsTypes = {
  title: propsTypes.string,
  content: propsTypes.string.isRequired,
  number: propsTypes.number,
};

export default ClassPropsEx;
