import styles from './Header.module.css';
import Timer from './Timer';
import image from '../../imgs/icon-start.png'
import { Link } from 'react-router-dom';

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
                        <li className={styles.link}>Create</li>
                    </Link>
                </ul>
            </nav>
            <Timer />
        </div>
    )

}

export default Header;
