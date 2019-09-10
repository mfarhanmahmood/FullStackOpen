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


export default {
    getAll,
    addRecord
}