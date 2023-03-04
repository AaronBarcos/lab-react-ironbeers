import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

function Beers() {

 const [allBeers, setAllBeers] = useState(null)

 useEffect(() => {
  getDataBeers()
 }, [])
 
 const getDataBeers = async() => {
  try {
    const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
    setAllBeers(response.data)
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
 }

if (allBeers === null) {
  return (
    <>
      <h1>Wait...</h1>
    </>
  )

}
  return (
    <div style={{marginLeft: 40, marginTop: 30, display: 'flex', flexDirection: 'column', gap: 15 }}>
      {allBeers.map((eachBeer) => {
        return (
          <div key={eachBeer.name}  >
          <Link to={eachBeer._id} style={{display: 'flex', gap: 30, textDecoration: "none"}}>
            <img src={eachBeer.image_url} alt="foto-beer" width={40} />
            <div>
              <h3>{eachBeer.name}</h3>
              <h5>{eachBeer.tagline}</h5>
              <p>Created by: {eachBeer.name}</p>
            </div>
          </Link>     
          <hr style={{width: "100%"}} />    
          </div>
        )
      })}
    </div>
  )
}

export default Beers