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

    render() {
        return (
            <div>
                <Filter
                    options={this.state.metadatas}
                    activeValue={this.state.filter} />
                {this.getFriendComponent(this.state.friends)}
            </div>
        )
    }
}

export default Friends