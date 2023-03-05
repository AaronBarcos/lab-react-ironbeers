import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Beers() {
  const [allBeers, setAllBeers] = useState(null);
  const [beerFiltered, setBeerFiltered] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getDataBeers();
  }, []);

  const getDataBeers = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setAllBeers(response.data);
      setBeerFiltered(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
    filterBeers(event.target.value)
  };

  const filterBeers = (search) => {
    let filterResults = beerFiltered.filter((eachBeer) => {
      if (eachBeer.name.includes(search)) {
        return eachBeer
      }
    })
    setAllBeers(filterResults)
  }

  if (allBeers === null) {
    return (
      <>
        <h1>Wait...</h1>
      </>
    );
  }
  return (
    <div
      style={{
        marginLeft: 40,
        marginTop: 30,
        display: "flex",
        flexDirection: "column",
        gap: 15,
      }}
    >
      <label htmlFor="beer">Search a beer:</label>
      <input
        type="text"
        name="beer"
        value={searchInput}
        onChange={handleSearchInput}
      />
      {allBeers.map((eachBeer) => {
        return (
          <div key={eachBeer.name}>
            <Link
              to={eachBeer._id}
              style={{ display: "flex", gap: 30, textDecoration: "none" }}
            >
              <img src={eachBeer.image_url} alt="foto-beer" width={40} />
              <div>
                <h3>{eachBeer.name}</h3>
                <h5>{eachBeer.tagline}</h5>
                <p>Created by: {eachBeer.name}</p>
              </div>
            </Link>
            <hr style={{ width: "100%" }} />
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
