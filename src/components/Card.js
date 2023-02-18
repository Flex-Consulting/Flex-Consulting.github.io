import React from "react";
import "./styles/Card.scss";

// Took out the line below from the p tag because I thought it was distracting. We can always add
// Something there later if we'd like.
// props.info["name"]

function Card(props){
    return(
        <div className="card" style={{backgroundImage: `url(${props.image})`, backgroundSize: `${props.w}`, backgroundRepeat: `no-repeat`, backgroundColor: `${props.bgColor}`, backgroundBlendMode: `${props.blendMode}`}}>
            <p className="service-name" style={{color: `${props.nameLink}`}}>{}</p> 
            <div>
                <h1 className="service-desc">{props.info["brief-desc"]}</h1>
                <a className="card-link" href={props.info["link-dest"]} style={{color: `${props.nameLink}`}}>{props.info["link-text"]}</a>
            </div>
        </div>
    );
}

export default Card;