import React from 'react'

const Search = ({ onChange, value }) => (
    <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder="Enter character name..."
        autoFocus
    />
)

export default Search
