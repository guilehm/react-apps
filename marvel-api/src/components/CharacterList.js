import React, { Component } from 'react'
import axios from 'axios'
import Character from './Character'

const REACT_APP_API_URL = process.env.REACT_APP_API_URL


class CharacterList extends Component {
    state = {
        characters: [],
        error: false,
    }

    componentDidMount() {
        this.fetchCharacters()
    }

    fetchCharacters() {
        let url = `${REACT_APP_API_URL}/characters/`
        axios.get(url)
            .then(res => this.setState({ characters: res.data }))
            .catch(err => this.setState({ error: true }))
    }

    render() {
        return (
            <ul className="characters">
                {this.state.characters.map(character =>
                    <li className="characters__item" key={character.id}>
                        <Character
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            modified={character.modified}
                            url={character.url} />
                    </li>
                )}
            </ul>
        )
    }
}

export default CharacterList