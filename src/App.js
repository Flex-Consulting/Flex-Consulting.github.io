import "./App.css";
import 'animate.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Homepage from "./pages/Homepage";
import OurWork from "./pages/OurWork";
import About from "./pages/About";
import Blog from "./pages/Blog";

import {
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const year = new Date().getFullYear();
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  return (
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
            <Nav.Link as={Link} to="/our-work" className="router-link">Our Work</Nav.Link>
            <Nav.Link as={Link} to="/about" className="router-link">About Us</Nav.Link>
            <Nav.Link as={Link} to="/blog" className="router-link">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/our-work" element={<OurWork/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
      <section id="footer">
          <h4>Flex Consulting © {year}</h4>
        </section>
      </div>
  );
}

export default App;
