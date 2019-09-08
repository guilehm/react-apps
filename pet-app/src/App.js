import React, { Component } from 'react';
import Header from './components/layout/Header';
import Pet from './components/layout/Pet';
import axios from 'axios';

import './App.css';

const queryString = require('query-string');

const BASEURL = 'https://gui-pets.herokuapp.com/api';

class App extends Component {
    state = {
        pets: [],
        sex: null,
    }

    componentDidMount() {
        axios.get(`${BASEURL}/pets/`)
            .then(res => this.setState({
                pets: res.data.results
            }))
            .catch((e => console.log(e)))
    }

    filterPets = (event) => {
        let obj = {
            [event.target.name]: event.target.value
        }
        let query = queryString.stringify(obj)
        let url = `${BASEURL}/pets/?${query}`
        axios.get(url)
            .then(res => this.setState({
                pets: res.data.results,
                sex: obj.sex,
            }))
            .catch((e => console.log(e)))
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Pet pets={this.state.pets} filterPets={this.filterPets}/>
            </div>
        );
    }
}

export default App;
