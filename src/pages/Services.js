import Container from "react-bootstrap/Container";
import ServiceCard from "../components/ServiceCard";

const services = [
    {
        "header": "CI/CD - Continuous Integration and Continuous Delivery",
        "desc": "CI/CD streamlines software development, allowing teams to quickly and efficiently build, test, and deploy code for faster, higher-quality products.",
        "colour": "#FFFFFF",
        "bkImage": "./imgs/overhead-conveyor-455464_960_720.webp",
        "img": "https://i.imgur.com/uvgF5ml.png",
        "modalTile": "Revolutionizing software development: the key to keeping ahead of the competition 💡",
        "modalBody": [`CI/CD streamlines software development by automatically checking code for errors and deploying it to a test environment for further testing. This helps catch any issues early, ensuring a seamless final product. The process is like having an assembly line for code, allowing for faster and more confident building, testing, and deployment.`]
    },
    {
        "header": "Automating Business Workflows", 
        "desc": "Automating business workflows eliminates manual labor and human error, allowing for faster and more efficient processes to improve overall productivity and customer satisfaction.",
        "colour": "#FFFFFF",
        "bkImage": "./imgs/tech-4907759_960_720.webp",
        "img": "https://i.imgur.com/8VzvkAC.png",
        "modalTile": "Automating Business Workflows: A Vision of Efficiency and Productivity 🔧",
        "modalBody": [`Automation of business workflows, powered by AI and machine learning, saves time and resources while improving accuracy by seamlessly handling tasks from data entry to customer service, invoicing, and inventory management. This allows businesses to focus on the big picture while virtual assistants take care of smaller tasks, driving revenue and growth. It's a must-have for staying competitive.`]
    },
    {
        "header": "Microservices", 
        "desc": "Microservices break down monolithic systems into smaller, more manageable units for faster and more flexible development, deployment, and scalability.",
        "colour": "#FFFFFF",
        "bkImage" : "./imgs/plexiglas-4014712_960_720.webp",
        "img": "https://i.imgur.com/8VzvkAC.png",
        "modalTile": "The Benefits of Microservices in Software Development: A Jony Ive Approach 🧰",
        "modalBody": [`Microservices in software development is like building a collection of small, specialized machines to create a flexible and maintainable product. This approach allows for faster development, increased agility, and the ability to update and deploy new features without disrupting the entire system. Microservices result in a better product and experience for customers, making it an efficient and effective way to build and maintain software, and a competitive edge in today's digital world.`]
    },
    {
        "header": "Cloud Migration", 
        "desc": "Cloud migration allows for cost-effective, scalable and on-demand access to computing resources, enabling businesses to stay competitive and responsive to changing demands.",
        "colour": "#FFFFFF",
        "bkImage": "./imgs/n2l75B0.webp",
        "img": "https://i.imgur.com/8VzvkAC.png",
        "modalTile": "Embrace the Future: How Cloud Migration Can Skyrocket Your Business and Boost Productivity 🌤️",
        "modalBody": [`Cloud migration is the process of moving digital assets, applications, and data from on-premise infrastructure to the cloud. The benefits of cloud migration include cost savings, increased flexibility, scalability, and improved data security. However, the process also presents challenges such as data integration, application compatibility, and potential downtime during the transition. A well-planned and executed cloud migration strategy is crucial for minimizing these challenges and ensuring a successful transition to the cloud.`]
    },
    {
        "header": "Website Development", 
        "desc": "Providing a seamless user experience and connecting businesses to their customers. Includes design, building, features, functionality, responsive design, e-commerce integration, SEO and ongoing maintenance and updates.",
        "colour": "#FFFFFF",
        "bkImage": "./imgs/settings-265131_960_720.webp",
        "img": "https://i.imgur.com/8VzvkAC.png",
        "modalTile": "Revolutionizing Digital Presence: Discover the Art and Science of Our Website Development 🎨",
        "modalBody": [`Experience the Art of Digital Creativity: Our software consulting company specializes in crafting bespoke websites that combine form and function seamlessly. By leveraging cutting-edge technologies and design principles, we create intuitive and visually stunning websites that are tailored to your unique business needs. From conceptualization to deployment, our team of experts will work closely with you to bring your digital vision to life.`]
    },
    {
        "header": "Performance Optimization",
        "desc": "Performance optimization is essential for delivering optimal software experiences and reducing costs. Our software consulting firm provides expert performance optimization services for web applications, mobile apps, and microservices. Our team uses best practices and the latest tools to help clients improve performance, reduce page load time, and optimize database queries.",
        "colour": "#FFFFFF",
        "bkImage": "./imgs/AvEd32K.webp",
        "img": "https://i.imgur.com/8VzvkAC.png",
        "modalTile": "Breaking the Speed Barrier: Performance Optimization Solutions to Accelerate Your Business 🏎️💨",
        "modalBody": [`We leverage cutting-edge technologies to fine-tune your digital systems for maximum speed and efficiency. Our team of experts work tirelessly to identify and eliminate bottlenecks, optimize code, and streamline operations to deliver a seamless and fast user experience. Whether it's web applications, mobile apps or cloud infrastructure, our performance optimization solutions are designed to take your business to the next level.`]
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
                        <ServiceCard service={services[0].header} desc={services[0].desc} number={1} img={services[0].img} modalTitle={services[0].modalTile} modalBody={services[0].modalBody} bkImage={services[0].bkImage} imageColor="darkgoldenrod" bkSetting="multiply" nameIcon="Globe"/>
                        <ServiceCard service={services[1].header} desc={services[1].desc} number={2} img={services[1].img} modalTitle={services[1].modalTile} modalBody={services[1].modalBody} bkImage={services[1].bkImage} imageColor="green" bkSetting="multiply" nameIcon="Cog"/>
                        <ServiceCard service={services[2].header} desc={services[2].desc} number={3} img={services[2].img} modalTitle={services[2].modalTile} modalBody={services[2].modalBody} bkImage={services[2].bkImage} imageColor="darkcyan" bkSetting="multiply" nameIcon="Micro"/>
                        <ServiceCard service={services[3].header} desc={services[3].desc} number={4} img={services[3].img} modalTitle={services[3].modalTile} modalBody={services[3].modalBody} bkImage={services[3].bkImage} imageColor="darkgray" bkSetting="multiply" nameIcon="Cloud"/>
                        <ServiceCard service={services[4].header} desc={services[4].desc} number={5} img={services[4].img} modalTitle={services[4].modalTile} modalBody={services[4].modalBody} bkImage={services[4].bkImage} imageColor="darkgray" bkSetting="multiply" nameIcon="Click"/>
                        <ServiceCard service={services[5].header} desc={services[5].desc} number={6} img={services[5].img} modalTitle={services[5].modalTile} modalBody={services[5].modalBody} bkImage={services[5].bkImage} imageColor= "deeppink" bkSetting="darken" nameIcon="Speed"/>
                    </div>
                </div>
            </section>
            <div style={{marginTop:"100%", width:"50px", height:"20px"}}></div>
        </Container>
    );
}

export default Services;