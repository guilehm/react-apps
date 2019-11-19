import React from 'react'
import Rawg from '../services/api'
import { useEffect } from 'react'


const api = new Rawg()

const Game = props => {
    useEffect(() => {
        const fetchGameData = async () => {
            const result = await api.getGameData(3498)
            props.actions.populateGame(props.name, result.data)
        }
        fetchGameData()
    }, [props.actions, props.name])


    return (
        <React.Fragment>
            <span>{props.name}</span>
        </React.Fragment>
    )
}

export default Game