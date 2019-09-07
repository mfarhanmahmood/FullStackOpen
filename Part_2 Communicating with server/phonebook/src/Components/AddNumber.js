import React from 'react'

const AddNumber = ({newName, setNewName, persons, setPersons}) => {

    const verifyName = () => {
        return persons.every(person => {
            if (newName === person.name)
            {
                return false
            }
            return true
        });
    }

    const handleOnChange = (event) => {
        setNewName(event.target.value)
        console.log(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const newRecord = {
            name: newName
        }

        if (!verifyName())
        {
            alert(`${newName} is already added in the phonebook!`)
            return
        }
        setPersons(persons.concat(newRecord))

        event.target.name.value = ''
        setNewName('')
        console.log('Handle Submite function completed')
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input
                    name="name"
                    onChange={handleOnChange}
                    placeholder="Enter a new name"
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default AddNumber