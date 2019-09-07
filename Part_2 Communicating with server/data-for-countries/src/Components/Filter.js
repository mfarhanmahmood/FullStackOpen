import React from 'react'
import CountriesList from './CountriesList'

const Filter = ({filterTerm, setFilterTerm, countries}) => {

    const handleFilterChange = (event) => {
        setFilterTerm(event.target.value)
        console.log(event.target.value)
    }

    const filterdCountries = countries.filter(country => {
        if (filterTerm === '') {
            return country
        }
        const lowerCaseName = country.name.toLocaleLowerCase()
        return lowerCaseName.includes(filterTerm.toLocaleLowerCase())
    })

    const conditionalCountryShow = () => {

        if (filterTerm === '') {
            return <p>Enter a filter term</p>
        }

        if (filterdCountries.length > 10) {
            return <p><strong>Too many matched, specify another filter</strong></p>
        }

        if (filterdCountries.length <= 10 && filterdCountries.length > 0) {
            return <CountriesList countries={filterdCountries} />
        }

        if (filterdCountries.length < 1) {
            return <p><strong>No matches found, specify another filter</strong></p>
        }
    }

    return (
        <div>
            <label htmlFor="term">Find countries: </label>
            <input 
                name="term" 
                placeholder="Enter filter term"
                onChange={handleFilterChange}
            />
            <br />
            {conditionalCountryShow()}
        </div>
    )
}

export default Filter