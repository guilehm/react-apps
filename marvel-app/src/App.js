import React, { Component } from 'react'
import CharacterList from './components/CharacterList'

import './App.css'


class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="page">
                    <CharacterList />
                </div>
            </div>
        )
    }
}

export default App
