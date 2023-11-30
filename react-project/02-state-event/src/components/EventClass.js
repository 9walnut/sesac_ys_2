import { Component } from "react";

class EventClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "hello",
    };
    // 함수 선언문을 사용하여 메서드를 만들 떄
    // 메서드 내부에서 클래스의 this를 사용하고 싶을 경우,생성자 내에서 this를 bind 해주는 작업을 거쳐야 함
    // handleonclick 내부에서 클래스를 가리키고 있는 this를 사용할 수 있다.
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  // handleOnClick = () => {};
  // 함수 선언문을 사용하여 메서드를 정의
  // 해결법1 : 생성자 내부에서 this를 원하는 것으로 바인딩
  // 해결법2 : 함수 표현식을 사용한다
  // 함수 선언문은 동적 바인딩을 하기 떄문에 (함수가 사용될 때를 의미) this가 결정
  handleOnClick() {
    this.setState({ msg: "bye" });
  }

  // 함수 표현식
  // 함수가 선언될 때 this를 결정 지어줌
  // 함수를 선언하는 코드를 읽을 때 this갈 결정된다는 얘기임
  // 함수 선언문처럼 바인딩 해주지 않았음
  handleOnClickHello = (e) => {
    console.log(e);
    this.setState({ msg: "hello" });
  };

  render() {
    return (
      <>
        <h3>클래스형 컴포넌트 event handling 공부</h3>
        {this.state.msg}
        {/* 함수 실행시키면 안됨 */}
        <button onClick={this.handleOnClick}>잘가</button>
        <button onClick={this.handleOnClickHello}>안녕</button>
        <button
          // e는 리액트에서 합성 이벤트 객체를 의미하는 것으로 합성 이벤트에 대한 모든 정보를 담고 있음
          // 그 중 target이라는 것에 접근하면 이벤트가 걸린 태그를 확인할 수 있음
          onClick={(e) => {
            console.log(e.target);
            console.log(e.type);
          }}
        >
          test
        </button>
      </>
    );
  }
}

export default EventClass;
