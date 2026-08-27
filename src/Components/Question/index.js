import styles from './Question.module.css';

function Question({ question, questionNumber }) {

    return(     
        question && <h2 className={styles.question}>{`${questionNumber}) ${question}`}</h2>

    )
}

export default Question
