import styles from './ButtonAnswer.module.css';

function ButtonAnswer({ setAnswerDisplay, setDescriptionDisplay, setAnswerMainDisplay, setDescriptionMainDisplay, answerDisplay, descriptionDisplay, answerMainDisplay, descriptionMainDisplay, optionMain, validateAnswerMain, captureValue, setOptionColor, restartOptions, answer }) {

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
            if (validateAnswerMain && document.querySelectorAll('.option')[y].classList.contains(styles.optionInvalidate)) {
                document.querySelectorAll('.option')[y].classList.remove(styles.optionInvalidate)
            } else {}
        }

        for(let w=0; w < 5; w++) {
            if (restartOptions && document.querySelectorAll('.optionNext')[w].classList.contains(styles.optionInvalidate)) {
                document.querySelectorAll('.optionNext')[w].classList.remove(styles.optionInvalidate)
            } else {}
        }

    }

    function alertOption() {
        if (captureValue === '') {
            alert('Por favor, selecione alguma opção!')
            //clean answer
            answerMainDisplay && setAnswerMainDisplay(styles.invisible)
            answerDisplay && setAnswerDisplay(styles.invisible)
        } else {}

    }

    function validateAnswerPageMain() {
        validateAnswerMain && alertOption();
        validateAnswerMain && cleanOptions();        
        for(let i=0; i < 5; i++) {
            if (validateAnswerMain && `${Object.values(optionMain)[i]}`.includes(`${validateAnswerMain}`) && !(captureValue === '')) {
                //added validate class
                const correctOption = document.querySelectorAll('.option')[i];
                correctOption.classList.add(styles.optionValidate)

                //added invalide option class
                if (!(i === parseInt(captureValue)) && !(captureValue === '')) {
                    document.querySelectorAll('.option')[parseInt(captureValue)].classList.remove(styles.optionValidate)

                    document.querySelectorAll('.option')[parseInt(captureValue)].classList.add(styles.optionInvalidate)
                } else {}
            } else {}
        }

    }

    function validateAnswerPageNext() {
        restartOptions && alertOption();
        restartOptions && cleanOptions();
        for(let i=0; i < 5; i++) {
            if (restartOptions && `${Object.values(restartOptions)[i]}`.includes(`${answer}`) && !(captureValue === '')) {
                //added validate class
                const correctOption = document.querySelectorAll('.optionNext')[i];
                correctOption.classList.add(styles.optionValidate)

                //added invalide option class
                if (!(i === parseInt(captureValue)) && !(captureValue === '')) {
                    document.querySelectorAll('.optionNext')[parseInt(captureValue)].classList.remove(styles.optionValidate)

                    document.querySelectorAll('.optionNext')[parseInt(captureValue)].classList.add(styles.optionInvalidate)
                } else {}
            } else {}
        }

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
