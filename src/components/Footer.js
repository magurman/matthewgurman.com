import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons'
// import { faEnvelope } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import data from '../siteData.json'

const Footer = () => {

    const email = "mailto: " + data.email;

    return (
        <footer id="footer">
            <div id="footer-container">
                <a href={data.links.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa-footer" size ="2xl" icon={faGithub} /></a>
                <a href={data.links.linkedin} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa-footer" size ="2xl" icon={faLinkedin} /></a>
                <a href={data.links.spotify} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa-footer" size ="2xl" icon={faSpotify} /></a>
                <a href={email} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa-footer" size ="2xl" icon={faEnvelope}/></a>
            </div>
        </footer>
    )
}

export default Footer;