import React, { useState } from 'react'


const Inputs = ({ error, players, actions }) => {

    const [username, setUsername] = useState('')
    const [platform, setPlatform] = useState('psn')

    const handleSubmit = () => {
        if (!username) return
        setUsername('')
        actions.fetchPlayer({ username, platform })
    }

    const handleUpdate = () => actions.updateList({players})
    const handleClear = () => actions.clearList()

    return (
        <React.Fragment>
            <input
                value={username}
                name='username'
                type='text'
                placeholder='username...'
                autoFocus
                onChange={e => setUsername(e.target.value)}
            />
            <select
                name='platform'
                value={platform}
                onChange={e => setPlatform(e.target.value)}>
                <option value='psn'>psn</option>
                <option value='pc'>pc</option>
                <option value='battlenet'>battlenet</option>
                <option value='xbl'>xbl</option>
                <option value='atvi'>activision</option>
            </select>
            <button
                style={{backgroundColor: 'green', color: 'white'}}
                className='mr-1'
                name='save'
                onClick={handleSubmit}>
                save
            </button>
            <button
                style={{backgroundColor: 'blue', color: 'white'}}
                className='mr-1'
                name='update'
                onClick={handleUpdate}>
                update
            </button>
            <button
                style={{backgroundColor: 'red', color: 'white'}}
                className='mr-1'
                name='clear'
                onClick={handleClear}>
                clear
            </button>
            {
                error ?
                <p style={{color: 'red'}}>please check the username and platform</p>
                : ''
            }
        </React.Fragment>
    )
}

export default Inputs