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
        filters: {},
    }

    componentDidMount() {
        axios.get(`${BASEURL}/pets/`)
            .then(res => this.setState({
                pets: res.data.results
            }))
            .catch((e => console.log(e)))
    }

    filterPets = (event) => {
        let value = event.target.value
        let filters = this.state.filters;
        filters[event.target.name] = value
        let query = '';
        if (value !== 'null') {
            query = queryString.stringify(filters)
        }
        let url = `${BASEURL}/pets/?${query}`
        axios.get(url)
            .then(res => this.setState({
                pets: res.data.results,
                filters: filters
            }))
            .catch((e => console.log(e)))
    }

    render() {
        console.log(this.state.pets)
        return (
            <div className="App">
                <Header />
                <Pet pets={this.state.pets} 
                    sex={this.state.filters.sex} 
                    filterPets={this.filterPets}/>
            </div>
        );
    }
}

export default App;
