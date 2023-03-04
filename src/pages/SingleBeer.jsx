import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleBeer() {
  const { beerId } = useParams();

  const [beer, setBeer] = useState(null);

  useEffect(() => {
    getDataBeer();
  }, [beerId]);

  const getDataBeer = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (beer === null) {
    return (
        <h1>Wait...</h1>
    )
  }

  return (
    <div style={{width: "100%", marginTop: "40px"}}>
    <img src={beer.image_url} alt="foto-beer" width={50} style={{textAlign: "center"}} />
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <h1>{beer.name}</h1>
        <h1>{beer.attenuation_level}</h1>
      </div>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <h3>{beer.tagline}</h3>
        <h3>{beer.first_brewed}</h3>
      </div>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
}

export default SingleBeer;
