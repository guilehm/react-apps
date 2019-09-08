import React, { Component } from 'react';
import Header from './components/layout/Header';
import Pet from './components/layout/Pet';
import './App.css';
import axios from 'axios';


class App extends Component {
    state = {
        pets: []
    }

    getPets() {
        axios.get('https://gui-pets.herokuapp.com/api/pets/')
            .then(res => this.setState({
                pets: res.data.results
            }))
            .catch(console.log('error'))
    }

    render() {
        this.getPets()
        return (
            <div className="App">
                <Header />
                <Pet pets={this.state.pets} />
            </div>
        );
    }
}

export default App;
