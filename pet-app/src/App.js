import React, { Component } from 'react';
import Header from './components/layout/Header';
import Pet from './components/layout/Pet';
import './App.css';

class App extends Component {
    state = {
        pets: [
            {id: 1, name: 'João', description: 'Descrição do João', link: 'link do joão'},
            {id: 2, name: 'Maria', description: 'Descrição do Maria', link: 'link do Maria'},
        ]
    }
    render() {
        return (
            <div className="App">
                <Header />
                <Pet pets={this.state.pets} />
            </div>
        );
    }
}

export default App;
