function PropsPrac({ title, author, price, type }) {
  const back_style = {
    background: "yellow",
    width: "200px",
    margin: "0 auto",
  };

  const head_style = {
    background: "yellow",
    width: "200px",
    margin: "0 auto",
    textAlign: "center",
  };

  return (
    <>
      <div style={back_style}>
        <h3 style={head_style}>이번주 베스트 셀러</h3>
        <br></br>
        <img src="/logo192.png"></img>
        <h3>title : {title}</h3>
        <div>저자 : {author}</div>
        <div>판매가 : {author}</div>
        <div>자기개발서 : {author}</div>
      </div>
    </>
  );
}

export default PropsPrac;
