import { useState } from "react";
import "./App.css";
import LifeCycleClass from "./component/LifeCycleClass";
import Timer from "./component/Timer";

function App() {
  const [number, setNumber] = useState(0);
  const [isShow, setIsShow] = useState(true);
  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>Plus</button>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "Off" : "ON"}
      </button>

      {/* {isShow && <LifeCycle number={number}></LifeCycle>} */}
      <br></br>
      {isShow && <LifeCycleClass></LifeCycleClass>}
      <br></br>
      {/* <PostList></PostList> */}
      <br></br>
      <Timer></Timer>
    </div>
  );
}

export default App;
