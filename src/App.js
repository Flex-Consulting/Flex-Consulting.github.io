import "./App.css";
import 'animate.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Homepage from "./pages/Homepage";
import OurWork from "./pages/OurWork";
import About from "./pages/About";
import Footer from "./components/Footer";
import Services from "./pages/Services";

import {
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
      <div className="App">
        {/* <OurNavbar/> */}
        <Navbar className="our-nav">
        <Container>
          <Navbar.Brand><Link to='/'>
            <img
              src="./FlexLogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Flex Consulting Logo"
            /></Link>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/services" className="router-link">Services</Nav.Link>
            <Nav.Link as={Link} to="/our-work" className="router-link">Our Work</Nav.Link>
            <Nav.Link as={Link} to="/about" className="router-link">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/our-work" element={<OurWork/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <section id="footer">
          <Footer/>
      </section>
    </div>
  );
}

export default App;
