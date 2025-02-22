import styles from './ButtonAnswer.module.css';
import errorAudio from '../../../audios/errorAudio.mp3';
import correctAudio from '../../../audios/correctAudio.mp3';
import { useState } from 'react';

function ButtonAnswer({ setAnswerDisplay, setDescriptionDisplay, setAnswerMainDisplay, setDescriptionMainDisplay, answerDisplay, descriptionDisplay, answerMainDisplay, descriptionMainDisplay, optionMain, validateAnswerMain, captureValue, setOptionColor, restartOptions, answer, optionValidate, optionInvalidate, captureMultiOptionTag, setCaptureMultiOptionTag, listAnswer, optionColorMulti, setOptionColorMulti }) {

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

    //ATENÇÃO DEPOIS AO TIRAR O PAGE MAIN E DEIXAR O PAGE NEXT E PAGE MULTI, VERIFICAR SE É NECESSÁRIO CONTINUAR OU NÃO COM OS STYLES: styles.optionValidate E styles.optionInvalidate DESTE CSS, POIS O optionValidate E O optionInvalidate está sendo usado do css da PAGE NEXT E PAGE MULTI

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

// -------------------------------------------------------------- 
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
                console.log(captureOptionsNextMulti[i], 174)
                console.log(checkedValues[i], 175)

                for(let i=0; i<checkedValuesP.length; i++) {
                    if (checkedValuesP[i].innerText.includes('true')) {
                        captureOptionsNextMulti[i].classList.add(optionValidate)
                        captureOptionsNextMulti[i].classList.remove(optionColorMulti)                    
                    }
                }
            
                errorSound.play();

            } else if (checkedValues.length < 2) {
                alert('Por favor, marque 2 opções!')
            } else if (checkedValues.length > 2) {
                alert('Por favor, marque 2 opções!')
            } else if (checkedValues.length === 0) {
                alert('Por favor, marque 2 opções!') 
            } else {
                console.log('Há algo errado, por favor atualize e recomece a questão!')
            }
        }
        //alerta para marcar as opções quando não tiver nenhuma marcada e ser ativada somente na página multi  
        captureOptionsNextMulti.length > 0 && checkedValues.length === 0 && alert('Por favor, marque 2 opções!')
    
    }
// --------------------------------------------------------------



    function displayAndValidate () {
        display()
        validateAnswerPageMain()
        validateAnswerPageNext()
        validateAnswerPageMulti()

    }

    return(
        <button onClick={displayAndValidate} className={styles.button}>
            Answer
        </button>
    )

}

export default ButtonAnswer
