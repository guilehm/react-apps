import React, { Component } from 'react'
import axios from 'axios'
import marvel from '../services/api-configurator'

class Character extends Component {

    state = {
        characterId: this.props.characterId || '1009351',
    }

    componentDidMount() {
        this.fetchCharacter()
    }

    fetchCharacter() {
        let url = `${marvel.baseUrl}/characters/${this.state.characterId}/`
        url = `${url}?${marvel.getAuthParams()}`
        axios.get(url)
            .then(res => this.setState(res.data.results[0]))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <span>hello from character</span>
        )
    }
}

export default Character
