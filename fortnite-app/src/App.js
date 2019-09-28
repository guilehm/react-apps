import React, { Component } from 'react'
import Player from './components/Player'
import axios from 'axios'

import './App.css'

const REACT_APP_BASEURL = process.env.REACT_APP_BASEURL || 'http://localhost:4000'


class App extends Component {

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

    render() {
        return (
            <div className="App">
                <h1>Friends</h1>
                {this.state.friends
                    .map(friend => <Player
                            key={friend.playerId}
                            playerId={friend.playerId}
                            username={friend.handle} />
                    )}
            </div>
        )
    }
}

export default App
