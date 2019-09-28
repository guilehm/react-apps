import React, { Component } from 'react';
import axios from 'axios';

const REACT_APP_BASEURL = process.env.REACT_APP_BASEURL || 'http://localhost:4000';

class Player extends Component {

    render() {
        return (
            <div>Hello from Player</div>
        )
    }
}

export default Player;