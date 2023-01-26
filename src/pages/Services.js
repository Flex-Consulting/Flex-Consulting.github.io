import Container from "react-bootstrap/Container";
import ServiceCard from "../components/ServiceCard";

const services = [
    {
        "header": "Software Development",
        "desc": "Leveraging tailored software to improve the efficiency and output of businesses. Or something else by chatgpt.",
        "colour": "#FFFFFF"
    },
    {
        "header": "Website Development", 
        "desc": "Bringing businesses into 2023 with company websites, or internal web portals. Or something by Mr.GPT",
        "colour": "#FFFFFF"
    },
    {
        "header": "Third Service",
        "desc": "Bringing businesses into 2023 with company websites, or internal web portals. Or something by Mr.GPT",
        "colour": "#FFFFFF"
    }
]

function Services(){
    return(
        <Container>
            <section>
                <div className="center" style={{marginBottom: `-100%`}}>
                    <h1 className="landing-title animate__animated animate__fadeInUp">Services</h1>
                    <div style={{marginTop: `15%`, width: `100%`}}>
                        <ServiceCard service={services[0].header} desc={services[0].desc} number={1}/>
                        <ServiceCard service={services[1].header} desc={services[1].desc} number={2}/>
                        <ServiceCard service={services[2].header} desc={services[2].desc} number={3}/>
                    </div>
                </div>
            </section>
            <div style={{marginTop:"100%", color:"black"}}>Test</div>
        </Container>
    );
}

export default Services;