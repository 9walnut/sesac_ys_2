import "./App.css";
import ClassPrac from "./components/ClassPrac";
import ClassPropsEx from "./components/ClassPropsEx";
import FuncPropsEx from "./components/FuncPropsEx";
import PropsPrac from "./components/PropsPrac";
import Section from "./components/Section";

function App() {
  return (
    <div>
      {/* <FuncComponent></FuncComponent> */}
      {/* <ClassComponent></ClassComponent> */}
      <FuncPropsEx title="SeSAC" content="hello world" number={5}></FuncPropsEx>
      <FuncPropsEx number={5} content="hello world"></FuncPropsEx>
      <Section title="SeSAC">
        <div>SeSAC의 content 입니다</div>
      </Section>
      <Section title="코딩온">
        <h5>코딩온의 content 입니다</h5>
      </Section>
      <ClassPropsEx
        title="SeSAC"
        content="hello world"
        number={5}
      ></ClassPropsEx>

      <PropsPrac
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기개발서"
      ></PropsPrac>

      <ClassPrac text="" valid="hello world"></ClassPrac>
    </div>
  );
}

export default App;
