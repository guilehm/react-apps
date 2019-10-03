import React, { Component } from 'react'
import Character from './components/Character'

import './App.css'


class App extends Component {

    render() {
        return (
            <div className="App">
                <h1>Characters</h1>
                <Character />
            </div>
        )
    }
}

export default App
