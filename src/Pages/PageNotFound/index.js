import styles from './PageNotFound.module.css'
import { Link } from 'react-router-dom';

function PageNotFound() {
    return(
        <div className={styles.PaginaNaoEncontrada}>
            <div>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>
                    Oops! Page not found!
                </h1>
            </div>

            <p className={styles.paragrafo}>
                Is this what you were looking for? Please verify the address in the adress bar or click the link below to return to the previous page.
            </p>

            <Link to='/'>
                <div className={styles.backPage}>Previous Page</div>
            </Link>
        </div>
    )
}

export default PageNotFound;
