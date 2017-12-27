import React, { Component } from 'react';

import './App.css';
import Hi,{Print,Add,Value} from './newreact/home';


class App extends Component {
  render() {
 const person= Value.map(n => ...n);
 console.log(person);

    return (
      <div className="App">  
        <Print  id="1"/>
        <Print  id="2"/>
        <Print  id="3">this is suba</Print>
        <Add />
        <Hi />
      <Value />
        
      </div>
    );
  }
}

export default App;
