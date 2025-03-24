import styles from './Header.module.css';
import image from '../../imgs/icon-start.png'
import { Link, useOutletContext } from 'react-router-dom';
import NavigationItem from './NavigationItem';
import { GoPlus } from 'react-icons/go';
import Timer from './Timer';
import { RxHamburgerMenu } from "react-icons/rx";

function Header({ title }) {

    const { activePageFormsQuestionsOptions } = useOutletContext()
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

    return(
        <div className={styles.header}>
            <Link 
                to='/'
                className={styles.linkHeader} 
            >
                <img className={styles.iconStart} src={image} alt='icon-start' />
            </Link>
            <h1>{title}</h1>
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
                            itemName='Home' 
                        />
                    </Link>
                    <Link
                        to='/page-forms-new-questions-options'
                        className={styles.linksNavigation}
                    >
                        <NavigationItem 
                            component={<GoPlus />} 
                            itemName='Create' 
                        />
                    </Link>

                </ul>
            </nav>
            {/* Cronômetro no componente header para renderizar toda vez que mudar de página, permitindo assim reiniciar a contagem do tempo */}
            {activePageFormsQuestionsOptions === false && <Timer />}
        </div>
    )

}

export default Header;
