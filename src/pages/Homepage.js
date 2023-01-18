import React from "react";
import "./styles/Homepage.css";
import Container from "react-bootstrap/Container";
// import OurNavbar from "./components/OurNavbar";
import Card from "../components/Card";
import Button from 'react-bootstrap/Button';
import {
  Link
} from "react-router-dom";

const ServiceInfo = {
    "services": [
        {"name": "Service", "brief-desc": "Premium Websites", "link-text": "Click here to see more", "link-dest": "https://i.insider.com/602ee9d81a89f20019a377c6?width=1136&format=jpeg"},
        {"name": "Service", "brief-desc": "Tailored Software", "link-text": "Click here to see more", "link-dest": "https://i.insider.com/602ee9d81a89f20019a377c6?width=1136&format=jpeg"},
        {"name": "Service", "brief-desc": "Cloud Migration", "link-text": "Click here to see more", "link-dest": "https://i.insider.com/602ee9d81a89f20019a377c6?width=1136&format=jpeg"}
      ]
};

const ClientInfo = {
  "services": [
      {"name": "GBADs Informatics", "brief-desc": "“The dashboard's were exactly how I wanted them!”", "link-text": "Click here to see more", "link-dest": "https://i.insider.com/602ee9d81a89f20019a377c6?width=1136&format=jpeg"},
      {"name": "Going Ductless Ltd.", "brief-desc": "“The website was perfect and delivered on time.”", "link-text": "Click here to see more", "link-dest": "https://i.insider.com/602ee9d81a89f20019a377c6?width=1136&format=jpeg"},
    ]
};

function Homepage(){
    return(
        <Container>
        <section id="landing">
          <div className="center">
            <p className="sub-title animate__animated animate__fadeIn  animate__delay-2s">Welcome to Flex Consulting Services</p>
            <h1 className="landing-title animate__animated animate__slideInDown">Flexible solutions, </h1><h1 className="landing-title animate__animated animate__fadeIn animate__delay-1s">exceptional quality.</h1>
            <Button variant="outline-light" className="apple_button animate__animated animate__fadeIn animate__delay-3s"><Link id="contact"to='/about'>Contact Us</Link></Button>
          </div>
        </section>
        <section id="services">
          <h1 className="section-header" style={{textAlign: "left"}}>Services</h1>
          <div id="services-container">
            <Card color1="#171717" color2="#68005E" info={ServiceInfo["services"][0]} nameLink="#BEBEBE"/>
            <Card color1="#171717" color2="#410068" info={ServiceInfo["services"][1]} nameLink="#BEBEBE"/>
            <Card color1="#171717" color2="#210068" info={ServiceInfo["services"][2]} nameLink="#BEBEBE"/>
          </div>
        </section>
        <section id="testimonials">
          <h1 className="section-header" style={{textAlign: "right"}}>Testimonials</h1>
          <div id="services-container">
            <Card color1="#F7931D" color2="#F1C40F" info={ClientInfo["services"][0]} nameLink="#000000"/>
            <Card color1="#FFFFFF" color2="#87CEEB" info={ClientInfo["services"][1]} nameLink="#000000"/>
          </div>
        </section>
        </Container>
    );
}

export default Homepage;