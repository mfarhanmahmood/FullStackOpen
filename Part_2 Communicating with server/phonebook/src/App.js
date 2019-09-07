import React, {useState} from 'react'
import AddNumber from './Components/AddNumber'
import Records from './Components/Records'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'}
    ])
    const [newName, setNewName] = useState('')

    return (
        <div>
            <h2>Phonebook</h2>
            <AddNumber 
                newName={newName}
                setNewName={setNewName}
                persons={persons}
                setPersons={setPersons}
            />
            <h2>Numbers</h2>
            <Records persons={persons} />
        </div>
    )
}

export default App