import styles from './Header.module.css';
import Timer from './Timer';

function Header({ title, nextQuestions, multiQuestions }) {

    return(
        <div className={styles.header}>
            <h1>{title}</h1>
            { nextQuestions && 
                <Timer />
            }

            {(!nextQuestions || nextQuestions.length === 0) && (!nextQuestions || nextQuestions.length === 0) && (!multiQuestions || multiQuestions.length === 0) && 
                <h1>
                    It is necessary to mock an API on port 3001 to view the page contents.
                </h1>
            }
        </div>
    )

}

export default Header;
