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
        let url = `${marvel.baseUrl}/characters/${this.state.characterId}`
        url = `${url}?${marvel.getAuthParams()}`
        axios.get(url)
            .then(res => this.setState(res.data.data.results[0]))
            .catch(err => console.log(err))
    }

    render() {
        let thumb = this.state.thumbnail
        let thumbUrl = thumb ? `${thumb.path}.${thumb.extension}` : ''
        return (
            <React.Fragment>
                <h1>{this.state.name}</h1>
                <p>{this.state.description}</p>
                <img src={thumbUrl} alt={this.state.name} />
            </React.Fragment>
        )
    }
}

export default Character
