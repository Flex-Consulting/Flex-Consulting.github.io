import React from "react";
import "./styles/IntroCard.scss";

function IntroCard(props){
    return(
        <div className={`main-intro-card-container ${props.clsName}`}>
            <h1 className="section-header">{props.title}</h1>
            <div className="pink-card">
                <p>{props.introText}</p>
            </div>
        </div>
    );
}

export default IntroCard;