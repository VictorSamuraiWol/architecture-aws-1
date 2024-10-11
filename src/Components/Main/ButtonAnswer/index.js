import styles from './ButtonAnswer.module.css';
import errorAudio from '../../../audios/errorAudio.mp3';
import correctAudio from '../../../audios/correctAudio.mp3';

function ButtonAnswer({ setAnswerDisplay, setDescriptionDisplay, setAnswerMainDisplay, setDescriptionMainDisplay, answerDisplay, descriptionDisplay, answerMainDisplay, descriptionMainDisplay, optionMain, validateAnswerMain, captureValue, setOptionColor, restartOptions, answer, optionValidate, optionInvalidate }) {

    function display() {  
        const answerId = document.querySelector('#answerId');

        if (answerId.classList.contains(`${styles.visibleAnswer}`)) {
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
        const wrongOptionClean = document.querySelectorAll('.option');
        const wrongOptionNextClean = document.querySelectorAll('.optionNext');

        for(let y=0; y < 5; y++) {
            if (validateAnswerMain && wrongOptionClean[y].classList.contains(styles.optionInvalidate)) {
                wrongOptionClean[y].classList.remove(styles.optionInvalidate)
            } else {}

        }

        for(let w=0; w < 5; w++) {
            if (restartOptions && wrongOptionNextClean[w].classList.contains(optionInvalidate)) {
                wrongOptionNextClean[w].classList.remove(optionInvalidate)
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
        const errorSound = new Audio(errorAudio);
        const correctSound = new Audio(correctAudio);

        validateAnswerMain && alertOption();
        validateAnswerMain && cleanOptions();        
        for(let i=0; i < 5; i++) {
            if (validateAnswerMain && `${Object.values(optionMain)[i]}`.includes(`${validateAnswerMain}`) && !(captureValue === '')) {
                //added validate class
                const correctOption = document.querySelectorAll('.option')[i];
                correctOption.classList.add(styles.optionValidate)
      
                //added invalide option class
                if (!(i === parseInt(captureValue)) && !(captureValue === '')) {

                    const wrongOption = document.querySelectorAll('.option')[parseInt(captureValue)];

                    wrongOption.classList.remove(styles.optionValidate)
                    wrongOption.classList.add(styles.optionInvalidate)

                    //play error audio
                    errorSound.play();
                } else {
                    //play correct audio
                    correctSound.play();
                }
            } else {}

        }

    }

    function validateAnswerPageNext() {
        const errorSound = new Audio(errorAudio);
        const correctSound = new Audio(correctAudio);

        restartOptions && alertOption();
        restartOptions && cleanOptions();        
        for(let i=0; i < 5; i++) {
            if (restartOptions && `${Object.values(restartOptions)[i]}`.includes(`${answer}`) && !(captureValue === '')) {
                //added validate class
                const correctOption = document.querySelectorAll('.optionNext')[i];
                correctOption.classList.add(optionValidate)

                //added invalide option class
                if (!(i === parseInt(captureValue)) && !(captureValue === '')) {

                    const wrongOptionNext = document.querySelectorAll('.optionNext')[parseInt(captureValue)];

                    wrongOptionNext.classList.remove(optionValidate)
                    wrongOptionNext.classList.add(optionInvalidate)

                    //play error audio
                    errorSound.play();
                } else {
                    //play correct audio
                    correctSound.play();
                }
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
