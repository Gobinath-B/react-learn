import {Component} from 'react';

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter:0,
        }
    }

    increment(){
        console.log(this);
        this.setState ({
            counter: this.state.counter +1,
        })
    }

    decrement(){
        this.setState({
            counter: this.state.counter -1,
        })
    }

    handleClick(){
        console.log("button clicked!");
    }

    render(){
        return(
            <div>
                <h3>Count : {this.state.counter}</h3>
                <button onClick={()=>{this.increment()}}>Increment</button>
                <button onClick={()=>{this.decrement()}}>decrement</button>
                
            </div>
        )
    }
}

export default Counter;