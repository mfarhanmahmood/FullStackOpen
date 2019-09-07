import React, {useState} from 'react'
import AddRecord from './Components/AddRecord'
import Records from './Components/Records'
import Filter from './Components/Filter'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterTerm, setFilterTerm] = useState('')
    
    const filteredRecords = persons.filter(
        (person) => {
            if(filterTerm === '')
            {
                return person
            }
            const lowerCaseName = person.name.toLocaleLowerCase()
            return lowerCaseName.includes(filterTerm.toLocaleLowerCase())
        }
        )

    return (
        <div>
            <h1>Phonebook</h1>
            <Filter
                setFilterTerm={setFilterTerm} 
            />
            <AddRecord 
                newName={newName}
                setNewName={setNewName}
                newNumber={newNumber}
                setNewNumber={setNewNumber}
                persons={persons}
                setPersons={setPersons}
            />
            <Records persons={filteredRecords} />
        </div>
    )
}

export default App