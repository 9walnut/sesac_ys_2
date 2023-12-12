import "./App.css";
import { PracContainer } from "./containers/PracContainer";

// containers 폴더
// redux store에 직접적으로 접근하는 컴포넌트를 모아두기 위해서
// components 폴더
// 보통 presentational 컴포넌트만 저장
// redux store에 직접적으로 접근하지 않는 컴포넌트만을 모아둠

function AppRedux3() {
  return (
    <div>
      {/* <Box1Container></Box1Container>
      <Box2Container></Box2Container> */}
      <PracContainer></PracContainer>
    </div>
  );
}

// function Box3() {
//   return (
//     <div className="box">
//       <Box4></Box4>
//     </div>
//   );
// }

// function Box4() {
//   const number = useSelector((state) => state.counter.number);
//   const isData = useSelector((state) => state.isData);
//   const disPatch = useDispatch();
//   return (
//     <div className="box">
//       {<h3>number: {number}</h3>}
//       {/* <button onClick={() => disPatch({ type: "INCREMENT" })}>plus</button>
//       <button onClick={() => disPatch({ type: "DECREMENT" })}>minus</button> */}
//       <button onClick={() => disPatch(increse())}>plus</button>
//       <button onClick={() => disPatch(decrease())}>minus</button>
//       <div>isData {`${isData}`}</div>
//       <button onClick={() => disPatch({ type: "CHANGE" })}>Change</button>
//     </div>
//   );
// }

export default AppRedux3;
