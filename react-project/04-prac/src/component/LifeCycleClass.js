import { Component } from "react";

class LifeCycleClass extends Component {
  state = { text: "" };
  // 1. 컴포넌트가 마운트 될 때 실행
  componentDidMount() {
    console.log("Class componenet : ⭕ mount");
  }
  // 2. 컴포넌트가 업데이트 될 때 실행
  componentDidUpdate(prevProps, prevState) {
    console.log("Class componenet : 💢 update");

    if (prevState.text !== this.state.text) {
      console.log("Class componenet : 💢 text update");
    }
  }
  // 3. 컴포넌트가 unmount 될 때 실행
  componentWillUnmount() {
    console.log("Class componenet : ❌ unmount");
  }
  render() {
    return (
      <>
        <h2>클래스형 컴포넌트 LifeCycle 공부</h2>
        <div>number : {this.props.number}</div>
        <input
          type="text"
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
        ></input>
      </>
    );
  }
}

export default LifeCycleClass;
