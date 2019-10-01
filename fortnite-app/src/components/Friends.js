import React, { Component } from 'react'
import Player from './Player'
import axios from 'axios'
import Filter from './Filter'

const REACT_APP_BASEURL = process.env.REACT_APP_BASEURL || 'http://localhost:4000'


class Friends extends Component {

    state = {
        friends: [],
        metadatas: [],
        filter: '',
    }
    constructor(props) {
        super(props)

        this.updateFilter = this.updateFilter.bind(this)
        this.clearFilter = this.clearFilter.bind(this)
    }

    fetchMetadatas() {
        let url = `${REACT_APP_BASEURL}/metadatas/`
        axios.get(url)
            .then(res => this.setState({ metadatas: res.data }))
            .catch(err => console.log(err))
    }

    fetchFriends() {
        let url = `${REACT_APP_BASEURL}/friends/`
        axios.get(url)
            .then(res => this.setState({ friends: res.data }))
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.fetchFriends()
        this.fetchMetadatas()
    }

    getFriendComponent(friends) {
        return friends.map(friend =>
            <Player
                key={friend.playerId}
                playerId={friend.playerId}
                username={friend.handle}
                filter={this.state.filter} />)
    }

    updateFilter(event) {
        let value = event.target.value || 'kills'
        return this.setState({ filter: value })
    }

    clearFilter() {
        return this.setState({ filter: '' })
    }

    render() {
        return (
            <div>
                <Filter
                    options={this.state.metadatas}
                    activeValue={this.state.filter}
                    updateFilter={this.updateFilter}
                    clearFilter={this.clearFilter} />
                {this.getFriendComponent(this.state.friends)}
            </div>
        )
    }
}

export default Friends