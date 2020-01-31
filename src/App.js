import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  increment=()=>{
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }
  decrement=()=>{ 
    this.setState(prevState => ({
      count: prevState.count - 1,
    }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment count</button>
        <button onClick={this.decrement}>Decrement count</button>
      </div>
    )
  }
}

export default App;
