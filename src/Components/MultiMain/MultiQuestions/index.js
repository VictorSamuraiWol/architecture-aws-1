import styles from './MultiQuestions.module.css';

function MultiQuestions ({ multiQuestions }) {
    return(
        <h2 className={styles.multiQuestions} >{multiQuestions}</h2>
    )
}

export default MultiQuestions
