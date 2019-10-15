import React, { Component } from 'react'
import axios from 'axios'
import marvel from '../services/api-configurator'

class CharacterDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            characterId: props.match.params.id,
            comics: [],
            events: [],
            series: [],
            stories: [],
            urls: [],
        }
    }

    componentDidMount() {
        this.fetchCharacter()
    }

    fetchCharacter() {
        let url = `${marvel.baseUrl}/characters/${this.state.characterId}`
        url = `${url}?${marvel.getAuthParams()}`
        axios.get(url)
            .then(res => this.setState(res.data.data.results[0]))
            .catch(err => this.setState({ error: true }))
    }

    getResourceMarkup(resource, name) {
        let items = resource.items || []
        return (
            <div>
                <p>{name}:</p>
                <ul>
                    {items.map((resource, index) =>
                        <li key={index}>
                            <a href={`${resource.resourceURI}?${marvel.getAuthParams()}`}>{resource.name}</a>
                        </li>)}
                </ul>
            </div>
        )
    }

    getUrlMarkup(urls) {
        return (
            <div>
                <p>Links:</p>
                <ul>
                    {urls.map((url, index) =>
                        <li key={index}>
                            <a href={url.url}>{url.type}</a>
                        </li>)}
                </ul>
            </div>
        )
    }

    render() {
        let thumb = this.state.thumbnail
        let thumbUrl = thumb ? `${thumb.path}.${thumb.extension}` : ''
        return (
            <React.Fragment>
                <h1>{this.state.name}</h1>
                <p>{this.state.description}</p>
                <img src={thumbUrl} alt={this.state.name} />
                <p>{this.state.modified}</p>
                {this.getUrlMarkup(this.state.urls)}
                {this.getResourceMarkup(this.state.comics, 'Comics')}
                {this.getResourceMarkup(this.state.events, 'Events')}
                {this.getResourceMarkup(this.state.series, 'Series')}
                {this.getResourceMarkup(this.state.stories, 'Stories')}
            </React.Fragment>
        )
    }
}

export default CharacterDetail
