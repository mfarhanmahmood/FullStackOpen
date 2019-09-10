import React from 'react'
import phonebookService from '../services/persons'


const AddRecord = (
        {newName, setNewName, newNumber, setNewNumber, persons, setPersons}
    ) => {

    const verifyName = () => {
        return persons.every(person => {
            if (newName === person.name)
            {
                return false
            }
            return true
        });
    }

    const handleNameOnChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberOnChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const newRecord = {
            name: newName,
            number: newNumber
        }

        if (!verifyName())
        {
            alert(`${newName} is already added in the phonebook!`)
            return
        }

        phonebookService
            .addRecord(newRecord)
            .then(returnedRecord => {
                setPersons(persons.concat(returnedRecord))
            })
        event.target.name.value = ''
        event.target.number.value = ''
        setNewName('')
        setNewNumber('')
    }


    return (
        <div>
            <h2>Add a new</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input
                        name="name"
                        onChange={handleNameOnChange}
                        placeholder="Enter a new name"
                    />
                </div>
                <div>
                    <label>Number: </label>
                    <input
                        name="number"
                        onChange={handleNumberOnChange}
                        placeholder="Enter a new number"
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default AddRecord