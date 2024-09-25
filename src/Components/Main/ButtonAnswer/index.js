import styles from './ButtonAnswer.module.css';

function ButtonAnswer({ setAnswerDisplay, setDescriptionDisplay, setAnswerMainDisplay, setDescriptionMainDisplay, answerDisplay, descriptionDisplay, answerMainDisplay, descriptionMainDisplay }) {

    function display() { 
        
        if (document.querySelector('#answerId').classList.contains(`${styles.visibleAnswer}`)) {
            answerDisplay && setAnswerDisplay(styles.invisible)
            descriptionDisplay && setDescriptionDisplay(styles.invisible)
            answerMainDisplay && setAnswerMainDisplay(styles.invisible)
            descriptionMainDisplay && setDescriptionMainDisplay((styles.invisible))

        } else {
            answerDisplay && setAnswerDisplay(styles.visibleAnswer)
            answerMainDisplay && setAnswerMainDisplay(styles.visibleAnswer)

        }

    }

    return(
        <button onClick={display} className={styles.button}>
            Answer
        </button>
    )
}

export default ButtonAnswer;
