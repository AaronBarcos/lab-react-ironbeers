import axios from 'axios'
import React, { useEffect, useState } from 'react'

function RandomBeer() {

  const [randomBeer, setRandomBeer] = useState(null)

  useEffect(() => {
    getDataRandomBeer()
  }, [])
  
  const getDataRandomBeer = async () => {
    try {
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
      setRandomBeer(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  if (randomBeer === null) {
    return ( <h1>Wait...</h1> )
  }

  return (
    <div style={{width: "100%", marginTop: "40px"}}>
    <img src={randomBeer.image_url} alt="foto-beer" width={50} style={{textAlign: "center"}} />
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <h1>{randomBeer.name}</h1>
        <h1>{randomBeer.attenuation_level}</h1>
      </div>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <h3>{randomBeer.tagline}</h3>
        <h3>{randomBeer.first_brewed}</h3>
      </div>
      <p>{randomBeer.description}</p>
      <p>{randomBeer.contributed_by}</p>
    </div>
  )
}

export default RandomBeer