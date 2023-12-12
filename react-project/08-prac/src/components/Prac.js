export function Money2(props) {
  const { money, ipgm1, chulgm1 } = props;
  return (
    <>
      <h3>money: {money}</h3>
      <button onClick={ipgm1}>입금</button>
      <button onClick={chulgm1}>출금</button>
    </>
  );
}
