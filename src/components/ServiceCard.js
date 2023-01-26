import "./styles/ServiceCard.css";

function WorkCard(props){
    return(
        <div className="service-card-container">
            <div className={`service-card background-${props.number}`}>
                <div className="service-card-text">
                    <h4 className="service-tag">Service</h4>
                    <h2 className="service-title">{props.service}</h2>
                    <h3 className="service-desc">{props.desc}</h3>
                </div>
            </div>
        </div>
    );
}

export default WorkCard;