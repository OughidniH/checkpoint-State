import { Component } from "react";
import "./IntroState.css"
class IntroState extends Component{
    constructor(props){
        console.log("constructor()");
        super(props);
        this.state = {
            count : 0,
            timer: 0,
            interval: null
        }
    }
    increment = ()=>{
        this.setState({count: this.state.count + 1}) ;
    } 
    decrement = ()=>{
        this.setState({count: this.state.count - 1}) ;
    } 
     componentDidMount(){
        console.log("componentDidMount()");
        this.setState({interval : setInterval(() => {
            this.setState({timer : this.state.timer + 2})
        }, 1000)})
     }
     componentDidUpdate(){
        console.log("componentDidUpdate()");
     }

    render() {
        console.log("render()");
        return(
            <div className="block">
                <button className="btn" onClick={this.increment}> (+) </button>
                <span> {this.state.count} </span>
                <button onClick={this.decrement}> (-) </button>
                <h3> {this.state.timer}</h3>
            </div>
        );
    }
}
export default IntroState;
