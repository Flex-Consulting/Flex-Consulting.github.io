import Container from "react-bootstrap/Container";
import ServiceCard from "../components/ServiceCard";

const services = [
    {
        "header": "CI/CD - Continuous Integration and Continuous Delivery",
        "desc": "CI/CD streamlines software development, allowing teams to quickly and efficiently build, test, and deploy code for faster, higher-quality products.",
        "colour": "#FFFFFF",
        "bkImage": "https://cdn.pixabay.com/photo/2014/09/21/19/51/overhead-conveyor-455464_960_720.jpg",
        "img": "https://i.imgur.com/uvgF5ml.png",
        "optClasses": '',
        "modalTile": "Revolutionizing software development: the key to keeping ahead of the competition 💡",
        "modalBody": [`CI/CD streamlines software development by automatically checking code for errors and deploying it to a test environment for further testing. This helps catch any issues early, ensuring a seamless final product. The process is like having an assembly line for code, allowing for faster and more confident building, testing, and deployment.`]
    },
    {
        "header": "Automating Business Workflows", 
        "desc": "Automating business workflows eliminates manual labor and human error, allowing for faster and more efficient processes to improve overall productivity and customer satisfaction.",
        "colour": "#FFFFFF",
        "bkImage": "https://cdn.pixabay.com/photo/2020/03/06/18/04/tech-4907759_960_720.jpg",
        "img": "https://i.imgur.com/8VzvkAC.png",
        "optClasses": 'globe' ,
        "modalTile": "Automating Business Workflows: A Vision of Efficiency and Productivity 🔧",
        "modalBody": [`Imagine a world where all the tedious, repetitive tasks in your business are handled seamlessly and efficiently by technology. This is the world of automating business workflows.`,
        `With the power of artificial intelligence and machine learning, we can now automate everything from data entry and customer service, to invoicing and inventory management. This not only saves time and resources, but it also eliminates the risk of human error and improves the overall accuracy of your business operations.`,
        `Think of it as having a team of virtual assistants working around the clock to take care of all the little things, so you and your team can focus on the big picture. It's like having your own personal Jarvis, working tirelessly to make your business run like a well-oiled machine.`,
        `By automating your business workflows, you'll be able to make better use of your time, resources and money, and ultimately, drive more revenue and growth for your business. It's a no-brainer for any company looking to stay competitive and reach new heights.`]
    },
    {
        "header": "Microservices", 
        "desc": "Microservices break down monolithic systems into smaller, more manageable units for faster and more flexible development, deployment, and scalability.",
        "colour": "#FFFFFF",
        "bkImage" : "https://cdn.pixabay.com/photo/2019/02/23/00/23/plexiglas-4014712_960_720.jpg",
        "img": "https://i.imgur.com/8VzvkAC.png",
        "optClasses": 'globe',
        "modalTile": "The Benefits of Microservices in Software Development: A Jony Ive Approach 🧰",
        "modalBody": [`When it comes to software development, Microservices approach is like building a collection of small, specialized machines, each with a specific task. These machines can work independently or together to create a cohesive, powerful system.`,
                    `Think of having a team of experts, each responsible for a specific part of the product, working together to create a seamless experience. By breaking down a large, monolithic system into smaller, independent services, we can create a more flexible, scalable and maintainable product. 🤝`,
                `It's like having your own personal Jony Ive, designing and building each component with precision and care, to create the perfect product for your customers.`,
            `With Microservices, we can quickly and easily update, test and deploy new features, without disrupting the entire system. This allows for faster development and increased agility, giving your business a competitive edge in today's fast-paced digital world.`,
        `In short, Microservices allows for a more efficient and effective way to build and maintain software, ultimately resulting in a better product and experience for your customers.`]
    },
    {
        "header": "Cloud Migration", 
        "desc": "Cloud migration allows for cost-effective, scalable and on-demand access to computing resources, enabling businesses to stay competitive and responsive to changing demands.",
        "colour": "#FFFFFF",
        "bkImage": "./imgs/n2l75B0.webp",
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
        "bkImage": "https://cdn.pixabay.com/photo/2014/02/13/07/28/settings-265131_960_720.jpg",
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
        "header": "Performance Optimization",
        "desc": "Performance optimization is essential for delivering optimal software experiences and reducing costs. Our software consulting firm provides expert performance optimization services for web applications, mobile apps, and microservices. Our team uses best practices and the latest tools to help clients improve performance, reduce page load time, and optimize database queries.",
        "colour": "#FFFFFF",
        "bkImage": "./imgs/AvEd32K.webp",
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
                        <ServiceCard service={services[0].header} desc={services[0].desc} number={1} img={services[0].img} opt={services[0].optClasses} modalTitle={services[0].modalTile} modalBody={services[0].modalBody} bkImage={services[0].bkImage} imageColor="darkgoldenrod" bkSetting="multiply"/>
                        <ServiceCard service={services[1].header} desc={services[1].desc} number={2} img={services[1].img} opt={services[1].optClasses} modalTitle={services[1].modalTile} modalBody={services[1].modalBody} bkImage={services[1].bkImage} imageColor="green" bkSetting="multiply"/>
                        <ServiceCard service={services[2].header} desc={services[2].desc} number={3} img={services[2].img} opt={services[2].optClasses} modalTitle={services[2].modalTile} modalBody={services[2].modalBody} bkImage={services[2].bkImage} imageColor="darkcyan" bkSetting="multiply"/>
                        <ServiceCard service={services[3].header} desc={services[3].desc} number={4} img={services[3].img} opt={services[3].optClasses} modalTitle={services[3].modalTile} modalBody={services[3].modalBody} bkImage={services[3].bkImage} imageColor="darkgray" bkSetting="multiply"/>
                        <ServiceCard service={services[4].header} desc={services[4].desc} number={5} img={services[4].img} opt={services[4].optClasses} modalTitle={services[4].modalTile} modalBody={services[4].modalBody} bkImage={services[4].bkImage} imageColor="darkgray" bkSetting="multiply"/>
                        <ServiceCard service={services[5].header} desc={services[5].desc} number={6} img={services[5].img} opt={services[5].optClasses} modalTitle={services[5].modalTile} modalBody={services[5].modalBody} bkImage={services[5].bkImage} imageColor= "deeppink" bkSetting="darken"/>
                    </div>
                </div>
            </section>
            <div style={{marginTop:"100%", width:"50px", height:"20px"}}></div>
        </Container>
    );
}

export default Services;