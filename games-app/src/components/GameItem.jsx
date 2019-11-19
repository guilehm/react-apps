import React from 'react'
import Rawg from '../services/api'
import { useEffect } from 'react'


const api = new Rawg()

const Game = props => {

    useEffect(() => {
        api.getGameData(3498)
            .then(handleSuccess)
            .catch(handleError)
    }, [])

    let handleError = error => {
        console.log(error.message)
    }

    let handleSuccess = response => {
        console.log(response.data)
        return response.data
    }

    return (
        <React.Fragment>
            <span>{props.name}</span>
        </React.Fragment>
    )
}

export default Game