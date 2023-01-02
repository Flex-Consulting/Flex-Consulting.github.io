import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import OurNavbar from "./components/OurNavbar";
import ServiceCard from "./components/ServiceCard";
import Button from 'react-bootstrap/Button';

const ServiceInfo = {
    "services": [
        {"service-name": "Service", "brief-desc": "Premium Websites", "link-text": "Click to see more", "link-dest": "https://i.insider.com/602ee9d81a89f20019a377c6?width=1136&format=jpeg"},
        {"service-name": "Service", "brief-desc": "Tailored Software", "link-text": "Click to see more", "link-dest": "https://i.insider.com/602ee9d81a89f20019a377c6?width=1136&format=jpeg"},
        {"service-name": "Service", "brief-desc": "Custom Websites", "link-text": "Click to see more", "link-dest": "https://i.insider.com/602ee9d81a89f20019a377c6?width=1136&format=jpeg"}
      ]
};

function App() {
  const year = new Date().getFullYear();
  return (
    <div className="App">
      <OurNavbar/>
      <Container>
      <section id="landing">
        <div className="center">
          <p className="sub-title">Welcome to Flex Consulting</p>
          <h1 className="landing-title">Flexible solutions, exceptional quality.</h1>
          <Button variant="outline-light">Contact Us</Button>
        </div>
      </section>
      <section id="services">
        <h1 className="section-header" style={{textAlign: "left"}}>Services</h1>
        <div id="services-container">
          <ServiceCard color1="#171717" color2="#68005E" service_info={ServiceInfo["services"][0]}/>
          <ServiceCard color1="#171717" color2="#410068" service_info={ServiceInfo["services"][1]}/>
          <ServiceCard color1="#171717" color2="#210068" service_info={ServiceInfo["services"][2]}/>
        </div>
      </section>
      <section id="footer">
        <h4>Flex Consulting © {year}</h4>
      </section>
      </Container>
    </div>
  );
}

export default App;
