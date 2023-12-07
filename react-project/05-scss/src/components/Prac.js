import "../styles/larva.scss";

function Prac() {
  return (
    <div className="larva">
      <div className="body body1">
        <div className="eye eye-white">
          <div className="eye eye-black"></div>
        </div>
      </div>
      <div className="body body2"></div>
      <div className="body body3"></div>
      <div className="body body4"></div>
      <div className="body body5"></div>
      <img
        className="grass"
        src={process.env.PUBLIC_URL + "/images/grass.png"}
        alt="잔디"
      />

      <div>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
      </div>
    </div>
  );
}

export default Prac;
