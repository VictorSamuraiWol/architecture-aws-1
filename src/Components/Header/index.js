import styles from './Header.module.css';
import image from '../../imgs/icon-start.png'
import { Link } from 'react-router-dom';
import NavigationItem from './NavigationItem';
import { GoPlus } from 'react-icons/go';

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
        </div>
    )

}

export default Header;
