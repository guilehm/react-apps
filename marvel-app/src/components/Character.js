import React, { Component } from 'react'

class Character extends Component {
    render() {
        return (
            <div className="character">
                <a
                    href={`/characters/${this.props.id}/`}
                    type="button"
                    className="character__sprite"
                    style={{ backgroundImage: `url(${this.props.url})` }}
                >
                    <p className="character__name"> {this.props.name}</p>
                </a>
            </div>
        )
    }
}

export default Character