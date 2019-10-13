import React, { Component } from 'react'
import CharacterDetail from './components/CharacterDetail'
import CharacterList from './components/CharacterList'

import './App.css'


class App extends Component {

    render() {
        return (
            <div className="App">
                {/* <CharacterDetail /> */}
                <CharacterList />
            </div>
        )
    }
}

export default App
