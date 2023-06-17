import Container from "react-bootstrap/Container";
import WorkCard from "../components/WorkCard";
import IntroCard from "../components/IntroCard";

const WorkInfo = {
    "work": [
        {"header": "Global Burden of Animal Diseases", "subhead": "Website Solutions", "desc": "Web dashboards for visualizing research data", "LorR": "work-left", "img":"./imgs/E6rUPqZ.webp", "ops": "inner-work-text"},
        {"header": "Going Ductless Ltd.", "subhead": "Website Solutions", "desc": "Company website", "LorR": "work-right", "img": "./imgs/m8xctMx.webp", "ops": "none"},
        {"header": "TN Consulting", "subhead": "Software Solutions", "desc": "Automated content delivery through chat bots", "LorR": "work-left", "img": "./imgs/SxS77xt.webp", "ops": "inner-work-text"}
    ]
};

function OurWork(){

    const ourWorkIntro = "With a focus on delivering excellence, our seasoned professionals combine industry knowledge with a strategic mindset to address complex challenges. Explore our case studies and success stories, highlighting our diverse portfolio of work in transforming organizations, optimizing processes, and implementing cutting-edge technologies. At Flex Consulting Solutions Inc., we are passionate about collaboration, innovation, and driving sustainable growth. Partner with us to embark on a journey of success together."

    return(
        <Container>
            <section>
                <div className="center" style={{marginBottom: `-100%`}}>
                    <h1 className="landing-title animate__animated animate__fadeInUp">Our Work</h1>
                    <div style={{marginTop: '30%'}} className="animate__animated animate__fadeInUp">
                        <IntroCard clsName="diff-top-margin" title="Unlocking Success: Exploring Our Impactful Work" introText={ourWorkIntro}/>
                    </div>
                    <div style={{width: `100%`}}>
                        <WorkCard header={WorkInfo["work"][0].header} subhead={WorkInfo["work"][0].subhead} desc={WorkInfo["work"][0].desc} LorR={WorkInfo["work"][0].LorR} img={WorkInfo["work"][0].img} ops={WorkInfo["work"][0].ops}/>
                        <WorkCard header={WorkInfo["work"][1].header} subhead={WorkInfo["work"][1].subhead} desc={WorkInfo["work"][1].desc} LorR={WorkInfo["work"][1].LorR} img={WorkInfo["work"][1].img} ops={WorkInfo["work"][1].ops}/>
                        <WorkCard header={WorkInfo["work"][2].header} subhead={WorkInfo["work"][2].subhead} desc={WorkInfo["work"][2].desc} LorR={WorkInfo["work"][2].LorR} img={WorkInfo["work"][2].img} ops={WorkInfo["work"][2].ops}/>
                    </div>
                </div>
                <div style={{marginTop:"100%", width:"50px", height:"20px"}}></div>
            </section>
        </Container>
    );
}

export default OurWork;