import styles from './ButtonAnswer.module.css';
import errorAudio from '../../../audios/errorAudio.mp3';
import correctAudio from '../../../audios/correctAudio.mp3';

function ButtonAnswer({ answerDisplay, setAnswerDisplay, descriptionDisplay, setDescriptionDisplay, captureValue, optionValidate, optionInvalidate, answer, optionColor, optionColorMulti, nextOptions, multiOptions, captureValueMulti, optNum1, optNum2, optNum3, optNum4, optNum5 }) {

    function display() {  
        const answerId = document.querySelector('#answerId');

        if (answerId.classList.contains(`${styles.visibleAnswer}`)) {
            answerDisplay && setAnswerDisplay(styles.invisible)
            descriptionDisplay && setDescriptionDisplay(styles.invisible)

        } else {
            answerDisplay && setAnswerDisplay(styles.visibleAnswer)

        }
    }

    function cleanOptions() {        
        const wrongOptionNextClean = document.querySelectorAll('.optionNext');
        const wrongOptionNextMultiClean = document.querySelectorAll('.optionNextMulti');

        //limpar a estilização de respostas erradas das opções desmarcadas da página main
        for(let w=0; w < 5; w++) {
            if (nextOptions && wrongOptionNextClean[w].classList.contains(optionInvalidate) && (w !== parseInt(captureValue))) {
                wrongOptionNextClean[w].classList.remove(optionInvalidate)
                wrongOptionNextClean[w].classList.add(optionColor)
            } else {}
        }

        //limpar a estilização de respostas erradas das opções desmarcadas da página multi
        for(let z=0; z < 5; z++) {
            if (multiOptions && wrongOptionNextMultiClean[z].classList.contains(optionInvalidate) && (z !== parseInt(captureValueMulti.sort()[0])) && (z !== parseInt(captureValueMulti.sort()[1]))) {
                wrongOptionNextMultiClean[z].classList.remove(optionInvalidate)
                wrongOptionNextMultiClean[z].classList.add(optionColorMulti)
            } else {}
        }

    }

    function alertOption() {
        if (captureValue === '') {
            alert('Por favor, selecione alguma opção!')
            //clean answer
            answerDisplay && setAnswerDisplay(styles.invisible)
        } else {}

    }

    function clearAnswer() {
        setAnswerDisplay(styles.invisible)
        setDescriptionDisplay(styles.invisible)

    }

    function validateAnswerPageMain() {
        const errorSound = new Audio(errorAudio);
        const correctSound = new Audio(correctAudio);
        const convertObjArray = [Object.values(nextOptions)[optNum1], Object.values(nextOptions)[optNum2], Object.values(nextOptions)[optNum3], Object.values(nextOptions)[optNum4], Object.values(nextOptions)[optNum5]]
console.log(convertObjArray, 61)
        for(let i=0; i < 5; i++) {
            if (nextOptions && `${convertObjArray[i]}`.includes(`${answer}`) && captureValue !== '') {
                //added validate class
                const correctOption = document.querySelectorAll('.optionNext')[i];
                correctOption.classList.remove(optionColor)
                correctOption.classList.add(optionValidate)

                //added invalide option class
                if (i !== parseInt(captureValue) && captureValue !== '') {
                    const wrongOptionNext = document.querySelectorAll('.optionNext')[parseInt(captureValue)];

                    wrongOptionNext.classList.remove(optionColor)
                    // wrongOptionNext.classList.remove(optionValidate)
                    wrongOptionNext.classList.add(optionInvalidate)

                    //play error audio
                    errorSound.play();                   
                
                } else {
                    //play correct audio
                    correctSound.play();
                }
            } else {}

        }
        alertOption()
        cleanOptions()

    }

    function validateAnswerPageMulti() {
        const errorSound = new Audio(errorAudio);
        const correctSound = new Audio(correctAudio);
        const captureOptionsNextMulti = document.querySelectorAll('.optionNextMulti')      
        const captureOptionsNextMultiInput = document.querySelectorAll('.optionNextMulti input')
        const captureOptionsNextMultiP = document.querySelectorAll('.optionNextMulti p')

        const checkedValues = [...captureOptionsNextMultiInput]
            .filter(input => input.checked)
            .map(input => input.value)

        const checkedValuesP = [...captureOptionsNextMultiP]
        for(let i=0; i<checkedValues.length; i++) { 

            if (checkedValues.length === 2 && checkedValuesP[checkedValues[i]].innerText.includes('true')) {

                captureOptionsNextMulti[checkedValues[i]].classList.add(optionValidate)
                captureOptionsNextMulti[checkedValues[i]].classList.remove(optionColorMulti)

                if (checkedValuesP[checkedValues[0]].innerText.includes('true') && checkedValuesP[checkedValues[1]].innerText.includes('true')) {
                    // som só irá tocar quando estiver tudo correto
                    correctSound.play();
                }

            } else if (checkedValues.length === 2 && checkedValuesP[checkedValues[i]].innerText.includes('true') === false) { 

                captureOptionsNextMulti[checkedValues[i]].classList.add(optionInvalidate)
                captureOptionsNextMulti[checkedValues[i]].classList.remove(optionColorMulti)

                for(let i=0; i<checkedValuesP.length; i++) {
                    if (checkedValuesP[i].innerText.includes('true')) {
                        captureOptionsNextMulti[i].classList.add(optionValidate)
                        captureOptionsNextMulti[i].classList.remove(optionColorMulti)                    
                    }
                }            
                errorSound.play();

            } else if (checkedValues.length < 2) {
                alert('Por favor, marque 2 opções!')
                clearAnswer()

            } else if (checkedValues.length > 2) {
                alert('Por favor, marque apenas 2 opções!')
                clearAnswer()

            } else if (checkedValues.length === 0) {
                alert('Por favor, marque 2 opções!')
                clearAnswer()

            } else {
                console.log('Há algo errado, por favor atualize e recomece a questão!')

            }
        }
        // alerta para marcar as opções quando não tiver nenhuma marcada e ser ativada somente na página multi  
        if (captureOptionsNextMulti.length > 0 && checkedValues.length === 0) {
            alert('Por favor, marque 2 opções!')
            clearAnswer()  

        }        
        cleanOptions()
   
    }

    function displayAndValidate () {
        display()
        nextOptions && validateAnswerPageMain()
        multiOptions && validateAnswerPageMulti()

    }

    return(
        <button onClick={displayAndValidate} className={styles.button}>
            Answer
        </button>
    )

}

export default ButtonAnswer
