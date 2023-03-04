import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import { GlobalStyle } from "./styles/globalStyles";
import { Container, Header, Footer } from "./styles/model";
import House from "./assets/home.png"
import SingleBeer from "./pages/SingleBeer";

function App() {
  return (
    <>
      <GlobalStyle />

      <Container className="contenedor">
        <Header className="header">
          <Link to="/" style={{display: "flex", justifyContent: "center" }}> <img src={House} alt="" width={25} /> </Link>
        </Header>
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/beers/:beerId" element={<SingleBeer />} />

        </Routes>

        <Footer className="footer">Footer</Footer>
      </Container>
    </>
  );
}

export default App;
