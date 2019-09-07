import React, {useState, useEffect} from 'react'
import axios from 'axios'
import AddRecord from './Components/AddRecord'
import Records from './Components/Records'
import Filter from './Components/Filter'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterTerm, setFilterTerm] = useState('')

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    }, [])

    
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