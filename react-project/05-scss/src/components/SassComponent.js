import "../styles/origin.scss";

function SassComponent() {
  return (
    <>
      <div className="origin-sass">
        <div className="box red"></div>
        <div className="box orange"></div>
        <div className="box yellow"></div>
        <div className="box green"></div>
        <div className="box blue"></div>
        <div className="box purple"></div>
      </div>
      <br></br>
      <div className="scss-parents">
        안녕하세요
        <ul>
          asdfasdf
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
      <div className="box1"></div>
      <div className="box2"></div>
      <div className="box2"></div>
      <br></br>
      <button className="btn">일반 버튼</button>
      <button className="btn-primary">강조 버튼</button>
    </>
  );
}

export default SassComponent;
