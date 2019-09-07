import React, {useState} from 'react'
import AddRecord from './Components/AddRecord'
import Records from './Components/Records'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    return (
        <div>
            <h2>Phonebook</h2>
            <AddRecord 
                newName={newName}
                setNewName={setNewName}
                newNumber={newNumber}
                setNewNumber={setNewNumber}
                persons={persons}
                setPersons={setPersons}
            />
            <h2>Numbers</h2>
            <Records persons={persons} />
        </div>
    )
}

export default App