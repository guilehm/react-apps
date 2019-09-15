import React, { Component } from 'react';
import Header from './components/layout/Header';
import Pet from './components/layout/Pet';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

const queryString = require('query-string');

const REACT_APP_BASEURL = process.env.REACT_APP_BASEURL || 'http://localhost:8000';

class App extends Component {
    state = {
        pets: [],
        filters: {},
        breeds: [],
    }

    componentDidMount() {
        // get pets
        axios.get(`${REACT_APP_BASEURL}/api/pets/`)
            .then(res => this.setState({
                pets: res.data.results
            }))
            .catch((e => console.log(e)))

        // handle breeds
        let handleBreedSuccess = (res) => {
            let breeds = ['Todas'];
            // eslint-disable-next-line
            for (let breed of res.data.results) {
                breeds.push(breed.name);
            }
            this.setState({ breeds })
        }

        // get breeds
        axios.get(`${REACT_APP_BASEURL}/api/breeds/?limit=350&active=true`)
            .then(handleBreedSuccess)
            .catch((e => console.log(e)))
    }

    cleanFilters(filters) {
        // eslint-disable-next-line
        for (let key of Object.keys(filters)) {
            if (filters[key] === 'null' || filters[key] === 'Todas') {
                delete filters[key];
            }
        }
        return filters;
    }

    filterPets = (event) => {
        let value = event.target.value;
        let { filters } = this.state;
        filters[event.target.name] = value;
        filters = this.cleanFilters(filters)
        let query = queryString.stringify(filters);
        let url = `${REACT_APP_BASEURL}/api/pets/?${query}`;
        axios.get(url)
            .then(res => this.setState({
                pets: res.data.results,
                filters: filters,
            }))
            .catch((e => console.log(e)))
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Pet pets={this.state.pets}
                        sex={this.state.filters.sex}
                        filterPets={this.filterPets}
                        filters={this.state.filters}
                        breeds={this.state.breeds} />
                </div>
            </Router>
        );
    }
}

export default App;
