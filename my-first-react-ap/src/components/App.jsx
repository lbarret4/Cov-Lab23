import React,{Component} from 'react';

// function App(props){

//     return <h1>This is my fist react {props.type} element. </h1>;
// }

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            text:"some text"
        }
    }
    render(){
        return <h1>This is my fist react {this.props.type} element with {this.state.text} . </h1>;
    }
}
export default App;