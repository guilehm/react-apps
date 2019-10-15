import React, { Component } from 'react'
import axios from 'axios'
import Character from './Character'
import Search from '../components/layout/Search'

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

    filterCharacters(event) {
        let value = event.target.value
        let characters = this.state.characters || []
        let filtered = characters.filter(char => char.name.includes(value))
        this.setState({ filteredCharacters: filtered })
    }

    render() {
        return (
            <ul className="characters">
                <div className="page__search">
                    <Search filterCharacters={this.filterCharacters} />
                </div>
                {this.state.filteredCharacters.map(character =>
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