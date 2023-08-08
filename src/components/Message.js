import {Component} from 'react';


//const message = ()=><h1>This is child</h1>

class Message extends Component{

    render(){

        return <h1>Message: {this.props.content} </h1>;
    }
}

export default Message;