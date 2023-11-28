// 1. props 매개변수
// function FuncPropsEx(props) {
//   // props = {
//   //   title: "SeSAC",
//   //   content: "hello world",
//   // };
//   return (
//     <>
//       <div>함수형 컴포넌트를 이용하여 (Props) </div>
//       <div>
//         제목은 {props.title}, 내용은 {props.content} 랍니다
//       </div>
//     </>
//   );
// }

// 2. 매개변수로 props를 받아올때부터 구조분해
// function FuncPropsEx({title, content}) {
//   // props = {
//   //   title: "SeSAC",
//   //   content: "hello world",
//   // };
//   return (
//     <>
//       <div>함수형 컴포넌트를 이용하여 (Props) </div>
//       <div>
//         제목은 {title}, 내용은 {content} 랍니다
//       </div>
//     </>
//   );
// }

// 4. proptype을 이용해서 어떤 props가 넘어올지 명시
// 유연한 js의 특징으로 인해 예기치 못한 오류가 발생 가능성
import proptype from "prop-types";

function FuncPropsEx({ title, content, number }) {
  return (
    <>
      <div>함수형 컴포넌트를 이용하여 (Props) </div>
      <div>
        제목은 {title}, 내용은 {content}, 숫자는 {number}
        랍니다
      </div>
    </>
  );
}
FuncPropsEx.defaultProps = {
  title: "코딩온",
};

FuncPropsEx.propTypes = {
  title: proptype.string,
  content: proptype.string.isRequired,
  number: proptype.number,
};

export default FuncPropsEx;
