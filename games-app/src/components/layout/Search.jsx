import React from 'react'


const Search = ({ actions }) => {
    function handleSubmit(e) {
        const name = e.target.value.trim()
        if (name) actions.addGame({ name })
        e.target.value = ''
    }

    return (
        <input
            type="text"
            placeholder="Enter game name..."
            autoFocus={true}
            onBlur={handleSubmit}
        />
    )
}

export default Search
