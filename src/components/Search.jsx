import React from 'react'
import { Form } from 'react-bootstrap'

const Search = ({search, searchInput, handleSearch}) => {
    return(
        <Form.Control ref={searchInput} type="text" value={search} onChange={handleSearch} placeholder="Search..."/>
    )
}

export default Search