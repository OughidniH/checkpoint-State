import { Component } from "react";
import Image from "./picture.jpg";
import "./Projet.css";

class Projet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      interval: null,
    };
  }

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000),
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  Person = {
    fullname: "Halima Oughidni",
    bio: "bio",
    imgSrc: Image,
    profession: "Etudiante",
  };
  render() {
    return (
      <div className="block">
        <div>
          <img src={this.Person.imgSrc} alt="" />
        </div>
        <div className="card">
          <h3 style={{ color: "red" }}>{this.Person.fullname}</h3>
          <h3 style={{ color: "red" }}>{this.Person.bio}</h3>
          <h3 style={{ color: "red" }}>{this.Person.profession}</h3>
          <h3 style={{ color: "red" }}>{this.state.timer}</h3>
        </div>
      </div>
    );
  }
}
export default Projet;
