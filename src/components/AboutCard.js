import "./styles/AboutCard.css";

function AboutCard(props){

    return(
        <div className="about-card">
            <p>{props.text}</p>
        </div>
    );
}

export default AboutCard;