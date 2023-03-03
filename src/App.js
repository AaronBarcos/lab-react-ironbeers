import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/globalStyles";
import { Container, Header, Footer } from "./styles/model";

function App() {
  return (
    <>
      <GlobalStyle />

      <Container className="contenedor">
        <Header className="header">
          <h1>Header</h1>
        </Header>
        <Routes>

            <Route path="/" element={<Home />} /> 

        </Routes>

        <Footer className="footer">Footer</Footer>
      </Container>
    </>
  );
}

export default App;
