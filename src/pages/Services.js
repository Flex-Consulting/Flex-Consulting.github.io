import Container from "react-bootstrap/Container";
import ServiceCard from "../components/ServiceCard";

const services = [
    {
        "header": "CI/CD - Continuous Integration and Continuous Delivery / Continuous Deployment",
        "desc": "CI/CD streamlines software development, allowing teams to quickly and efficiently build, test, and deploy code for faster, higher-quality products.",
        "colour": "#FFFFFF",
        "img": "https://i.imgur.com/uvgF5ml.png",
        "optClasses": '',
        "modalTile": "Revolutionizing software development: the key to keeping ahead of the competition 💡",
        "modalBody": [`Think about it like this: when you're building a new product, you don't want to wait until the end to test it and see if it works. That's a recipe for disaster. Instead, you want to test each piece as you go, making sure everything is working together seamlessly. 💫`,
        `That's what CI/CD does for software development. It automatically checks your code for errors as soon as it's pushed, and then deploys it to a test environment where it can be further tested. This way, you catch any issues early on, before they have a chance to cause problems down the line. 🔍 `,
        `And once your code is tested and proven to be working, the CD part comes in, it automatically deploys your code to production, so your customers can start using it right away. 💻`,
        `Imagine a world where cars are built one at a time, and only tested once they're finished. It would take forever to build a single car, and when you finally got it on the road, you might find out it doesn't work right. But with an assembly line, each part is tested as it's built, and the final product is ready to roll off the line and hit the road. 🛣️🚗`,
        `That's what CI/CD does for software development. It's like having an assembly line for your code, so you can build, test, and deploy faster and with more confidence. 🚀`]
    },
    {
        "header": "Automating Business Workflows", 
        "desc": "Automating business workflows eliminates manual labor and human error, allowing for faster and more efficient processes to improve overall productivity and customer satisfaction.",
        "colour": "#FFFFFF",
        "img": "https://i.imgur.com/8VzvkAC.png",
        "optClasses": 'globe' ,
        "modalTile": "Revolutionizing software development: the key to keeping ahead of the competition 💡",
        "modalBody": [`Think about it like this: when you're building a new product, you don't want to wait until the end to test it and see if it works. That's a recipe for disaster. Instead, you want to test each piece as you go, making sure everything is working together seamlessly.`,
        `That's what CI/CD does for software development. It automatically checks your code for errors as soon as it's pushed, and then deploys it to a test environment where it can be further tested. This way, you catch any issues early on, before they have a chance to cause problems down the line.`,
        `And once your code is tested and proven to be working, the CD part comes in, it automatically deploys your code to production, so your customers can start using it right away.`,
        `Imagine a world where cars are built one at a time, and only tested once they're finished. It would take forever to build a single car, and when you finally got it on the road, you might find out it doesn't work right. But with an assembly line, each part is tested as it's built, and the final product is ready to roll off the line and hit the road.`,
        `That's what CI/CD does for software development. It's like having an assembly line for your code, so you can build, test, and deploy faster and with more confidence.`]
    },
    {
        "header": "Microservices", 
        "desc": "Microservices break down monolithic systems into smaller, more manageable units for faster and more flexible development, deployment, and scalability.",
        "colour": "#FFFFFF",
        "img": "https://i.imgur.com/8VzvkAC.png",
        "optClasses": 'globe',
        "modalTile": "Revolutionizing software development: the key to keeping ahead of the competition 💡",
        "modalBody": [`Think about it like this: when you're building a new product, you don't want to wait until the end to test it and see if it works. That's a recipe for disaster. Instead, you want to test each piece as you go, making sure everything is working together seamlessly.`,
        `That's what CI/CD does for software development. It automatically checks your code for errors as soon as it's pushed, and then deploys it to a test environment where it can be further tested. This way, you catch any issues early on, before they have a chance to cause problems down the line.`,
        `And once your code is tested and proven to be working, the CD part comes in, it automatically deploys your code to production, so your customers can start using it right away.`,
        `Imagine a world where cars are built one at a time, and only tested once they're finished. It would take forever to build a single car, and when you finally got it on the road, you might find out it doesn't work right. But with an assembly line, each part is tested as it's built, and the final product is ready to roll off the line and hit the road.`,
        `That's what CI/CD does for software development. It's like having an assembly line for your code, so you can build, test, and deploy faster and with more confidence.`]
    },
    {
        "header": "Cloud Migration", 
        "desc": "Cloud migration allows for cost-effective, scalable and on-demand access to computing resources, enabling businesses to stay competitive and responsive to changing demands.",
        "colour": "#FFFFFF",
        "img": "https://i.imgur.com/8VzvkAC.png",
        "optClasses": 'globe',
        "modalTile": "Revolutionizing software development: the key to keeping ahead of the competition 💡",
        "modalBody": [`Think about it like this: when you're building a new product, you don't want to wait until the end to test it and see if it works. That's a recipe for disaster. Instead, you want to test each piece as you go, making sure everything is working together seamlessly.`,
        `That's what CI/CD does for software development. It automatically checks your code for errors as soon as it's pushed, and then deploys it to a test environment where it can be further tested. This way, you catch any issues early on, before they have a chance to cause problems down the line.`,
        `And once your code is tested and proven to be working, the CD part comes in, it automatically deploys your code to production, so your customers can start using it right away.`,
        `Imagine a world where cars are built one at a time, and only tested once they're finished. It would take forever to build a single car, and when you finally got it on the road, you might find out it doesn't work right. But with an assembly line, each part is tested as it's built, and the final product is ready to roll off the line and hit the road.`,
        `That's what CI/CD does for software development. It's like having an assembly line for your code, so you can build, test, and deploy faster and with more confidence.`]
    },
    {
        "header": "Website Development", 
        "desc": "Providing a seamless user experience and connecting businesses to their customers. Includes design, building, features, functionality, responsive design, e-commerce integration, SEO and ongoing maintenance and updates.",
        "colour": "#FFFFFF",
        "img": "https://i.imgur.com/8VzvkAC.png",
        "optClasses": 'globe',
        "modalTile": "Revolutionizing software development: the key to keeping ahead of the competition 💡",
        "modalBody": [`Think about it like this: when you're building a new product, you don't want to wait until the end to test it and see if it works. That's a recipe for disaster. Instead, you want to test each piece as you go, making sure everything is working together seamlessly.`,
        `That's what CI/CD does for software development. It automatically checks your code for errors as soon as it's pushed, and then deploys it to a test environment where it can be further tested. This way, you catch any issues early on, before they have a chance to cause problems down the line.`,
        `And once your code is tested and proven to be working, the CD part comes in, it automatically deploys your code to production, so your customers can start using it right away.`,
        `Imagine a world where cars are built one at a time, and only tested once they're finished. It would take forever to build a single car, and when you finally got it on the road, you might find out it doesn't work right. But with an assembly line, each part is tested as it's built, and the final product is ready to roll off the line and hit the road.`,
        `That's what CI/CD does for software development. It's like having an assembly line for your code, so you can build, test, and deploy faster and with more confidence.`]
    },
    {
        "header": "Third Service",
        "desc": "Bringing businesses into 2023 with company websites, or internal web portals. Or something by Mr.GPT",
        "colour": "#FFFFFF",
        "img": "https://i.imgur.com/8VzvkAC.png",
        "optClasses": 'globe',
        "modalTile": "Revolutionizing software development: the key to keeping ahead of the competition 💡",
        "modalBody": [`Think about it like this: when you're building a new product, you don't want to wait until the end to test it and see if it works. That's a recipe for disaster. Instead, you want to test each piece as you go, making sure everything is working together seamlessly.`,
        `That's what CI/CD does for software development. It automatically checks your code for errors as soon as it's pushed, and then deploys it to a test environment where it can be further tested. This way, you catch any issues early on, before they have a chance to cause problems down the line.`,
        `And once your code is tested and proven to be working, the CD part comes in, it automatically deploys your code to production, so your customers can start using it right away.`,
        `Imagine a world where cars are built one at a time, and only tested once they're finished. It would take forever to build a single car, and when you finally got it on the road, you might find out it doesn't work right. But with an assembly line, each part is tested as it's built, and the final product is ready to roll off the line and hit the road.`,
        `That's what CI/CD does for software development. It's like having an assembly line for your code, so you can build, test, and deploy faster and with more confidence.`]
    }
]

