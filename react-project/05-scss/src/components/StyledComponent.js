import styled from "styled-components";
// css 의 네이밍 중복을 방지
// css in JS (style-jsx)
const Container = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color || "black"};
  &:hover {
    transform: scale(1.1);
  }
`;

function StyledComponent() {
  return (
    <>
      <Container>
        <Box color="red"></Box>
        <Box color="orange"></Box>
        <Box color="yellow"></Box>
        <Box color="green"></Box>
        <Box color="blue"></Box>
        <Box color="purple"></Box>
        <Box color=""></Box>
      </Container>
    </>
  );
}

export default StyledComponent;
