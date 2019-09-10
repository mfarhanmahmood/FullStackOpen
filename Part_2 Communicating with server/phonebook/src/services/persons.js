import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const addRecord = newRecord => {
    const request = axios.post(baseUrl, newRecord)
    return request.then(response => response.data)
}

const deleteRecord = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.status)
}

const updateRecord = (newRecord) => {
    const request = axios.put(`${baseUrl}/${newRecord.id}`, newRecord)
    return request.then(response => response.data)
}

export default {
    getAll,
    addRecord,
    deleteRecord,
    updateRecord
}