import styles from './Header.module.css'
import image from '../../imgs/icon-start.png'
import Timer from './Timer'
import NavigationItem from './NavigationItem'
import soundClick from '../../audios/clickAudio.mp3'
import { Link, useOutletContext } from 'react-router-dom'
import { GoPlus } from 'react-icons/go'
import { RxHamburgerMenu } from "react-icons/rx"

function Header({ title }) {

    const audioClick = new Audio(soundClick) // armazena o som 'soundClick'

    const { requestData, activePageFormsQuestionsOptions, mute } = useOutletContext()

    const allLinks = document.querySelectorAll('.ulHeader')

    // habilitar ou não os links de navegação ao clicar quando o menu hamburguer está ativado na resolução até 580px
    function ableLinks() {
        if (allLinks[0]?.classList.contains(`${styles.ulHeader}`)) {
            allLinks[0]?.classList.remove(`${styles.ulHeader}`)
            allLinks[0]?.classList.add(`${styles.ulAble}`)            

        } else {
            allLinks[0]?.classList.add(`${styles.ulHeader}`)
            allLinks[0]?.classList.remove(`${styles.ulAble}`)

        }

    }

    const sound = () => { // ativa o som 'audioClick'
        mute === false && audioClick.play()
    }

    return(
        <div className={styles.header}>
            <Link 
                to='/'
                className={styles.linkHeader} 
            >
                <img
                    onClick={sound}
                    className={styles.iconStart} 
                    src={image}
                    alt='icon-start' 
                />
            </Link>

            <h1 className={styles.headerTitle}>{title}</h1>

            <nav>
                <RxHamburgerMenu 
                    onClick={ableLinks} 
                    className={styles.hamburger} 
                /> 

                <ul className={`ulHeader ${styles.ulHeader}`}>
                    <Link 
                        to='/'
                        className={styles.linksNavigation} 
                    >
                        <NavigationItem
                            onClick={sound}
                            itemName='Home' 
                        />
                    </Link>

                    <Link
                        to='/page-forms-new-questions-options'
                        className={styles.linksNavigation}
                    >
                        <NavigationItem 
                            onClick={sound}
                            component={<GoPlus />} 
                            itemName='Create' 
                        />
                    </Link>                    
                </ul>
            </nav>
            
            {/* Cronômetro no componente header para renderizar toda vez que mudar de página, permitindo assim reiniciar a contagem do tempo */}
            {requestData && activePageFormsQuestionsOptions === false && <Timer />}
            
        </div>
    )

}

export default Header
