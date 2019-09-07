import React from 'react'

const AddNumber = ({newName, setNewName, persons, setPersons}) => {

    const handleOnChange = (event) => {
        setNewName(event.target.value)
        console.log(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const newRecord = {
            name: newName
        }

        setPersons(persons.concat(newRecord))
        setNewName('')
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