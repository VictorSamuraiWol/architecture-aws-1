import styles from './Footer.module.css';
import image from '../../imgs/icone-wolverine-sem-fundo.png'
import { Link } from 'react-router-dom';
import Timer from './Timer';

function Footer(validateSound) {
    return(
        <div className={styles.footer}>
            <Timer validateSound={validateSound} />
            <img src={image} alt="icon wolverine" />
            <p>Created by Victor Cardoso. Feel free to connect on  
                <Link id='contactLink' to="https://www.linkedin.com/in/victor-cardoso-cloud-front/" target="_blank"> Linkedin.
                </Link>
            </p>
        </div>
    )
}

export default Footer;
