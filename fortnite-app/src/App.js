import React, { Component } from 'react';
import Player from './components/Player';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <h1>Hello World!</h1>
                <Player />
            </div>
        )
    }
}

export default App;
