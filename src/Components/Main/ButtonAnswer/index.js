import styles from './ButtonAnswer.module.css';

function ButtonAnswer({ setAnswerDisplay, setDescriptionDisplay }) {

    function display() { 
        
        setAnswerDisplay(styles.visibleAnswer)
        setDescriptionDisplay(styles.visibleDescription)

    }

    return(
        <button onClick={display} className={styles.button}>
            Answer
        </button>
    )
}

export default ButtonAnswer;
