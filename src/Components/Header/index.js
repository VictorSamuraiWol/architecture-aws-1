import styles from './Header.module.css';
import Timer from './Timer';

function Header({ title, newQuestions, nextQuestions }) {
// console.log(newQuestions === undefined)
// console.log(newQuestions.length)
// console.log(nextQuestions)
// console.log(nextQuestions.length)
// console.log((Object.values(newQuestions).length > 0 ))

// (Object.values(newQuestions).length > 0 ) || 
    return(
        <div className={styles.header}>
            <h1>{title}</h1>
            {
                <Timer />
            }

            {(!newQuestions || newQuestions.length === 0) && (!nextQuestions || nextQuestions.length === 0) && 
                <h1>
                    It is necessary to mock an API on port 3001 to view the page contents.
                </h1>
            }
        </div>
    )

}

export default Header;
