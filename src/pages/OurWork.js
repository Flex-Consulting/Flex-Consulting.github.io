import Container from "react-bootstrap/Container";
import WorkCard from "../components/WorkCard";

const WorkInfo = {
    "work": [
        {"header": "Global Burden of Animal Diseases", "subhead": "Website Solutions", "desc": "Web dashboards for visualizing research data", "LorR": "work-left", "img":"https://i.imgur.com/E6rUPqZ.png", "ops": "inner-work-text"},
        {"header": "Going Ductless Ltd.", "subhead": "Website Solutions", "desc": "Company website", "LorR": "work-right", "img": "https://i.imgur.com/m8xctMx.png", "ops": "none"},
        {"header": "TN Consulting", "subhead": "Software Solutions", "desc": "Automated content delivery through chat bots", "LorR": "work-left", "img": "https://i.imgur.com/SxS77xt.png", "ops": "inner-work-text"}
    ]
};

function OurWork(){
    return(
        <Container>
            <section>
                <div className="center" style={{marginBottom: `-100%`}}>
                    <h1 className="landing-title animate__animated animate__fadeInUp">Our Work</h1>
                    <div style={{marginTop: `15%`, width: `100%`}}>
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