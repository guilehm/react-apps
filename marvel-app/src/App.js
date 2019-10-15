import React, { Component } from 'react'
import CharacterList from './components/CharacterList'
import { BrowserRouter as Router, Route } from 'react-router-dom';


import './App.css'


class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="page">
                        <Route exact path="/" component={CharacterList} />
                    </div>
                </div>
            </Router>
        )
    }
}

export default App
