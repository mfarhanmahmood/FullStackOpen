import React from 'react'

const Country = ({country, showFull}) => {

    const showLanguage = () => {
        return (
            country.languages.map(
                lang => <li key={lang.iso639_2}>{lang.name}</li>
            )
        )
    }


    if(!showFull) {
        return (
            <>
                <span key={country.name}>{country.name}</span>
                <br />
            </>
        )
    }
    return (
        <div>
            <h1>{country.name}</h1>
            <p>
                Capital: {country.capital}<br/>
                Population: {
                    country
                    .population
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                }
            </p>
            <h2>Languages</h2>
            <ul>
                {showLanguage()}
            </ul>
            <div>
                <img 
                    src={country.flag} 
                    alt={country.name + "'s flag"} 
                    width="128px"
                    style={{border: '1px solid black'}}
                />
            </div>
        </div>
    )
}

export default Country