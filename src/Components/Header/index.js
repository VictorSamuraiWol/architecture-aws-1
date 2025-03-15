import styles from './Header.module.css';
import image from '../../imgs/icon-start.png'
import { Link } from 'react-router-dom';
import { GoPlus } from "react-icons/go";

function Header({ title }) {
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
                <ul>
                    <Link 
                        to='/'
                        className={styles.linksNavigation} 
                    >
                        <li className={styles.link}><GoPlus />Create</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )

}

export default Header;
