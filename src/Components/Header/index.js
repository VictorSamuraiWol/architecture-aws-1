import styles from './Header.module.css'
import image from '../../imgs/icon-start.png'
import NavigationItem from './NavigationItem'
import soundClick from '../../audios/clickAudio.mp3'
import none from '../../imgs/profiles/none.png'
import profileVictor from '../../imgs/profiles/profile-victor.png'
import ButtonDefault from '../ButtonDefault'
import { Link, useOutletContext } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx"
import { useContext, useState } from 'react'
import { DataContext } from '../DataContext'

function Header() {

    const audioClick = new Audio(soundClick) // armazena o som 'soundClick'

    const { staticListUsers, listUsers } = useContext(DataContext)

    const { setLoginValidate, setActivateNavigateDefault, nameUser, setNameUser, truncatedText, mute, activePageFormsQuestionsOptions } = useOutletContext()

    const [activeLinksHamburguer, setActiveLinkesHamburguer] = useState(false)

    // habilitar ou não os links de navegação ao clicar quando o menu hamburguer está ativado na resolução até 580px
    function ableLinks() {
        setActiveLinkesHamburguer(!activeLinksHamburguer)

    }

    const sound = () => { // ativa o som 'audioClick'
        mute === false && audioClick.play()
    }

    const [imagesDescriptions] = useState({
        none: none,
        profileVictor: profileVictor

    })

    function signOut() {
        setLoginValidate(false)
        setNameUser('')
        setActivateNavigateDefault(true)

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

            {/* barra de navegação */}
            <nav className={styles.navigationBar}>
                {!activePageFormsQuestionsOptions && 
                    <RxHamburgerMenu
                        onClick={ableLinks} 
                        className={styles.hamburger} 
                    />
                }

                <ul className={activeLinksHamburguer ? 
                                styles.navBarHamburguer
                                : 
                                styles.navBar}
                >
                    {!activePageFormsQuestionsOptions &&
                        <Link
                            to='/page-info'
                            className={activeLinksHamburguer ? styles.linksNavigationHamburguer: styles.linksNavigation}
                        >
                            <NavigationItem 
                                onClick={sound}
                                itemName='info'
                            />
                        </Link> 
                    }
                                   
                </ul>

            </nav>

            {/* perfil do usuário logado */}
            {[...staticListUsers, ...listUsers]
                .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
                .map(user => (
            <div
                key={user.name}
                className={styles.containerLoginSignin}
            >
                <div className={styles.containerLoginSigninImageName}>
                {user.imageProfile && <img 
                    src={imagesDescriptions[user.imageProfile]}
                    className={styles.containerLoginSigninImageNameImg}
                    alt='img perfil'
                />}
                    <p className={styles.containerLoginSigninImageNameLongText}>{truncatedText(user.name, 6)}</p>

                </div>

                <Link className={styles.linkContainerButtonSignout} to='/'>
                    <div className={styles.containerButtonSignout}>
                        <ButtonDefault
                            onClick={signOut}
                            buttonName='SIGN OUT'
                            specificStyleButton={styles.specificStylesSignoutButton}
                        />

                    </div>
                    
                </Link>

            </div>))}
            
        </div>
    )

}

export default Header
