import styles from './PageNotFound.module.css'
import { Link } from 'react-router-dom';

function PageNotFound() {
    return(
        <div className={styles.pageNotFound}>
            <div className={styles.pageNotFoundText404Title}>
                <span className={styles.text404}>404</span>

                <h1 className={styles.title}>
                    Oops! Page not found!
                </h1>

            </div>

            <p className={styles.paragrafh}>
                Is this what you were looking for? Please verify the address in the adress bar or click the link below to return to the previous page.
            </p>

            <Link className={styles.linkPreviousPage} to='/'>
                <div className={styles.backPage}>Previous Page</div>
            </Link>

        </div>
    )
}

export default PageNotFound
