import React from 'react'

const Record = ({person, deleteRecord}) => {

    const handleDeleteClick = () => {
        if(window.confirm(`Delete ${person.name}?`))
        {
            deleteRecord(person.id)
        }

    }


    return (
        <p>{person.name} {person.number} &nbsp;
            <button onClick={handleDeleteClick}>delete</button>
        </p>
    )
}

const Records = ({persons, deleteRecord}) => {

    return (
        <div>
            <h2>Numbers</h2>
            { persons.map((person) => {
                return (
                    <Record 
                        key={person.name} 
                        person={person}
                        deleteRecord={deleteRecord}
                    />
                )
            }) }
        </div>
    )
}

export default Records