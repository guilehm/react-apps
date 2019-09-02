import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Play games',
        completed: true
      },
      {
        id: 3,
        title: 'Dinner with girlfriend',
        completed: false
      }
    ]
  }


  render () {
    return (
      <div className="App">
        <h1>App</h1>
          <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
