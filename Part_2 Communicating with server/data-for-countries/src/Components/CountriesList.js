import React from 'react'
import Country from './Country'

const CountriesList = ({ countries }) => {
    if(countries.length === 1)
    {
        return <Country key={countries[0].name} country={countries[0]} showFull={true}/>
        
    }
    return (
        countries.map(country => {
            return <Country key={country.name} country={country} showFull={false} />
        })
    )
}


export default CountriesList