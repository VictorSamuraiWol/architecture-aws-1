import styles from './ButtonAnswer.module.css';

function ButtonAnswer({ setAnswerDisplay, setDescriptionDisplay }) {

    function display() { 
        
        if (document.querySelector('#answerId').classList.contains(`${styles.visibleAnswer}`)) {
            setAnswerDisplay(styles.invisible)
            setDescriptionDisplay(styles.invisible)
        } else {
            setAnswerDisplay(styles.visibleAnswer)
        }

    }

    return(
        <button onClick={display} className={styles.button}>
            Answer
        </button>
    )
}

export default ButtonAnswer;
