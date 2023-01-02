import React from "react";
import "./styles/ServiceCard.css";

function ServiceCard(props){
    console.log(props);
    return(
        <div className="card" style={{background: `-webkit-linear-gradient(${props.color1}, ${props.color2})`}}>
            <p className="service-name">{props.service_info["service-name"]}</p>
            <h1 className="service-desc">{props.service_info["brief-desc"]}</h1>
            <a className="card-link" href={props.service_info["link-dest"]}>{props.service_info["link-text"]}</a>
        </div>
    );
}

export default ServiceCard;