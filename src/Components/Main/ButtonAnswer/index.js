import styles from './ButtonAnswer.module.css';
import errorAudio from '../../../audios/errorAudio.mp3';
import correctAudio from '../../../audios/correctAudio.mp3';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import ButtonDefault from '../../ButtonDefault';
import Animation from '../../Animation';
import PopupCheckAlternativeAnswer from '../../PopupCheckAlternativeAnswer';

function ButtonAnswer({ 
    answerDisplay, setAnswerDisplay, setDescriptionDisplay, captureValue, optionValidate, optionInvalidate, answer, 
    optionColor, optionColorMulti, captureValueMulti, optNum1, optNum2, optNum3, optNum4, optNum5, setQuestionAnswerButtonNextMain, 
    setQuestionAnswerButtonNextMulti, optionMap, multiOptionMap, activePopupRepeatedAlternativesMain, setActivePopupRepeatedAlternativesMain, 
    activePopupRepeatedAlternativesMultiMain, setActivePopupRepeatedAlternativesMultiMain, numberQuestion
}) {
    
    // chamando algumas variáveis e as funções 'repeatedAlternativesDefault' e 'checkAlternativeAnswerDefault' através do 'useOutletContext' criada na PageBase
    const { validateSound, numCorrectOption, setNumCorrectOption, numIncorrectOption, setNumIncorrectOption, repeatedAlternativesDefault, checkAlternativeAnswerDefault } = useOutletContext()

    // variável para saber se foi ou não respondida a questão
    const [questionAnswer, setQuestionAnswer] = useState(false)

    // variável usada na animação fogos de artifício
    const [correct, setCorrect] = useState(false)

    // ativa o componente PopupCheckAlternativeAnswer no ButtonAnswer
    const [activePopupCheckAlternativeAnswerButtonAnswerMain, setActivePopupCheckAlternativeAnswerButtonAnswerMain] = useState(false)

    // ativa o componente PopupCheckAlternativeAnswer no ButtonAnswer
    const [activePopupCheckAlternativeAnswerButtonAnswerMulti, setActivePopupCheckAlternativeAnswerButtonAnswerMulti] = useState(false)
    
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

    function alertOption() { 
        if (optionMap && captureValue === '') { // alertar quando as alternativas estiverem todas desmarcadas na opção única            
            alert('Por favor, selecione alguma opção!') 
            answerDisplay && setAnswerDisplay(styles.invisible)
        } else if ((multiOptionMap && captureValueMulti.length < 2) || (multiOptionMap && captureValueMulti.length > 2)) { // alertar quando menos de 2 alternativas ou mais de 2 alternativas estiverem marcadas na opção múltipla
            alert('Por favor, selecione as duas opções!') 
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
        
        if (checkAlternativeAnswerDefault(optionMap, multiOptionMap, answer) === true) {
            setActivePopupCheckAlternativeAnswerButtonAnswerMain(true)

        } else {
            if (repeatedAlternativesDefault(optionMap, multiOptionMap).length > 0) { // antes de responder qualquer questão, é verificado se as alternativas não se repetem, chamando a função que está na página base                      
                setActivePopupRepeatedAlternativesMain(true)

                setTimeout(() => {
                    setActivePopupRepeatedAlternativesMain(false) // desativa o popup em 10s

                }, 10000)

                alertOption() // alertar, se não tiver nenhuma alternativa marcada

            } else {
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
                            if (i !== Number(captureValue) && captureValue !== '') {
                                const wrongOptionNext = document.querySelectorAll('.optionNext')[Number(captureValue)];

                                wrongOptionNext.classList.add(optionInvalidate)
                                wrongOptionNext.classList.remove(optionColor)
                                
                                validateSound === true && errorSound.play(); // play error audio
                                
                                setQuestionAnswer(true) // questionAnswer se torna true ao responder
                                
                                setQuestionAnswerButtonNextMain(true) // questionAnswerButtonNextMain se torna true ao responder

                                setNumIncorrectOption(numIncorrectOption + 1)

                            } else {
                                
                                validateSound === true && correctSound.play(); // play correct audio
                                
                                setQuestionAnswer(true) // questionAnswer se torna true ao responder
                                
                                setQuestionAnswerButtonNextMain(true) // questionAnswerButtonNext se torna true ao responder

                                setNumCorrectOption(numCorrectOption + 1)
                                
                                handleAnswer(true) // função da animação fogos de artifício

                            }
                        }
                    }

                }
                
                alertOption()
            }

        }

    }

    // validação da página PageMulti, a resposta correta será sempre as opções 1 e 2 do backend, elas ficarão destacadas na validação
    function validateAnswerPageMulti() {
        const errorSound = new Audio(errorAudio);
        const correctSound = new Audio(correctAudio);
        const captureOptionsNextMulti = document.querySelectorAll('.optionNextMulti')      
        const captureOptionsNextMultiInput = document.querySelectorAll('.optionNextMulti input')
        const captureOptionsNextMultiP = document.querySelectorAll('.optionNextMulti p')

        if (checkAlternativeAnswerDefault(optionMap, multiOptionMap, answer) === true) {
            setActivePopupCheckAlternativeAnswerButtonAnswerMulti(true)

        } else {
            if (repeatedAlternativesDefault(optionMap, multiOptionMap).length > 0) { // antes de responder qualquer questão, é verificado se as alternativas não se repetem, chamando a função que está na página base
                setActivePopupRepeatedAlternativesMultiMain(true)

                setTimeout(() => {
                    setActivePopupRepeatedAlternativesMultiMain(false) // desativa o popup em 10s

                }, 10000)

                alertOption() // alertar, se não tiver nenhuma alternativa marcada

            } else {
                if(questionAnswer === true) {           
                    answerDisplay && setAnswerDisplay(styles.visibleAnswer) // para manter a resposta sempre visível
                    
                    // alerta avisando para passar para a próxima questão
                    alert('Ops!!! Já foi respondida está questão, por favor, passe para a próxima questão.')
                } else {                    
                    const checkedValuesInput = [...captureOptionsNextMultiInput] // captura somente os inputs marcados
                    .filter(input => input.checked)
                    .map(input => input.value)
                    
                    const allParagraph =  [...captureOptionsNextMultiP] // captura todos as alternativas

                    const checkedParagraph = [...captureOptionsNextMultiInput] // captura somente as alternativas marcados
                            .filter(input => input.checked)
                            .map(input => input.parentElement.children[1])

                    for(let i=0; i<checkedValuesInput.length; i++) {
                        if (checkedParagraph.length === 2 && checkedParagraph[i].innerText.includes('true')) { // verificando quais opções tem a palavra 'true' para validação
                            // as alternativas verdadeiras serão destacadas em verde
                            checkedParagraph[i].classList.add(optionValidate)
                            checkedParagraph[i].classList.remove(optionColorMulti)

                            if (checkedParagraph[0].innerText.includes('true') && checkedParagraph[1].innerText.includes('true')) {   
                                validateSound === true && correctSound.play(); // som ao acertar
                            
                                setQuestionAnswer(true) // questionAnswer se torna true ao responder
                            
                                setQuestionAnswerButtonNextMulti(true) // questionAnswerButtonNext se torna true ao responder

                                setNumCorrectOption(numCorrectOption + 1) // variável utilizada no componente ModalResults
                            
                                handleAnswer(true) // função da animação fogos de artifício

                            }

                        } 

                        else if (checkedParagraph.length === 2 && checkedParagraph[i].innerText.includes('true') === false) { 
                            // as alternativas falsas serão destacadas em vermelho
                            checkedParagraph[i].classList.add(optionInvalidate)
                            checkedParagraph[i].classList.remove(optionColorMulti)

                            for(let i=0; i<allParagraph.length; i++) { // ao ter marcado alternativas erradas, destacar as que estão corretas
                                if (allParagraph[i].innerText.includes('true')) {
                                    allParagraph[i].classList.add(optionValidate)
                                    allParagraph[i].classList.remove(optionColorMulti) 

                                }

                            }  

                            validateSound === true && errorSound.play() // som ao errar

                            setQuestionAnswer(true) // questionAnswer se torna true ao responder
                        
                            setQuestionAnswerButtonNextMulti(true) // questionAnswerButtonNext se torna true ao responder

                            setNumIncorrectOption(numIncorrectOption + 1) // variável utilizada no componente ModalResults

                        } 

                    }

                    // alerta para marcar as opções quando não tiver nenhuma ou mais do que duas marcadas e ser ativada somente na página multi       
                    if (captureOptionsNextMulti.length > 0 && ((checkedValuesInput.length === 0) || (checkedValuesInput.length < 2) || (checkedValuesInput.length > 2))) {

                        alert('Por favor, marque 2 opções!')
                        clearAnswer()

                    }

                }

            }
        
        }
   
    }

    function displayAndValidate () {
        optionMap && validateAnswerPageMain()
        multiOptionMap && validateAnswerPageMulti()

        // enquanto tiver alternativas repetidas, não será mostrado a resposta na tela 
        if ((optionMap && !multiOptionMap && repeatedAlternativesDefault(optionMap, multiOptionMap).length === 0 && captureValue !== '') || (multiOptionMap && !optionMap && repeatedAlternativesDefault(optionMap, multiOptionMap).length === 0 && captureValueMulti.length === 2)) {
        // condição: irá depender da opção existir, se as alternativas não se repetem e se tem alternativas marcadas
            display()

        }

    }

    return(
        <>
            <ButtonDefault 
                onClick={displayAndValidate}
                specificStyleButton={styles.buttonAnswer} 
                buttonName='Answer' 

            />

            <Animation correct={correct} />

            {/* PopupCheckAlternativeAnswer */}
            {activePopupCheckAlternativeAnswerButtonAnswerMain === true && 
                <PopupCheckAlternativeAnswer 
                    specificStyles={styles.popupCheckButtonAnswer} 
                    activePopup={setActivePopupCheckAlternativeAnswerButtonAnswerMain}
                    textPopup={`No alternative matching the answer to question ${numberQuestion} was found. Please ensure that, before answering the respective question, you edit the question and the option in the menu so that one alternative exactly matches the answer to the question. Then proceed with answering the question and the option. For more information, click the phrase below. Thank you.`} 
                    textModalDescription={`Choose one: (1)Include in the answer to question ${numberQuestion} the correct alternative from the option highlighted below: ${optionMap[0]}, ${optionMap[1]}, ${optionMap[2]}, ${optionMap[3]}${optionMap[4] !== '' ? ` or ${optionMap[4]}.` : `.`} (2)Include in one of the alternatives of this option the answer to question ${numberQuestion}, highlighted below: ${answer}.`}

                />
            }

            {activePopupCheckAlternativeAnswerButtonAnswerMulti === true && 
                <PopupCheckAlternativeAnswer 
                    specificStyles={styles.popupCheckButtonAnswer} 
                    activePopup={setActivePopupCheckAlternativeAnswerButtonAnswerMulti}
                    textPopup={`The two alternatives included in the answer to question ${numberQuestion} were not found. Please ensure that, before answering the respective question, you edit the question and the option in the menu so that Option 1 and Option 2 exactly match those included in the answer to the question. Then proceed with answering the question and the option. For more information, click the phrase below. Thank you.`} 
                    textModalDescription={`Choose One: (1)Include in the answer of question ${numberQuestion} the two correct alternatives from the option highlighted below: ${multiOptionMap[0]} e ${multiOptionMap[1]}. (2)Include in the first two alternatives (Option1 and Option2) of this option the answer included in question ${numberQuestion}, highlighted below: ${answer}. `}

                />
            }

        </>
    )

}

export default ButtonAnswer
