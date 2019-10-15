import React, { Component } from 'react'

class Search extends Component {

    render() {
        return (
            <input
                type="text"
                onChange={this.props.filterCharacters}
                placeholder="Enter character name..."
                autoFocus
            />
        )
    }

}
export default Search
