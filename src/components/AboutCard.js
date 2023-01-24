import "./styles/AboutCard.css";

function AboutCard(props){
    return(
        <div className={`about-card ${props.opt}`}>
            <p>{props.text}</p>
        </div>
    );
}

export default AboutCard;