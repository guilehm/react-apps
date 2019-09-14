import React, { Component } from 'react';
import Header from './components/layout/Header';
import Pet from './components/layout/Pet';
import axios from 'axios';

import './App.css';

const queryString = require('query-string');

// const BASEURL = 'https://gui-pets.herokuapp.com/api';
const BASEURL = process.env.BASEURL || 'http://localhost:8000/api';

class App extends Component {
    state = {
        pets: [],
        filters: {},
        breeds: [],
    }

    componentDidMount() {
        // get pets
        axios.get(`${BASEURL}/pets/`)
            .then(res => this.setState({
                pets: res.data.results
            }))
            .catch((e => console.log(e)))

        // handle breeds
        let handleBreedSuccess = (res) => {
            let breeds = [];
            for (let breed of res.data.results) {
                breeds.push(breed.name);
            }
            this.setState({ breeds })
        }

        // get breeds
        axios.get(`${BASEURL}/breeds/?limit=350`)
            .then(handleBreedSuccess)
            .catch((e => console.log(e)))
    }

    filterPets = (event) => {
        let value = event.target.value;
        let filters = this.state.filters;
        filters[event.target.name] = value;
        let query = '';
        if (value !== 'null') {
            query = queryString.stringify(filters);
        }
        let url = `${BASEURL}/pets/?${query}`;
        axios.get(url)
            .then(res => this.setState({
                pets: res.data.results,
                filters: filters,
            }))
            .catch((e => console.log(e)))
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Pet pets={this.state.pets}
                    sex={this.state.filters.sex}
                    filterPets={this.filterPets}
                    breeds={this.state.breeds} />
            </div>
        );
    }
}

export default App;
