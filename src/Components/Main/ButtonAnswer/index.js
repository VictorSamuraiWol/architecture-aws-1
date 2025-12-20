import styles from './ButtonAnswer.module.css';
import errorAudio from '../../../audios/errorAudio.mp3';
import correctAudio from '../../../audios/correctAudio.mp3';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import ButtonDefault from '../../ButtonDefault';
import Animation from '../../Animation';

function ButtonAnswer({ 
    answerDisplay, setAnswerDisplay, setDescriptionDisplay, captureValue, optionValidate, optionInvalidate, answer, optionColor, optionColorMulti, captureValueMulti, optNum1, optNum2, optNum3, optNum4, optNum5, setQuestionAnswerButtonNextMain, setQuestionAnswerButtonNextMulti, optionMap, multiOptionMap
}) {
    
    // pegando a variável booleana para habilitar ou desabilitar o som usando 'useOutletContext()' da página base
    const { validateSound, numCorrectOption, setNumCorrectOption, numIncorrectOption, setNumIncorrectOption } = useOutletContext();

    // variável para saber se foi ou não respondida a questão
    const [questionAnswer, setQuestionAnswer] = useState(false);

    // variável usada na animação fogos de artifício
    const [correct, setCorrect] = useState(false);
    
    // habilitar a animação fogos de artifício ao acertar
    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setCorrect(true);
            setTimeout(() => setCorrect(false), 2500); // Remove partículas após 2,5s            
        }
    };

    function display() {

        setAnswerDisplay(styles.visibleAnswer)

    }

    function cleanOptions() {        
        const wrongOptionNextClean = document.querySelectorAll('.optionNext');
        const wrongOptionNextMultiClean = document.querySelectorAll('.optionNextMulti');

        // limpar a estilização de respostas erradas das opções desmarcadas da página main
        if (optionMap) {
            for(let w=0; w < optionMap.length; w++) {
                if (optionMap && wrongOptionNextClean[w]?.classList.contains(optionInvalidate) && (w !== parseInt(captureValue))) {
                    wrongOptionNextClean[w].classList.remove(optionInvalidate)
                    wrongOptionNextClean[w].classList.add(optionColor)
                }
            }
        }

        // limpar a estilização de respostas erradas das opções desmarcadas da página multi
        if (multiOptionMap) {
            for(let z=0; z < multiOptionMap.length; z++) {
                if (multiOptionMap && wrongOptionNextMultiClean[z]?.classList.contains(optionInvalidate) && (z !== parseInt(captureValueMulti.sort()[0])) && (z !== parseInt(captureValueMulti.sort()[1]))) {
                    wrongOptionNextMultiClean[z].classList.remove(optionInvalidate)
                    wrongOptionNextMultiClean[z].classList.add(optionColorMulti)
                }
            }
        }

    }

    function alertOption() {
        if (captureValue === '') {
            // alertar quando os campos estiverem vazios
            alert('Por favor, selecione alguma opção!')
            answerDisplay && setAnswerDisplay(styles.invisible)
        }

    }

    function clearAnswer() {
        setAnswerDisplay(styles.invisible)
        setDescriptionDisplay(styles.invisible)

    }

    // validação da página NewPageMain, a resposta correta será sempre uma comparação do valor do campo resposta (answer) com os valores dos campos das opções (opção 1, 2, 3, 4 e 5), caso seja igual, ela ficará destacada na validação
    function validateAnswerPageMain() {
        const errorSound = new Audio(errorAudio);
        const correctSound = new Audio(correctAudio);
        // passar somente os valores que não forem vazios de todas as opções para um array antes da validação
        const convertObjArray = [optionMap[optNum1], optionMap[optNum2], optionMap[optNum3], optionMap[optNum4], optionMap[optNum5]]

        // observação 1: poderia usar a captura do elemento, por exemplo no evento 'onClick' para pegar o valor e depois comparar com a resposta correta, como a seguir: e.target.parentElement.childNodes[1].innerText.includes(`${answer}`) em vez de usar o for para iterar sobre todas as opções, se preferir.
        if(questionAnswer === true) {
            // para manter a resposta sempre visível
            answerDisplay && setAnswerDisplay(styles.visibleAnswer)
            
            // alerta avisando para passar para a próxima questão
            alert('Ops!!! Já foi respondida está questão, por favor, passe para a próxima questão.')

        } else {

            for(let i=0; i < convertObjArray.length; i++) {
                if (optionMap && (convertObjArray[i] === answer) && (captureValue !== '')) { // para a opção correta ser exatamente o valor da resposta

                    // adicionando a validação na opção correta
                    const correctOption = document.querySelectorAll('.optionNext')[i];
                    correctOption.classList.add(optionValidate)
                    correctOption.classList.remove(optionColor)

                    // adicionando a invalidação nas opções incorretas
                    if (i !== parseInt(captureValue) && captureValue !== '') {
                        const wrongOptionNext = document.querySelectorAll('.optionNext')[parseInt(captureValue)];

                        wrongOptionNext.classList.add(optionInvalidate)
                        wrongOptionNext.classList.remove(optionColor)

                        // play error audio
                        validateSound === true && errorSound.play(); 

                        // questionAnswer se torna true ao responder
                        setQuestionAnswer(true)

                        // questionAnswerButtonNextMain se torna true ao responder
                        setQuestionAnswerButtonNextMain(true)

                        setNumIncorrectOption(numIncorrectOption + 1)

                    } else {
                        // play correct audio
                        validateSound === true && correctSound.play();

                        // questionAnswer se torna true ao responder
                        setQuestionAnswer(true)

                        // questionAnswerButtonNext se torna true ao responder
                        setQuestionAnswerButtonNextMain(true)

                        setNumCorrectOption(numCorrectOption + 1)

                        // função da animação fogos de artifício
                        handleAnswer(true)

                    }
                }
            }

        }

        alertOption()

        // para a função limpar as opções ser chamada se for a primeira vez que marcou as opções
        questionAnswer === false && cleanOptions()

    }

    // validação da página PageMulti, a resposta correta será sempre as opções 1 e 2 do backend, elas ficarão destacadas na validação
    function validateAnswerPageMulti() {
        const errorSound = new Audio(errorAudio);
        const correctSound = new Audio(correctAudio);
        const captureOptionsNextMulti = document.querySelectorAll('.optionNextMulti')      
        const captureOptionsNextMultiInput = document.querySelectorAll('.optionNextMulti input')
        const captureOptionsNextMultiP = document.querySelectorAll('.optionNextMulti p')
    
        if(questionAnswer === true) {           
            answerDisplay && setAnswerDisplay(styles.visibleAnswer) // para manter a resposta sempre visível
            
            // alerta avisando para passar para a próxima questão
            alert('Ops!!! Já foi respondida está questão, por favor, passe para a próxima questão.')
        } else {

            const checkedValues = [...captureOptionsNextMultiInput]
                .filter(input => input.checked)
                .map(input => input.value)

            const checkedValuesP = [...captureOptionsNextMultiP]
            for(let i=0; i<checkedValues.length; i++) { 

                if (checkedValues.length === 2 && checkedValuesP[checkedValues[i]].innerText.includes('true')) { // verificando quais opções tem a palavra 'true' para validação

                    captureOptionsNextMulti[checkedValues[i]].classList.add(optionValidate)
                    captureOptionsNextMulti[checkedValues[i]].classList.remove(optionColorMulti)

                    if (checkedValuesP[checkedValues[0]].innerText.includes('true') && checkedValuesP[checkedValues[1]].innerText.includes('true')) {   
                        validateSound === true && correctSound.play(); // som só irá tocar quando estiver tudo correto
                       
                        setQuestionAnswer(true) // questionAnswer se torna true ao responder
                       
                        setQuestionAnswerButtonNextMulti(true) // questionAnswerButtonNext se torna true ao responder

                        setNumCorrectOption(numCorrectOption + 1)
                      
                        handleAnswer(true) // função da animação fogos de artifício

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
                    validateSound === true && errorSound.play();                    
                    setQuestionAnswer(true) // questionAnswer se torna true ao responder
                   
                    setQuestionAnswerButtonNextMulti(true) // questionAnswerButtonNext se torna true ao responder

                    setNumIncorrectOption(numIncorrectOption + 1)

                }

            }
            // alerta para marcar as opções quando não tiver nenhuma ou mais do que duas marcadas e ser ativada somente na página multi       
            if (captureOptionsNextMulti.length > 0 && ((checkedValues.length === 0) || (checkedValues.length < 2) || (checkedValues.length > 2))) {

                alert('Por favor, marque 2 opções!')
                clearAnswer()

            }

        }

        // para a função limpar as opções ser chamada se for a primeira vez que marcou as opções
        questionAnswer === false && cleanOptions()
   
    }

    function displayAndValidate () {

        display()
        optionMap && validateAnswerPageMain()
        multiOptionMap && validateAnswerPageMulti()

    }

    return(
        <>
            <ButtonDefault 
                onClick={displayAndValidate} 
                specificStyleButton={styles.buttonAnswer} 
                buttonName='Answer' 

            />

            <Animation correct={correct} />
        </>
    )

}

export default ButtonAnswer
