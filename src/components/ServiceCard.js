import "./styles/ServiceCard.css";

function WorkCard(props){
    return(
        <div className="service-card-container">
            <div className={`service-card background-${props.number}`}>
                <div className="service-card-text">
                    <h4 className="service-tag">Service</h4>
                    <h2 className="service-title">{props.service}</h2>
                    <h3 className="service-desc-serv-card">{props.desc}</h3>
                </div>
                <div>
                    <img src={props.img} className={`service-card-image ${props.opt}`} alt={props.service}></img>
                </div>
            </div>
        </div>
    );
}

export default WorkCard;