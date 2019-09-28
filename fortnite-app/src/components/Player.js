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

    render() {
        return (
            <div>Hello from Player</div>
        )
    }
}

export default Player;