import "./App.css";
import 'animate.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Homepage from "./pages/Homepage";
import OurWork from "./pages/OurWork";
import About from "./pages/About";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const year = new Date().getFullYear();
  return (
    <Router>
      <div className="App">
        {/* <OurNavbar/> */}
        <Navbar bg="dark" className="our-nav">
        <Container>
          <Navbar.Brand href="#home"><Link to='/'>
            <img
              src="./FlexLogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Link>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#our-work" className="light-text"><Link to='/our-work' className="router-link">Our Work</Link></Nav.Link>
            <Nav.Link href="#about-us" className="light-text"><Link to='/about' className="router-link">About Us</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/our-work" element={<OurWork/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </div>
      <section id="footer">
          <h4>Flex Consulting © {year}</h4>
        </section>
    </Router>
  );
}

export default App;
