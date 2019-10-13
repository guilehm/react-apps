import React, { Component } from 'react'

class Character extends Component {
    render() {
        return (
            <div>{this.props.name || 'nada'}</div>
        )
    }
}

export default Character