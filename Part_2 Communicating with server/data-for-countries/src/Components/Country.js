import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { timeout } from 'q';

const Country = ({country, showFull}) => {
    const [expand, setExpand] = useState(false)
    const [weatherReport, setWeatherReport] = useState({})
    const [showWeather, setShowWeather] = useState(false)

    useEffect(() => {
        axios
            .get(`https://api.apixu.com/v1/current.json?key=29cda33d8ac1444893894336190809&q=${country.capital}`)
            .then(response => {
                setWeatherReport(response.data)
            })
        }, [country.capital, showWeather])

    const expandCountry = () => {
        setExpand(!expand)
    }

    const showCollapseButton = () => {
        if(expand){
            return <button onClick={expandCountry}>Collapse</button>
        }
    }

    const showLanguage = () => {
        return (
            country.languages.map(
                lang => <li key={lang.iso639_2}>{lang.name}</li>
            )
        )
    }

    const conditionalShowReport = () => {
        if(weatherReport.current === undefined)
        {
            return <p>Fetching weather data</p>
        }
        if(!showWeather) {
            timeout(()=>{setShowWeather(!showWeather)}, 100)
        }
        return (
            <div>
                <h2>Weather in {country.capital}</h2>
                <p>Temprature: {weatherReport.current.temp_c} <sup>o</sup>C</p>
                <div>
                    <img
                        src={weatherReport.current.condition.icon}
                        alt={weatherReport.current.condition.text}
                    />
                </div>
                <p>
                    Wind: {weatherReport.current.wind_kph} kph
                    direction {weatherReport.current.wind_dir}
                </p>
            </div>
        )
    }


    if(!showFull && !expand) {
        return (
            <>
                <span key={country.name}>{country.name} </span>
                <button onClick={expandCountry}>show</button>
                <br />
            </>
        )
    }
    return (
        <div>
            <h1>{country.name}</h1>
            {showCollapseButton()}
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
            {conditionalShowReport()}
        </div>
    )
}

export default Country