import './styles.css';
import { ReactComponent as InstagramIcon} from './instagram.svg';
import { ReactComponent as LinkedinIcon} from './linkedin.svg';
import { ReactComponent as YouTubeIcon} from './youtube.svg';

function Footer(){
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <br/>
           
            <div className="footer-icons">
                <a href="https://www.instagram.com/lucasm_ribeiro/?hl=pt-br" target="_new">
                    <InstagramIcon/>
                </a>

                <a href="https://www.linkedin.com/in/lucas-51ribeiro/" target="_new">
                    <LinkedinIcon/>
                </a>

                <a href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g" target="_new">
                    <YouTubeIcon/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;