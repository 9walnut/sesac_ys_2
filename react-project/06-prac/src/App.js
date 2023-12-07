import { useState } from "react";

import "./App.css";
import UseCallbackEx from "./Component/UseCallbackEx";
import UseCallbackEx2 from "./Component/UseCallbackEx2";
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
    </>
  );
}

export default App;
