import { Link } from "react-router-dom";
import Beers from "../assets/beers.png"
import RandomBeer from "../assets/random-beer.png"
import NewBeer from "../assets/new-beer.png"

function Home() {

    const styles = {
        textDecoration: "none"
    }

  return (
    <div>
      <Link to="/beers" style={styles}>
        <img src={Beers} alt="" width="100%"/>
        <h1>All Beers</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur nam porro molestias voluptates voluptatum voluptatibus. Dolorum esse cupiditate deserunt repellendus reiciendis minima, dolorem laborum magni explicabo modi non illum. Totam?</p>
      </Link>
      <Link to="/random-beer" style={styles}>
        <img src={RandomBeer} alt="" width="100%"/>
        <h1>Random Beer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rerum aut quisquam iure. Omnis ipsum atque laboriosam, hic voluptatibus alias deleniti aut illo perferendis facilis odio deserunt possimus amet minima!</p>
      </Link>
      <Link to="/new-beer" style={styles}>
        <img src={NewBeer} alt="foto" width="100%" />
        <h1>New Beer</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia maxime labore minus illum dignissimos. Dolore consequatur consectetur voluptatem reiciendis modi. Delectus odio commodi eaque impedit facilis distinctio, architecto odit provident?</p>
      </Link>
    </div>
  );
}

export default Home;
