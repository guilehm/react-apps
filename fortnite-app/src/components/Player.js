import React, { Component } from 'react';
import axios from 'axios';

const REACT_APP_BASEURL = process.env.REACT_APP_BASEURL || 'http://localhost:4000';

class Player extends Component {
    state = {
        playerId: 'AQUACAGNjhTuxlU8SrIBP8eO+O0A',
        stats: [],
    }

    fetchPlayer() {
        let url = `${REACT_APP_BASEURL}/players/${this.state.playerId}/stats/`;
        axios.get(url)
            .then(res => this.setState(res.data))
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.fetchPlayer()
    }

    getDataMarkup(data) {
        return (
            <li key={data.metadata.key}>{data.metadata.name}: {data.value}</li>
        )
    }

    getFilteredStats() {
        let stats = this.state.stats
        let filter = this.state.filter
        if (filter) {
            stats = stats.filter(data => data.metadata.key === filter)
        }
        return stats
    }

    render() {
        return (
            <React.Fragment>
                <ul>
                    { this.state.stats.map(data => this.getDataMarkup(data)) }
                </ul>
            </React.Fragment>
        )
    }
}

export default Player;