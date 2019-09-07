import React from 'react'

const Record = ({person}) => {
    return (
        <p>{person.name}</p>
    )
}

const Records = ({persons}) => {
    return (
        <div>
            { persons.map((person) => <Record key={person.name} person={person} />) }
        </div>
    )
}

export default Records