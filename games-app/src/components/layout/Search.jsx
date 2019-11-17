import React from 'react'


const Search = ({ actions }) => {
    function handleSubmit(e) {
        const name = e.target.value.trim()
        actions.addGame({ name: name })
    }

    return (
        <input
            type="text"
            placeholder="Enter game name..."
            autoFocus
            onBlur={handleSubmit}
        />
    )
}

export default Search
