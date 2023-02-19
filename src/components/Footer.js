import './styles/Footer.css';
import { BiLinkExternal } from 'react-icons/bi';

const FooterData = {
    "locations": ["Toronto", "Ottawa", "Guelph", "Kitchener", "Hamilton","London"],
    "contact": ["2185 Regional Rd 42", "Bowmanville, ON","L1C0W9"]
};

const Pages = {"Home": '/', "Services": '/services', "Our Work": '/our-work', "About": '/about'};

function Footer(){
    var counter = 0;
    return(
        <div className='container' id="main-footer">
            <div id="media">
                <div className="footer-sec">
                    <img src="./imgs/flex-footer.webp" className="flex-footer-logo d-inline-block align-top image-space" alt="Flex Consulting Logo"/>
                    <div id="organize-name">
                        <p>Flex<br/>Consulting<br/>Services</p>
                    </div>
                </div>
                <a className='footer-sec footer-link' href="https://www.linkedin.com/company/flex-consulting-services" target="_blank" rel="noreferrer">
                    <img src="./imgs/linkedin-icon-18-256.webp" className="linkedin-footer-logo d-inline-block align-top image-space" alt="Flex Consulting Logo"/>
                    <div id="organize-name">
                        <p className='linkedin-footer-text'>LinkedIn </p><BiLinkExternal/>
                    </div>
                </a>
            </div>
            {/* FooterData */}

            <div className="footer-sub">
                <h1 className='footer-mod-headers'>Contact Us</h1>
                <div id="locations-container">
                    <p className="footer-text-items"><a href="mailto:info@flexconsulting.ca">info@flexconsulting.ca</a></p>
                    {FooterData["contact"].map(function(object, i){
                        return <p className="footer-text-items" key={i}>{object}</p>;
                    })}
                </div>
            </div>

            <div className="footer-sub">
                <h1 className='footer-mod-headers'>Locations</h1>
                <div id="locations-container">
                    {FooterData["locations"].map(function(object, i){
                        return <p className="footer-text-items" key={i}>{object}</p>;
                    })}
                </div>
            </div>
            <div className="footer-sub">
                <h1 className='footer-mod-headers'>Pages</h1>
                <div className='page-a-tags'>
                    {Object.entries(Pages).map(function([key, value]){
                        counter = counter + 1;
                        return <a className="footer-text-items" href={value} key={counter}>{key}</a>;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Footer;