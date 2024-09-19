import styles from './ButtonAnswer.module.css';

function ButtonAnswer() {

    function display() {        
        const answerDisplay = document.querySelector('#answerId');
        const descriptionText = document.querySelector('#descriptionId')

        if (answerDisplay.classList.contains(`${styles.visible}`)) {
                answerDisplay.classList.remove(`${styles.visible}`)
                answerDisplay.setAttribute('style', 'visibility: hidden')
                descriptionText.setAttribute('style', 'visibility: hidden')
            } else {
                answerDisplay.classList.add(`${styles.visible}`)
                answerDisplay.setAttribute('style', 'visibility: visible')
            }
    }

    return(
        <button onClick={() => display()} className={styles.button}>
            Answer
        </button>
    )
}

export default ButtonAnswer;
