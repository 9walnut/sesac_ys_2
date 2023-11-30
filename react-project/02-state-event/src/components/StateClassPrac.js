import { Component } from "react";

class StateClassPrac extends Component {
  state = {
    number: 0,
    number2: 0,
  };

  render() {
    return (
      <>
        <div>props 예시 {this.props.name}</div>
        <h3>클래스형 컴포넌트 state 공부</h3>
        <div>
          number state value Plus {this.state.number}
          <button
            onClick={() => {
              this.setState((prevState) => ({ number: prevState.number + 1 }));
            }}
          >
            +1
          </button>
        </div>
        <div>
          number state value Minus{this.state.number2}
          <button
            onClick={() => {
              this.setState((prevState) => ({
                number2: prevState.number2 + -2,
              }));
            }}
          >
            -2
          </button>
        </div>
      </>
    );
  }
}

export default StateClassPrac;
