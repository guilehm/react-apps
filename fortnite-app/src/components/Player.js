import React, { Component } from 'react'
import axios from 'axios'

const REACT_APP_BASEURL = process.env.REACT_APP_BASEURL || 'http://localhost:4000'

class Player extends Component {

    state = {
        playerId: this.props.playerId || '',
        username: this.props.username || '',
        stats: [],
        filter: '',
        segments: [],
    }

    fetchPlayer() {
        if (!this.state.playerId) return
        let url = `${REACT_APP_BASEURL}/players/${this.state.playerId}/stats/`
        axios.get(url)
            .then(res => this.setState(res.data))
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.fetchPlayer()
    }

    getStatsMarkup(stats) {
        return (
            <ul>
                {stats.map(data =>
                    <li key={data.metadata.key}>
                        {data.metadata.name}: {data.value}
                    </li>)}
            </ul>
        )
    }

    getFilteredStats() {
        let filter = this.props.filter
        if (!filter) return this.state.stats
        return this.state.stats.filter(data => data.metadata.key === filter)
    }

    render() {
        let stats = this.getFilteredStats()
        return (
            <React.Fragment>
                <h1>{this.props.username}</h1>
                {this.getStatsMarkup(stats)}
            </React.Fragment>
        )
    }
}

export default Player