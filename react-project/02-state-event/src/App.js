import "./App.css";
import EventClass from "./components/EventClass";
import EventFunc from "./components/EventFunc";
import Practice4 from "./components/Practice4";
import StateClass from "./components/StateClass";
import StateClassPrac from "./components/StateClassPrac";
import StateFunc from "./components/StateFunc";
import StatePrac from "./components/StatePrac";
import FuncPropsEx from "./components/ex/HandlerEx";

function App() {
  return (
    <>
      <StateClass></StateClass>
      <br></br>
      <StateFunc></StateFunc>
      <br></br>
      <StatePrac></StatePrac>
      <br></br>
      <StateClassPrac></StateClassPrac>
      <br></br>
      <EventClass></EventClass>
      <br></br>
      <EventFunc></EventFunc>
      <br></br>
      <FuncPropsEx></FuncPropsEx>
      <br></br>
      <Practice4></Practice4>
    </>
  );
}

export default App;
