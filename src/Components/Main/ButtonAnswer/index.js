import styles from './ButtonAnswer.module.css';

function ButtonAnswer({ setAnswerDisplay, setDescriptionDisplay, setAnswerMainDisplay, setDescriptionMainDisplay, answerDisplay, descriptionDisplay, answerMainDisplay, descriptionMainDisplay, optionMain, validateAnswerMain, captureValue, setOptionColor }) {

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

    function cleanOptions() {
        for(let y=0; y < 5; y++) {
            if (document.querySelectorAll('.option')[y].classList.contains(styles.optionInvalidate)) {
                document.querySelectorAll('.option')[y].classList.remove(styles.optionInvalidate)
            } else {}
        }

    }

    function alertOption() {
        if (captureValue === '') {
            alert('Por favor, selecione alguma opção!')
            //clean answer
            setAnswerMainDisplay(styles.invisible)
        } else {}
    }

    function validateAnswerPageMain() {
        alertOption();
        cleanOptions();
        for(let i=0; i < 5; i++) {
            if (`${Object.values(optionMain)[i]}`.includes(`${validateAnswerMain}`) && !(captureValue === '')) {
                //added validate class
                const correctOption = document.querySelectorAll('.option')[i];
                correctOption.classList.add(styles.optionValidate)

                //added invalide option class
                if (!(i === parseInt(captureValue)) && !(captureValue === '')) {
                    //added invalide option class
                    document.querySelectorAll('.option')[parseInt(captureValue)].classList.remove(styles.optionValidate)

                    document.querySelectorAll('.option')[parseInt(captureValue)].classList.add(styles.optionInvalidate)
                } else {}
            }
        }

    }

    function validateAnswerPageNext() {
        //incomplete
    }


    function displayAndValidate () {
        display()
        validateAnswerPageMain()
        validateAnswerPageNext()

    }

    return(
        <button onClick={displayAndValidate} className={styles.button}>
            Answer
        </button>
    )
}

export default ButtonAnswer;
