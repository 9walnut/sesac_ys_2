import "./App.css";
import FuncPropsEx from "./components/FuncPropsEx";
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
    </div>
  );
}

export default App;
