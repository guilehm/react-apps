import React from 'react'
import TextField from '@material-ui/core/TextField'


const Search = ({ actions, loading, error }) => {

    function handleSubmit(e) {
        const name = e.target.value.trim()
        if (name) {
            actions.addSearchItems({ name })
            // actions.addGame({ name })
            // actions.setLoading()
        }
        // e.target.value = ''
    }

    function handleKeyDown(e) {
        if (e.which === 13) {
            handleSubmit(e)
        }
    }

    const label = () => {
        if (loading) return 'Loading ...'
        if (error) return 'Error'
        return 'Game'
    }

    return (
        <TextField
            error={error}
            helperText={
                error ? 'Ops... Game not found' : ''
            }
            id="outlined-basic"
            label={label()}
            onBlur={handleSubmit}
            autoFocus={true}
            onKeyDown={handleKeyDown}
            variant="outlined" />
    )
}

export default Search
