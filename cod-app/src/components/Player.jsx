import React, { useState, useEffect } from 'react'
import CodApi from '../services/api-service'

const PlayerDetail = props => {

    const [data, setData] = useState()
    useEffect(() => {
        (async () => {
            const api = new CodApi()
            const response = await api.getProfileData(props.platform, props.name)
            if (!response) return
            setData(response.data)
        })();
      }, [props.name, props.platform]);

    const battleRoyale = data ? data.data.segments
        .find(s => s.metadata.name === 'Battle Royale') : null

    return (
        <div>
            <h2>Player: {props.name}</h2>
            {
                battleRoyale ?
                <ul>
                    <li>kills: {battleRoyale.stats.kills.value}</li>
                    <li>deaths: {battleRoyale.stats.deaths.value}</li>
                    <li>wins: {battleRoyale.stats.wins.value}</li>
                    <li>kdRatio: {
                        (battleRoyale.stats.kills.value / battleRoyale.stats.deaths.value).toFixed(2)
                    }</li>
                </ul>
                : null
            }
        </div>
    )

}
export default PlayerDetail
