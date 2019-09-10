import React, {useState, useEffect} from 'react'
import phonebookService from './services/persons'
import AddRecord from './Components/AddRecord'
import Records from './Components/Records'
import Filter from './Components/Filter'
import Notification from './Components/Notification'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterTerm, setFilterTerm] = useState('')
    const [notification, setNotification] = useState({ content: null, type: 'info' })

    useEffect(() => {
        phonebookService
            .getAll()
            .then(initialData => {
                setPersons(initialData)
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


    const deleteRecord = id => {
        phonebookService
            .deleteRecord(id)
            .then(response => {
                if(response === 200)
                {
                    setNotification({
                        content: `The entry has been deleted!`,
                        type: 'info'
                    })
                }
            })
            .catch(error => {
                const errorCode = error.response.status
                if(errorCode === 404) {
                    setNotification({
                        content: `This record is not in phonebook or has already been deleted`,
                        type: 'danger'
                    })
                }
            })
        setPersons(persons.filter(person => person.id !== id))
        
    }

    const updateRecord = recordToUpdate => {
        phonebookService
            .updateRecord(recordToUpdate)
            .then(response => {
                if(response.status === 200) {
                   setNotification({
                       content: 'Record has been updated successfully!',
                       type: 'success'
                   })
                }
            })
            .catch(error => {
                const errorCode = error.response.status
                if (errorCode === 404) {
                    setNotification({
                        content: `This record is not in phonebook or has already been delted`,
                        type: 'danger'
                    })
                }
            })
        setPersons(persons.map(p => p.id !== recordToUpdate.id ? p : recordToUpdate))
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <Notification 
                notification={notification}
                setNotification={setNotification}
            />
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
                updateRecord={updateRecord}
                setNotification={setNotification}
            />
            <Records 
                persons={filteredRecords} 
                deleteRecord={deleteRecord}
            />
        </div>
    )
}

export default App