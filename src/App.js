import { Component } from "react";
import "./App.css";
import Projet from "./Comp/Projet";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValide: false,
    };
  }

  validation = () => {
    this.setState({ isValide: !this.state.isValide });
    console.log(this.state.isValide);
  };
  render() {
    return (
      <div className="App">
        <button className="glow-on-hover" onClick={this.validation}>
          {this.state.isValide ? "Hide Profile" : "Show Profile"}
        </button>
        {this.state.isValide && <Projet />}
      </div>
    );
  }
}

export default App;
