import React from 'react'

const Filter = ({setFilterTerm}) => {

    const handleSearchOnChange = (event) => {
        setFilterTerm(event.target.value)
    }

    return (
        <div>
            <label>Filter shown with: </label>
            <input onChange={handleSearchOnChange}/>
        </div>
    )
}

export default Filter