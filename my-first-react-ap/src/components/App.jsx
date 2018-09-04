import React,{Component} from 'react';

// function App(props){

//     return <h1>This is my fist react {props.type} element. </h1>;
// }

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            text:" with some text",
            hasLoaded:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({
            text:e.target.value
        })
    }

    handleClick(){
        this.setState({
            hasLoaded:!this.state.hasLoaded
        });
    }

    render(){
        if(this.state.hasLoaded){
            return ( 
                <React.Fragment>
                <h1>{this.props.text} {this.state.text}. </h1> 
                <input type="text" onChange={this.handleChange}></input>
                <button onClick={this.handleClick} style={{display:"block"}}>button</button>
                </React.Fragment>);           

        }else{
            return( 
                <React.Fragment>
                <h1>Loading..................</h1>
                <button onClick={this.handleClick} style={{display:"block"}}>button</button>
                </React.Fragment>
                // conse
            );

        }
   
    
    }
}
export default App;