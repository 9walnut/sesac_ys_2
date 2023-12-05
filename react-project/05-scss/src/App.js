import "./App.css";
import CssModule from "./components/CssModule";
import OriginCss from "./components/OriginCss";
import SassComponent from "./components/SassComponent";

function App() {
  return (
    <>
      <OriginCss></OriginCss>
      <br></br>
      <CssModule></CssModule>
      <br></br>
      <SassComponent></SassComponent>
    </>
  );
}

export default App;
