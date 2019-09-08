import React from 'react'
import Country from './Country'

const CountriesList = ({ countries }) => {
    if(countries.length === 1)
    {
        return <Country country={countries[0]} showFull={true}/>
        
    }
    return (
        countries.map(country => {
            return (
                <div>
                    <Country country={country} showFull={false} />
                </div>
            )
        })

    )
}


export default CountriesList