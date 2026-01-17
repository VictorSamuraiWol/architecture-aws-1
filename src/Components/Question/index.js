import styles from './Question.module.css';

function Question({ question }) {
    return(     
        <h2 className={styles.question}>{question}</h2>
    )
}

export default Question
