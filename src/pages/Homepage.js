import React from "react";
import "./styles/Homepage.css";
import Container from "react-bootstrap/Container";
// import OurNavbar from "./components/OurNavbar";
import Card from "../components/Card";
import Button from 'react-bootstrap/Button';
import IntroCard from "../components/IntroCard";
import {
  Link
} from "react-router-dom";

const ServiceInfo = {
    "services": [
        {"name": "Service", "brief-desc": "Premium Websites", "link-text": "Click here to see more", "link-dest": "/services"},
        {"name": "Service", "brief-desc": "Microservices", "link-text": "Click here to see more", "link-dest": "/services"},
        {"name": "Service", "brief-desc": "Cloud Migration", "link-text": "Click here to see more", "link-dest": "/services"},
        {"name": "Service", "brief-desc": "Automated Deployment", "link-text": "Click here to see more", "link-dest": "/services"},
        {"name": "Service", "brief-desc": "Performance Optimization", "link-text": "Click here to see more", "link-dest": "/services"},
        {"name": "Service", "brief-desc": "Business Automation", "link-text": "Click here to see more", "link-dest": "/services"}
      ]
};

const ClientInfo = {
  "services": [
      {"name": "GBADs Informatics", "brief-desc": "“The dashboard's were exactly how I wanted them!”", "link-text": "Click here to see more", "link-dest": "/our-work"},
      {"name": "Going Ductless Ltd.", "brief-desc": "“The website was perfect and delivered on time.”", "link-text": "Click here to see more", "link-dest": "/our-work"},
    ]
};

const ButtonMailto = ({ mailto, label }) => {
  return (
      <Link
          id="contact"
          to='/'
          onClick={(e) => {
              window.location.href = mailto;
              e.preventDefault();
          }}
      >
          {label}
      </Link>
  );
};


function Homepage(){
    return(
        <Container>
          <section id="landing" style={{textAlign: "center"}}>
            <div className="center" style={{position:"relative", zIndex:"9999999999"}}>
              <video autoplay="true" muted loop id="video" width="60%" style={{backgroundColor: "rgba(0,0,0,1) !important"}}>
                <source src="https://player.vimeo.com/external/403626863.hd.mp4?s=88038518a9f230d6df9e1c6767c3c250091f7313&profile_id=173&oauth2_token_id=57447761" type="video/mp4" />
              </video>
              <div  style={{position: "absolute"}}>
              <p className="sub-title animate__animated animate__fadeIn  animate__delay-2s">Welcome to Flex Consulting Solutions Inc.</p>
              <h1 className="color-title-header landing-title animate__animated animate__slideInDown">Flexible Solutions,</h1><h1 className="landing-title animate__animated animate__fadeIn animate__delay-1s color-title-header" id="bottom-title">Exceptional Quality.</h1>
              <Button variant="outline-light" className="apple_button animate__animated animate__fadeIn animate__delay-3s"><ButtonMailto label="Contact Us" mailto="mailto:info@flexconsulting.ca"/></Button>
              </div>
             </div>
          </section>
          {/* <div id="blob-container">
          {/* <div id="blob-container">
            <img src='./imgs/pink2.webp' className="blob" alt="simple blob"></img>
            <img src='./imgs/pink3.webp' className="blob" alt="another simple blob"></img>
          </div> */}
          <IntroCard title="Revolutionize Your Enterprise" introText="Flex Consulting Solutions Inc. is a software consulting company that provides a range of technology services aimed at improving the efficiency and productivity of businesses. With our solutions, businesses can streamline their workflows, reduce manual labor and human error, improve performance, and deliver optimal software experiences to their customers."/>
          <section id="services">
            <h1 className="section-header" style={{textAlign: "left"}}>Services</h1>
            <div id="services-container">
              <Card image="./imgs/Xu4dsHl.webp" w="100%" info={ServiceInfo["services"][0]} nameLink="white" bgColor="dimgrey" blendMode="difference"/>
              <Card image="./imgs/nuhfZJl.webp" info={ServiceInfo["services"][1]} nameLink="white" bgColor="lightSlateGrey" blendMode="darken"/>
              <Card image="./imgs/ydSoWd0.webp" w="100%" info={ServiceInfo["services"][2]} nameLink="white"/>

              <Card image="./imgs/ozolK4X.webp" w="100%" info={ServiceInfo["services"][3]} nameLink="white" bgColor="darkgray" blendMode="color-burn"/>
              <Card image="./imgs/DGozEPB.webp" w="100%" info={ServiceInfo["services"][4]} nameLink="white"/>
              <Card image="./imgs/pkeawyu.webp" w="100%" info={ServiceInfo["services"][5]} nameLink="white" bgColor="darkgray" blendMode="color-burn"/>
            </div>
          </section>
          <section id="testimonials">
            <h1 className="section-header" style={{textAlign: "right"}}>Testimonials</h1>
            <div id="services-container">
              <Card image="./imgs/dgq4lrj.webp" w="100%" info={ClientInfo["services"][0]} nameLink="white" bgColor="darkgrey" blendMode="multiply"/>
              <Card image="./imgs/GGILEzg.webp" w="100%"info={ClientInfo["services"][1]} nameLink="white" bgColor="darkgrey" blendMode="color-burn"/>
            </div>
          </section>
        </Container>
    );
}

export default Homepage;