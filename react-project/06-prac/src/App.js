import { useState } from "react";

import "./App.css";
import CustomHookEx from "./Component/CustomHookEx";
import UseCallbackEx from "./Component/UseCallbackEx";
import UseCallbackEx2 from "./Component/UseCallbackEx2";
import UseCallbackPrac from "./Component/UseCallbackPrac";
import UseMemo from "./Component/UseMemo";
import UseReducer from "./Component/UseReducer";

function App() {
  const [postId, setPostId] = useState(1);
  return (
    <>
      <UseMemo></UseMemo>
      <hr></hr>
      <UseCallbackEx></UseCallbackEx>
      <hr></hr>
      <UseCallbackEx2 postId={[postId]}></UseCallbackEx2>
      <button onClick={() => setPostId(postId + 1)}>+1</button>
      <hr></hr>
      <UseReducer></UseReducer>
      <hr></hr>
      <CustomHookEx></CustomHookEx>
      <hr></hr>
      <CustomHookEx></CustomHookEx>
      <hr></hr>
      {/* <UseMemoPrac></UseMemoPrac> */}
      <hr></hr>
      <UseCallbackPrac></UseCallbackPrac>
    </>
  );
}

export default App;
