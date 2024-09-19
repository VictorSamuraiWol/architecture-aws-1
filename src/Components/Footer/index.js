import styles from './Footer.module.css';
import image from '../../imgs/icone-wolverine-sem-fundo.png'

function Footer() {
    return(
        <div className={styles.footer}>
            <img src={image} alt="icon wolverine" />
            <p>Desenvolvido por Victor Cardoso. Entre em contato pelo <a href="https://www.linkedin.com/in/victor-cardoso-cloud-front/" target="_blank" rel='noreferrer'>Linkedin.</a></p>
        </div>
    )
}

export default Footer;