function Services(){
    return(
        <Container>
            <section>
                <div className="center" style={{marginBottom: `-100%`}}>
                    <h1 className="landing-title animate__animated animate__fadeInUp">Services</h1>
                    <div style={{marginTop: `15%`, width: `100%`}}>
                        {/* we can clean stuff like this up with a function */}
                        <ServiceCard service={services[0].header} desc={services[0].desc} number={1} img={services[0].img} opt={services[0].optClasses} modalTitle={services[0].modalTile} modalBody={services[0].modalBody}/>
                        <ServiceCard service={services[1].header} desc={services[1].desc} number={2} img={services[1].img} opt={services[1].optClasses} modalTitle={services[1].modalTile} modalBody={services[1].modalBody}/>
                        <ServiceCard service={services[2].header} desc={services[2].desc} number={3} img={services[2].img} opt={services[2].optClasses} modalTitle={services[2].modalTile} modalBody={services[2].modalBody}/>
                        <ServiceCard service={services[3].header} desc={services[3].desc} number={4} img={services[3].img} opt={services[3].optClasses} modalTitle={services[3].modalTile} modalBody={services[3].modalBody}/>
                        <ServiceCard service={services[4].header} desc={services[4].desc} number={5} img={services[4].img} opt={services[4].optClasses} modalTitle={services[4].modalTile} modalBody={services[4].modalBody}/>
                        <ServiceCard service={services[5].header} desc={services[5].desc} number={6} img={services[5].img} opt={services[5].optClasses} modalTitle={services[5].modalTile} modalBody={services[5].modalBody}/>
                    </div>
                </div>
            </section>
            <div style={{marginTop:"100%", color:"black"}}>Test</div>
        </Container>
    );
}

export default Services;