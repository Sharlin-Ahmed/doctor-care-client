import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const about = [
        {name: "Dental Care" , link: "/emergency"},
        {name: "Teeth Deseases" , link: "/checkup"},
        {name: "Branch" , link: "/personal-treatment"},
        {name: "Contact" , link: "/tooth-extract"},
        {name: "Query" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "KandirPar - 32/A Kazi Nazrul Road" , link: "//google.com/map"},
        {name: "Care Home" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Oral Case" , link: "/emergency"},
        {name: "Oral Diseases" , link: "/checkup"},
        {name: "Treatment" , link: "/personal-treatment"},
        {name: "Extraction" , link: "/tooth-extract"},
        {name: "Appointment" , link: "/checkup"}
    ]
    const services = [
        {name: "Teeth Whitening" , link: "/emergency"},
        {name: "Scaling" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Regular Check Up" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both text-white">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"About"} menuItems={about}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-2">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+880 999-666-444</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;