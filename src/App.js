import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input onChange={this.repeatText.bind(this)}type="text" placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.text}</p>
      </div>
    );
  }
  repeatText(e) {
    this.setState({
      text: e.target.value
    });
  }
}

export default App;
