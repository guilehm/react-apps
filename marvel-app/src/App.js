import React, { Component } from 'react'
import CharacterList from './components/CharacterList'
import CharacterDetail from './components/CharacterDetail'
import { BrowserRouter as Router, Route } from 'react-router-dom';


import './App.css'


class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="page">
                        <Route exact path="/" component={CharacterList} />
                        <Route exact path="/characters/:id/" component={CharacterDetail} />
                        <Route exact path="*" component={CharacterList} />
                    </div>
                </div>
            </Router>
        )
    }
}

export default App
