import React, { useState } from 'react'
import CodApi from '../services/api-service'

const PlayerDetail = props => {

    const [data, setData] = useState()

    const fetchData = async () => {
        const api = new CodApi()
        const response = await api.getProfileData(props.platform, props.name)
        setData(response.data)
    }

    return (
        <div>
            <h2>Hey! {props.name}</h2>
            <p>{data ? JSON.stringify(data.data.platformInfo) : null}</p>
            <button
                name='search'
                onClick={fetchData}>
                    buscar
            </button>
        </div>
    )

}
export default PlayerDetail
