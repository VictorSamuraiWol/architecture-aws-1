import styles from './ButtonAnswer.module.css'
import ButtonDefault from '../ButtonDefault'
import PopupCheckAlternativeAnswer from '../PopupCheckAlternativeAnswer'
import Animation from '../Animation'
import correctAudio from '../../audios/correctAudio.mp3'
import errorAudio from '../../audios/errorAudio.mp3'
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

function ButtonAnswer({ 
    answerDisplay, setAnswerDisplay, captureValue, optionColorStyle, optionValidateStyle, optionInvalidateStyle, 
    inputColorStyle, inputValidateStyle, inputInvalidateStyle, answer, captureValueMulti, optNum1, optNum2, optNum3, optNum4, optNum5, 
    setQuestionAnswerButtonNextMain, setQuestionAnswerButtonNextMulti, optionMain, optionMulti, 
    setActivePopupRepeatedAlternativesMain, setActivePopupRepeatedAlternativesMultiMain, questionNumber, setItem, 
    setItens
}) {
    
    // chamando algumas variáveis e as funções 'repeatedAlternativesDefault' e 'checkAlternativeAnswerDefault' através do 'useOutletContext' criada na PageBase
    const { mute, setNumCorrectOption, setNumIncorrectOption, repeatedAlternativesDefault, checkAlternativeAnswerDefault } = useOutletContext()

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
            setCorrect(true)
            setTimeout(() => setCorrect(false), 2500) // Remove partículas após 2,5s 

        }

    }

    function display() {
        setAnswerDisplay(styles.visibleAnswer)

    }

    function alertOption() { // alerta quando as alternativas estiverem desmarcadas ou marcadas incorretamente, tanto na página Main quanto na página Multi  
        if (optionMain && captureValue === '') {            
            alert('Please select an option!') 
            answerDisplay && setAnswerDisplay(styles.invisible)
        } else if ((optionMulti && captureValueMulti.length < 2) || (optionMulti && captureValueMulti.length > 2)) {
            alert('Please select 2 options!') 
            answerDisplay && setAnswerDisplay(styles.invisible)

        }

    }

    // validação da página NewPageMain, a resposta correta será sempre uma comparação do valor do campo resposta (answer) com os valores dos campos das opções (opção 1, 2, 3, 4 e 5), caso seja igual, ela ficará destacada na validação
    function validateAnswerPageMain() {
        const errorSound = new Audio(errorAudio)
        const correctSound = new Audio(correctAudio)

        // passar somente os valores que não forem vazios de todas as opções para a const 'convertObjArray' antes da validação
        const convertObjArray = optionMain && [optionMain[optNum1], optionMain[optNum2], optionMain[optNum3], optionMain[optNum4], optionMain[optNum5]].filter(option => option !== '')
        const captureOptionsNextInput = document.querySelectorAll('.optionNext input') // captura todas os campos input

        const checkedParagraph = [...captureOptionsNextInput] // captura somente a alternativa marcada
            .filter(input => input.checked)
            .map(input => input.parentElement.children[1].childNodes[3])[0]

        let correctItem = null
        let setterQuestionAnswer = false
        let setterQuestionAnswerButtonNextMain = false
        let setterNumIncorrectOption = 0
        let setterNumCorrectOption = 0
        let functionHandleAnswer = false
        let playCorrectSound = false
        let playErrorSound = false

        alertOption() // alertar quando tiver nenhuma alternativa marcada na página Main

        if (checkAlternativeAnswerDefault(optionMain, optionMulti, answer) === true) {
            setActivePopupCheckAlternativeAnswerButtonAnswerMain(true)

        } else {
            if (repeatedAlternativesDefault(optionMain, optionMulti).length > 0) { // antes de responder qualquer questão, é verificado se as alternativas não se repetem, chamando a função que está na página base                      
                setActivePopupRepeatedAlternativesMain(true)

                setTimeout(() => {
                    setActivePopupRepeatedAlternativesMain(false) // desativa o popup em 10s

                }, 10000)

            } else {
                // observação 1: poderia usar a captura do elemento, por exemplo no evento 'onClick' para pegar o valor e depois comparar com a resposta correta, como a seguir: e.target.parentElement.childNodes[1].innerText.includes(`${answer}`) em vez de usar o for para iterar sobre todas as opções, se preferir.
                if(questionAnswer === true) {
                    // para manter a resposta sempre visível
                    answerDisplay && setAnswerDisplay(styles.visibleAnswer)
                    
                    // alerta avisando para passar para a próxima questão
                    alert('Ops!!! Já foi respondida está questão, por favor, passe para a próxima questão.')

                } else {
                    for(let i=0; i < convertObjArray.length; i++) {
                        if (optionMain && (convertObjArray[i] === answer) && (captureValue !== '')) { // para a opção correta ser exatamente o valor da resposta
                            // adicionando a validação na opção correta
                            const correctOption = document.querySelectorAll('.optionNext div')[i]
                            const correctOptionItem = document.querySelectorAll('.optionNext .item')[i]?.innerText
                            const correctOptionInput = document.querySelectorAll('.optionNext input')[i]
                            
                            // estilizando o parágrafo correto
                            correctOption?.classList.add(optionValidateStyle)
                            correctOption?.classList.remove(optionColorStyle)

                            // estilizando o input correto
                            correctOptionInput?.classList.add(inputValidateStyle)
                            correctOptionInput?.classList.remove(inputColorStyle)

                            correctItem = correctOptionItem // capturar o item correto
                            setterQuestionAnswer = true // ao clicar no botão answer se torna 'true'                            
                            setterQuestionAnswerButtonNextMain = true // ao clicar no botão next e já estiver respondido se torna 'true'

                            // adicionando a invalidação nas opções incorretas
                            if ((checkedParagraph?.innerText !== answer) && captureValue !== '') {
                                // estilizando o parágrafo marcado incorretamente
                                checkedParagraph.parentElement?.classList.add(optionInvalidateStyle) 
                                checkedParagraph.parentElement?.classList.remove(optionColorStyle)
                               
                                // estilizando o input marcado incorretamente
                                checkedParagraph.parentElement.parentElement.children[0]?.classList.add(inputInvalidateStyle)
                                checkedParagraph.parentElement.parentElement.children[0]?.classList.remove(inputColorStyle)
                
                                setterNumIncorrectOption++ // incrementa '1' se responder errado
                                playErrorSound = true // toca o som de erro

                            } else {
                                setterNumCorrectOption++ // incrementa '1' se responder correto
                                functionHandleAnswer = true // ativa a animação de fogos de artifícil
                                playCorrectSound = true // toca o som de acerto

                            }
                        }
                    }

                    if (correctItem) {
                        setItem(correctItem) // capturar o item correto

                    }
            
                    // usando setters fora do loop 'for'
                    if (setterQuestionAnswer) {
                        setQuestionAnswer(setterQuestionAnswer)

                    }

                    if (setterQuestionAnswerButtonNextMain) {
                        setQuestionAnswerButtonNextMain(setterQuestionAnswerButtonNextMain)

                    }

                    if (setterNumIncorrectOption > 0) {
                        setNumIncorrectOption(prev => prev + setterNumIncorrectOption)

                    }

                    if (setterNumCorrectOption > 0) {
                        setNumCorrectOption(prev => prev + setterNumCorrectOption)

                    }

                    if (functionHandleAnswer) {
                        handleAnswer(functionHandleAnswer)

                    }

                    if (mute === false) {
                        playCorrectSound && correctSound.play()
                        playErrorSound && errorSound.play()

                    }

                }

            }

        }

    }

    // validação da página PageMulti, a resposta correta será sempre as opções 1 e 2 do backend, elas ficarão destacadas na validação
    function validateAnswerPageMulti() {
        const errorSound = new Audio(errorAudio)
        const correctSound = new Audio(correctAudio)     
        const captureOptionsNextMultiInput = document.querySelectorAll('.optionNextMulti input') // captura todas os campos input
        const captureOptionsNextMultiP = document.querySelectorAll('.optionNextMulti div') // captura todas as alternativas
        const captureOptionsNextMultiItens = document.querySelectorAll('.optionNextMulti .item') // captura todos os itens

        const checkedValuesInput = [...captureOptionsNextMultiInput] // captura somente os inputs marcados
            .filter(input => input.checked)
            .map(input => input.value)
          
        const checkedParagraph = [...captureOptionsNextMultiInput] // captura somente as alternativas marcadas
            .filter(input => input.checked)
            .map(input => input.parentElement.children[1])

        const checkedItens = [...captureOptionsNextMultiInput] // captura somente os itens marcados
            .filter(input => input.checked)
            .map(input => input.parentElement.children[1].childNodes[0])

        const allParagraph =  [...captureOptionsNextMultiP] // captura todas as alternativas

        const allItens = [...captureOptionsNextMultiItens] // captura todos os itens    

        let correctItens = [] // para capturar os itens corretos
        let uniqueItens = [] // para retirar os itens duplicados
        let sortedItems = [] // ordenar os itens (a, b, c, d ou e)
        let setterQuestionAnswer = false
        let setterQuestionAnswerButtonNextMulti = false
        let setterNumIncorrectOption = 0
        let setterNumCorrectOption = 0
        let functionHandleAnswer = false
        let playCorrectSound = false
        let playErrorSound = false

        alertOption() // alertar quando menos de 2 alternativas ou mais de 2 alternativas estiverem marcadas na página múltipla

        if (checkAlternativeAnswerDefault(optionMain, optionMulti, answer) === true) {
            setActivePopupCheckAlternativeAnswerButtonAnswerMulti(true)

        } else {
            if (repeatedAlternativesDefault(optionMain, optionMulti).length > 0) { // antes de responder qualquer questão, é verificado se as alternativas não se repetem, chamando a função que está na página base
                setActivePopupRepeatedAlternativesMultiMain(true)

                setTimeout(() => {
                    setActivePopupRepeatedAlternativesMultiMain(false) // desativa o popup em 10s

                }, 10000)

            } else {
                if(questionAnswer === true) {           
                    answerDisplay && setAnswerDisplay(styles.visibleAnswer) // para manter a resposta sempre visível
                    
                    // alerta avisando para passar para a próxima questão
                    alert('Ops!!! Já foi respondida está questão, por favor, passe para a próxima questão.')

                } else {
                    for(let i=0; i<checkedValuesInput.length; i++) {
                        if (checkedParagraph.length === 2 && checkedParagraph[i].innerText.includes('true')) { // verificando quais opções tem a palavra 'true' para validação
                            // estilizando os parágrafos marcados corretamente
                            checkedParagraph[i].classList.add(optionValidateStyle)
                            checkedParagraph[i].classList.remove(optionColorStyle)

                            // estilizando os inputs marcados corretamente
                            checkedParagraph[i].parentElement.children[0].classList.add(inputValidateStyle)
                            checkedParagraph[i].parentElement.children[0].classList.remove(inputColorStyle)

                            correctItens.push(checkedItens[i].innerText) // armazena os dois itens marcados corretamente
                            setterQuestionAnswer = true // ao clicar no botão answer se torna 'true'                            
                            setterQuestionAnswerButtonNextMulti = true // ao clicar no botão next e já estiver respondido se torna 'true'

                            if (checkedParagraph[0].innerText.includes('true') && checkedParagraph[1].innerText.includes('true')) {
                                functionHandleAnswer = true // ativa a animação de fogos de artifícil
                                playCorrectSound = true // toca o som de acerto

                            }

                        } else if (checkedParagraph.length === 2 && checkedParagraph[i].innerText.includes('true') === false) { 
                            // estilizando os parágrafos marcados incorretamente
                            checkedParagraph[i].classList.add(optionInvalidateStyle)
                            checkedParagraph[i].classList.remove(optionColorStyle)

                            // estilizando os inputs marcados incorretamente
                            checkedParagraph[i].parentElement.children[0].classList.add(inputInvalidateStyle)
                            checkedParagraph[i].parentElement.children[0].classList.remove(inputColorStyle)

                            setterQuestionAnswer = true // ao clicar no botão answer se torna 'true'                            
                            setterQuestionAnswerButtonNextMulti = true // ao clicar no botão next e já estiver respondido se torna 'true'
                       
                            for(let i=0; i<allParagraph.length; i++) { // ao ter marcado alternativas erradas, destacar as que estão corretas
                                if (allParagraph[i].childNodes[3].innerText.includes('true')) {
                                    // estilizando os parágrafos corretos
                                    allParagraph[i].classList.add(optionValidateStyle)
                                    allParagraph[i].classList.remove(optionColorStyle)

                                    // estilizando os inputs corretos
                                    allParagraph[i].parentElement.children[0].classList.add(inputValidateStyle)
                                    allParagraph[i].parentElement.children[0].classList.remove(inputColorStyle)

                                    correctItens.push(allItens[i].innerText) // captura os valores dos itens corretos

                                } 
                                
                            } 

                            uniqueItens = [...new Set(correctItens)] // verifica e elimina itens duplicados da lista
                            setItens(`${uniqueItens[0]} // ${uniqueItens[1]}`) // armazena os itens corretos
                            playErrorSound = true // toca o som de erro

                        } 

                    }

                    // incremento da resposta correta ou errada
                    if (playCorrectSound) {
                        setterNumCorrectOption++ // incrementa '1' se responder correto

                    } else if (playErrorSound) {
                        setterNumIncorrectOption++ // incrementa '1' se responder errado

                    }

                    // usando setters fora do loop 'for'
                    if (setterQuestionAnswer) {
                        setQuestionAnswer(setterQuestionAnswer)

                    }

                    if (setterQuestionAnswerButtonNextMulti) {
                        setQuestionAnswerButtonNextMulti(setterQuestionAnswerButtonNextMulti)

                    }

                    if (setterNumIncorrectOption > 0) {
                        setNumIncorrectOption(prev => prev + setterNumIncorrectOption)

                    }

                    if (setterNumCorrectOption > 0) {
                        setNumCorrectOption(prev => prev + setterNumCorrectOption)

                    }

                    if (functionHandleAnswer) {
                        handleAnswer(functionHandleAnswer)

                    }

                    if (mute === false) {
                        playCorrectSound && correctSound.play()
                        playErrorSound && errorSound.play()

                    }
                    
                    uniqueItens = [...new Set(correctItens)] // verifica e elimina itens duplicados da lista
                    sortedItems = [...uniqueItens].sort() // ordenar os itens (a, b, c, d ou e)        
                    setItens(`${sortedItems[0]} // ${sortedItems[1]}`) // armazena os itens corretos

                }

            }
        
        }
   
    }

    function displayAndValidate () {
        optionMain && validateAnswerPageMain()
        optionMulti && validateAnswerPageMulti()

        // enquanto tiver alternativas repetidas, não será mostrado a resposta na tela 
        if ((optionMain && !optionMulti && repeatedAlternativesDefault(optionMain, optionMulti).length === 0 && captureValue !== '') || (optionMulti && !optionMain && repeatedAlternativesDefault(optionMain, optionMulti).length === 0 && captureValueMulti.length === 2)) {
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
                    textPopup={`No alternative matching the answer to question ${questionNumber} was found. Please ensure that, before answering the respective question, you edit the question and the option in the menu so that one alternative exactly matches the answer to the question. Then proceed with answering the question and the option. For more information, click the phrase below.`} 
                    textModalDescription={`Choose one: (1)Include in the answer to question ${questionNumber} the correct alternative from the option highlighted below: ${optionMain[0]}, ${optionMain[1]}, ${optionMain[2]}, ${optionMain[3]}${optionMain[4] !== '' ? ` or ${optionMain[4]}.` : `.`} (2)Include in one of the alternatives of this option the answer to question ${questionNumber}, highlighted below: ${answer}.`}
                />
            }

            {activePopupCheckAlternativeAnswerButtonAnswerMulti === true && 
                <PopupCheckAlternativeAnswer 
                    specificStyles={styles.popupCheckButtonAnswer} 
                    activePopup={setActivePopupCheckAlternativeAnswerButtonAnswerMulti}
                    textPopup={`The two alternatives included in the answer to question ${questionNumber} were not found. Please ensure that, before answering the respective question, you edit the question and the option in the menu so that Option A and Option B exactly match those included in the answer to the question. Then proceed with answering the question and the option. For more information, click the phrase below.`} 
                    textModalDescription={`Choose One: (1)Include in the answer of question ${questionNumber} the two correct alternatives from the option highlighted below: ${optionMulti[0]} e ${optionMulti[1]}. (2)Include in the first two alternatives (Option A and Option B) of this option the answer included in question ${questionNumber}, highlighted below: ${answer}. `}
                />
            }

        </>
    )

}

export default ButtonAnswer
