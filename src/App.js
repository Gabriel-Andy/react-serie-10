import React, { Component,PureComponent } from "react";
import "./App.css";

const Temp = (props) => {
  console.log("Temps")
  return <div>{props.val}</div>;
};


class App extends PureComponent {

  state = {
    val: 1,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return { val:1 }
      })
    }, 2000)
  }
  // shouldComponentUpdate(nextProp,nextState){
  //   console.log("nextState", nextState);
  //   console.log("CurrentState", this.State);
  //   return (this.state.val === nextState.val ? false:true)
  // }
  render() {
    console.log("App")
    return (
      <div className="App">
        <Temp val={this.state.val} />
      </div>
    );
  }
}

export default App;
