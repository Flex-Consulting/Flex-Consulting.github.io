import React from "react";
import "./styles/Card.css";

function Card(props){
    console.log(props);
    return(
        <div className="card" style={{background: `-webkit-linear-gradient(${props.color1}, ${props.color2})`}}>
            <p className="service-name" style={{color: `${props.nameLink}`}}>{props.info["name"]}</p>
            <h1 className="service-desc">{props.info["brief-desc"]}</h1>
            <a className="card-link" href={props.info["link-dest"]} style={{color: `${props.nameLink}`}}>{props.info["link-text"]}</a>
        </div>
    );
}

export default Card;