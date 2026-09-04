import styles from './Footer.module.css'
import image from '../../imgs/icone-wolverine-sem-fundo.png'
import Timer from '../Timer'
import { Link, useOutletContext } from 'react-router-dom'

function Footer() {
    const { activePageFormsQuestionsOptions, activePageDemo, activePageMain, activePageMulti, activeZeroImgMain, activeZeroImgMulti,activePageThreeMulti } = useOutletContext()

    return(
        <div className={activePageFormsQuestionsOptions ? styles.footerForms : styles.footer}>
            {/* Cronômetro no componente header para renderizar toda vez que mudar de página, permitindo assim reiniciar a contagem do tempo */}
            {((activePageFormsQuestionsOptions === false && ((activePageMain && !activeZeroImgMain) || (activePageMulti && !activeZeroImgMulti))) || activePageDemo || activePageThreeMulti) && <Timer />}
            
            <div className={styles.imgText}>
                <img src={image} alt="icon wolverine" />

                <p>Created by Victor Cardoso. Feel free to connect on  
                    <Link id='contactLink' to="https://www.linkedin.com/in/victor-cardoso-cloud-front/" target="_blank"> Linkedin.</Link>
                </p>
            </div>            

        </div>
    )
}

export default Footer
