import React, { Component } from 'react'
import Player from './Player'
import axios from 'axios'


const REACT_APP_BASEURL = process.env.REACT_APP_BASEURL || 'http://localhost:4000'


class Friends extends Component {

    state = {
        friends: []
    }

    fetchFriends() {
        let url = `${REACT_APP_BASEURL}/friends/`
        axios.get(url)
            .then(res => this.setState({ friends: res.data }))
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.fetchFriends()
    }

    getFriendComponent(friends) {
        return friends.map(friend => <Player
            key={friend.playerId}
            playerId={friend.playerId}
            username={friend.handle} />)
    }

    render() {
        return (
            <div>
                {this.getFriendComponent(this.state.friends)}
            </div>
        )
    }
}

export default Friends