import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrease, increse } from "./store/counterReducer";

function AppRedux2() {
  return (
    <div>
      <Box1></Box1>
    </div>
  );
}

function Box1() {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="box">
      {<h3>number: {number}</h3>}
      <Box2></Box2>
    </div>
  );
}

function Box2() {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="box">
      {<h3>number: {number}</h3>}
      <Box3></Box3>
    </div>
  );
}
function Box3() {
  return (
    <div className="box">
      {/* <h3>number: {number}</h3> */}
      <Box4></Box4>
    </div>
  );
}
function Box4() {
  const number = useSelector((state) => state.counter.number);
  const isData = useSelector((state) => state.isData);
  const disPatch = useDispatch();
  return (
    <div className="box">
      {<h3>number: {number}</h3>}
      {/* <button onClick={() => disPatch({ type: "INCREMENT" })}>plus</button>
      <button onClick={() => disPatch({ type: "DECREMENT" })}>minus</button> */}
      <button onClick={() => disPatch(increse())}>plus</button>
      <button onClick={() => disPatch(decrease())}>minus</button>
      <div>isData {`${isData}`}</div>
      <button onClick={() => disPatch({ type: "CHANGE" })}>Change</button>
    </div>
  );
}

export default AppRedux2;
