import React from "react";
import "./styles/Card.css";

function Card(props){
    return(
        <div className="card" style={{backgroundImage: `url(${props.image})`, backgroundSize: `${props.w}`, backgroundRepeat: `no-repeat`}}>
            <p className="service-name" style={{color: `${props.nameLink}`}}>{props.info["name"]}</p>
            <div>
                <h1 className="service-desc">{props.info["brief-desc"]}</h1>
                <a className="card-link" href={props.info["link-dest"]} style={{color: `${props.nameLink}`}}>{props.info["link-text"]}</a>
            </div>
        </div>
    );
}

export default Card;