import React, { Component } from 'react'
import CharacterList from './components/CharacterList'

import './App.css'


class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="page">
                    <ul className="characters"><CharacterList /></ul>

                </div>
            </div>
        )
    }
}

export default App
