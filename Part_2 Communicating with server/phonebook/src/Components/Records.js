import React from 'react'

const Record = ({person}) => {
    return (
        <p>{person.name} {person.number}</p>
    )
}

const Records = ({persons}) => {
    return (
        <div>
            <h2>Numbers</h2>
            { persons.map((person) => <Record key={person.name} person={person} />) }
        </div>
    )
}

export default Records