import Container from "react-bootstrap/Container";
import ServiceCard from "../components/ServiceCard";

const services = [
    {
        "header": "CI/CD - Continuous Integration and Continuous Delivery / Continuous Deployment",
        "desc": "CI/CD is a software development practice that combines continuous integration and continuous deployment. It enables faster delivery of new products and features, and increases software stability and reliability.",
        "colour": "#FFFFFF",
        "img": "https://i.imgur.com/uvgF5ml.png",
        "optClasses": ''
    },
    {
        "header": "Automating Business Workflows", 
        "desc": "Using computer programs to automate repetitive and complex tasks, increasing efficiency and reducing human error. This can improve productivity, speed up processes and can also provide insights and data to make better decisions. In short, it helps businesses to streamline their operations and make better use of their resources.",
        "colour": "#FFFFFF",
        "img": "https://i.imgur.com/8VzvkAC.png",
        "optClasses": 'globe'
    },
    {
        "header": "Microservices", 
        "desc": "Microservices are a way to build software by breaking it down into small, independent services. It allows for faster development, deployment, and scaling, leading to more efficient and flexible software systems for businesses.",
        "colour": "#FFFFFF",
        "img": "https://i.imgur.com/8VzvkAC.png",
        "optClasses": 'globe'
    },
    {
        "header": "Cloud Transition Services", 
        "desc": "Moving data, apps and operations to a cloud-based infrastructure for improved scalability, reliability and cost-efficiency. It can be achieved through different methods like re-hosting, re-platforming, re-architecting, re-purchasing and refactoring.",
        "colour": "#FFFFFF",
        "img": "https://i.imgur.com/8VzvkAC.png",
        "optClasses": 'globe'
    },
    {
        "header": "Website Development", 
        "desc": "Creating and maintaining a website for a business. It includes design, building, features, functionality, responsive design, e-commerce integration, SEO and ongoing maintenance and updates.",
        "colour": "#FFFFFF",
        "img": "https://i.imgur.com/8VzvkAC.png",
        "optClasses": 'globe'
    },
    {
        "header": "Third Service",
        "desc": "Bringing businesses into 2023 with company websites, or internal web portals. Or something by Mr.GPT",
        "colour": "#FFFFFF",
        "img": "https://i.imgur.com/8VzvkAC.png",
        "optClasses": 'globe'
    }
]

function Services(){
    return(
        <Container>
            <section>
                <div className="center" style={{marginBottom: `-100%`}}>
                    <h1 className="landing-title animate__animated animate__fadeInUp">Services</h1>
                    <div style={{marginTop: `15%`, width: `100%`}}>
                        <ServiceCard service={services[0].header} desc={services[0].desc} number={1} img={services[0].img} opt={services[0].optClasses}/>
                        <ServiceCard service={services[1].header} desc={services[1].desc} number={2} img={services[1].img} opt={services[1].optClasses}/>
                        <ServiceCard service={services[2].header} desc={services[2].desc} number={3} img={services[2].img} opt={services[2].optClasses}/>
                        <ServiceCard service={services[3].header} desc={services[3].desc} number={4} img={services[3].img} opt={services[3].optClasses}/>
                        <ServiceCard service={services[4].header} desc={services[4].desc} number={5} img={services[4].img} opt={services[4].optClasses}/>
                        <ServiceCard service={services[5].header} desc={services[5].desc} number={6} img={services[5].img} opt={services[5].optClasses}/>
                    </div>
                </div>
            </section>
            <div style={{marginTop:"100%", color:"black"}}>Test</div>
        </Container>
    );
}

export default Services;