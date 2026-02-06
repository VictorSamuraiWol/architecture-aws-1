import styles from './Footer.module.css'
import image from '../../imgs/icone-wolverine-sem-fundo.png'
import { Link } from 'react-router-dom'

function Footer() {
    return(
        <div className={styles.footer}>            
            <img src={image} alt="icon wolverine" />

            <p>Created by Victor Cardoso. Feel free to connect on  
                <Link id='contactLink' to="https://www.linkedin.com/in/victor-cardoso-cloud-front/" target="_blank"> Linkedin.
                </Link>
            </p>

        </div>
    )
}

export default Footer
