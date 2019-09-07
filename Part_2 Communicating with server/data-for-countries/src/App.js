import React, { useState, useEffect } from 'react';
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])






  //Add other states and function etc. above this line
  if (countries === undefined || countries.length < 1)
  {
    return <div>Fetching Data</div>
  }
  return (
    // Add Components and elements inside the empty element
    <>
      <p>Hello! {countries[0].name}</p>
    </>
  )
}

export default App;
