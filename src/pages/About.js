import Container from "react-bootstrap/Container";
import AboutCard from "../components/AboutCard";
import "./styles/About.css";

const AboutInfo = {
    "about": [
        {"text": "Flex Consulting Services was founded in 2023 with the goal of providing top-notch software consulting services to small and medium-sized businesses. Our team of experienced developers and consultants have a wide range of skills and expertise, and we pride ourselves on being able to deliver customized solutions that meet the unique needs of each of our clients.", "opt": "right-card"},
        {"text": "We pledge to understand the unique needs and goals of each client and to deliver solutions that are tailored to their specific circumstances. We believe that clear and regular communication is essential for the success of any project, that's why we will always keep our clients informed of our progress and any issues that may arise. We also understand that things can change quickly in business, and we're committed to working with our clients to adapt to any changes in their needs or goals.", "opt": "left-card"}
    ]
};
function About(){
    return(
        <Container>
            <section>
                <div className="center">
                    <h1 className="landing-title animate__animated animate__fadeInUp">About Us</h1>
                    <div className="about-sec animate__animated animate__fadeInLeft animate__delay-1s">
                        <h1 className="about-header">Our Story</h1>
                        <AboutCard text={AboutInfo["about"][0].text} opt={AboutInfo["about"][0].opt}/>
                    </div>
                    <div className="about-sec rev animate__animated animate__fadeInRight animate__delay-2s">
                        <AboutCard text={AboutInfo["about"][1].text} opt={AboutInfo["about"][1].opt}/>
                        <h1 className="about-header">Our Pledge</h1>
                    </div>
                </div>
            </section>
        </Container>
    );
}

export default About;