import "./styles/WorkCard.css";

function WorkCard(props){
    console.log(props.LorR);
    var header_pos = "";
    if (props.LorR === "work-left"){
        header_pos = "l-align";
    }
    else{
        header_pos = "r-align";
    }
    return(
        <div className="work-card-container">
            <h1 className={`work-header ${header_pos}`}>{props.header}</h1>
            <div className="main-work-card" style={{backgroundImage: `url(${props.img})`}}>
                <div className={`work-card-text ${props.LorR}`}>
                    <div className={`${props.ops}`}>
                        <h2 className="work-subhead">{props.subhead}</h2>
                        <h3 className="desc-text">{props.desc}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkCard;