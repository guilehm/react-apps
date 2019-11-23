import React from 'react'


const Game = props => {
    return (
        <React.Fragment>
            <div className="">
                <h3>{props.name}</h3>
                <img
                    src={props.background_image}
                    alt={props.name}
                    style={imgStyle}/>
            </div>
        </React.Fragment>
    )
}

const imgStyle = {
    maxWidth: '300px'
}

export default Game