import React from 'react'
import Rawg from '../services/api'
import { useEffect } from 'react'


const api = new Rawg()

const Game = props => {
    useEffect(() => {
        const fetchGameData = async () => {
             // o ID abaixo está hardcoded, mas vou buscar das props
            const result = await api.getGameData(3498)
            // preciso do "name" que vem nas props para mandar para o action
            // posteriormente será mudado para o ID
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