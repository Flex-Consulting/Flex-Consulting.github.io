import './styles/Footer.css';

const Locations = {
    "locations": ["Toronto", "Ottawa", "Guelph", "Kitchener", "Hamilton","London"]
};

const Pages = {
    "pages": ["Home", "Services", "Our Work", "About"]
};

function Footer(){
    return(
        <div id="main-footer">
            <div id="media">
                <div className="footer-sec">
                    <img src="./flex-footer.png" width="50" height="50" className="d-inline-block align-top image-space" alt="Flex Consulting Logo"/>
                    <div id="organize-name">
                        <p>Flex<br/>Consulting<br/>Services</p>
                    </div>
                </div>
                <div className='footer-sec'>
                    <img src="./linkedin-icon-18-256.png" width="50" height="50" className="d-inline-block align-top image-space" alt="Flex Consulting Logo"/>
                    <div id="organize-name">
                        <p>LinkedIn</p>
                    </div>
                </div>
            </div>
            {/* Locations */}
            
            <div className="footer-sub">
                <h4>Locations</h4>
                <div>
                    {Locations["locations"].map(function(object, i){
                        return <p className="footer-text-items" key={i}>{object}</p>;
                    })}
                </div>
            </div>
            <div className="footer-sub">
                <h4>Pages</h4>
                <div>
                    {Pages["pages"].map(function(object, i){
                        return <p className="footer-text-items"key={i}>{object}</p>;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Footer;