import "./styles/ServiceCard.css";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ServiceCard(props){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    var bodyText = props.modalBody;
    var text_list = [];
    console.log(bodyText);
    bodyText.map(function(text, i){
        text_list[i] = text + '\n\n';
        return text_list;
    });
    return(
        <div className="service-card-container">
            <div className={`service-card service-card-front background-${props.number}`} style={{backgroundImage: `url(${props.bkImage})`, backgroundRepeat: "round", backgroundBlendMode: `${props.bkSetting}`, backgroundColor: `${props.imageColor}`}}>
                <div className="service-card-text">
                    <h4 className="service-tag">Service</h4>
                    <h2 className="service-title">{props.service}</h2>
                    <h3 className="service-desc-serv-card">{props.desc}</h3>
                </div>
                <div>
                    <img src={props.img} className={`service-card-image ${props.opt}`} alt={props.service}></img>
                </div>
            </div>
            <div className={`service-card service-card-back`}>
                <div className="service-card-text">
                    <h4 className="service-tag">Service</h4>
                    <h2 className="service-title" style={{"font-size":"xx-large"}}>{props.modalTitle}</h2>
                    <h3 className="service-desc-serv-card">{text_list}</h3>
                </div>
                <div>
                    <img src={props.img} className={`service-card-image ${props.opt}`} alt={props.service}></img>
                </div>
            </div>
        </div>
    );
}

{/* <div className="modal-container">
    <Button variant="primary" onClick={handleShow} className="service-modal-button">
        Read more
    </Button>
    <Modal show={show} onHide={handleClose} className="main-modal">
        <Modal.Header closeButton className="modal-header">
        <Modal.Title>{props.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ text_list }</Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        // {/* <Button variant="primary" onClick={handleClose}>
        //     Save Changes
        // </Button> 
        </Modal.Footer>
    </Modal>
</div> */}
export default ServiceCard;