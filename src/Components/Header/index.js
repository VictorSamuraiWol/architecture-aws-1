import styles from './Header.module.css'
import image from '../../imgs/icon-start.png'
import NavigationItem from './NavigationItem'
import soundClick from '../../audios/clickAudio.mp3'
import none from '../../imgs/profiles/none.png'
import profileVictor from '../../imgs/profiles/profile-victor.png'
import ButtonDefault from '../ButtonDefault'
import { Link, useOutletContext } from 'react-router-dom'
import { GoPlus } from 'react-icons/go'
import { RxHamburgerMenu } from "react-icons/rx"
import { useContext, useState } from 'react'
import { DataContext } from '../DataContext'

function Header() {

    const audioClick = new Audio(soundClick) // armazena o som 'soundClick'

    const { listUsers } = useContext(DataContext)

    const { setLoginValidate, nameUser, setNameUser, truncatedText, mute } = useOutletContext()

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

    const [imagesDescriptions] = useState({
        none: none,
        profileVictor: profileVictor

    })

    function signOut() {
        setLoginValidate(false)
        setNameUser('')
        window.location.reload()

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
            <nav>
                <RxHamburgerMenu 
                    onClick={ableLinks} 
                    className={styles.hamburger} 
                /> 

                <ul className={`ulHeader ${styles.ulHeader}`}>
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

            {/* perfil do usuário logado */}
            {listUsers
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
