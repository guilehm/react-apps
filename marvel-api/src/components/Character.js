import React, { Component } from 'react'

class Character extends Component {
    render() {
        return (
            <div>
                <img src={this.props.url} alt={this.props.name} style={imageStyle} />
            </div>
        )
    }
}


const imageStyle = {
    maxWidth: '100px',
}

export default Character