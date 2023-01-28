import "./styles/ServiceCard.css";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ServiceCard(props){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    var bodyText = props.modalBody;
    console.log(bodyText);
    bodyText.map(function(text, i){
        bodyText[i] = text + '\n';
        return 0;
    });
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
                <div className="modal-container">
                    <Button variant="primary" onClick={handleShow} className="service-modal-button">
                        Read more
                    </Button>
                    <Modal show={show} onHide={handleClose} className="main-modal">
                        <Modal.Header closeButton className="modal-header">
                        <Modal.Title>{props.modalTitle}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{ bodyText}</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        {/* <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button> */}
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;