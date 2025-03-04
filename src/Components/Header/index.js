import styles from './Header.module.css';
import Timer from './Timer';

function Header({ title }) {
    return(
        <div className={styles.header}>
            <h1>{title}</h1>
            <Timer />
        </div>
    )

}

export default Header;
