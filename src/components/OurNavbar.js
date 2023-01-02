import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './styles/OurNavbar.css';

function OurNavbar() {
  return (
    <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/FlexLogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#our-work" className='light-text'>Our Work</Nav.Link>
            <Nav.Link href="#about-us" className='light-text'>About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default OurNavbar;