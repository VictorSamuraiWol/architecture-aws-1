import styles from './MultiMain.module.css'
import Question from '../Question'
import MultiOptions from './MultiOptions'
import ButtonAnswer from '../ButtonAnswer'
import ButtonNext from '../ButtonNext'
import AnswerDescription from '../AnswerDescription'
import MenuTools from '../MenuTools'
import PopupRepeatedAlternatives from '../PopupRepeatedAlternatives'
import ModalResults from '../ModalResults'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function MultiMain({ 
    question, listMultiOptions, setListMultiOptions, answer, srcImg, descriptionP, 
    numberQuestion, answerDisplay, setAnswerDisplay, descriptionDisplay, setDescriptionDisplay, 
    multiQuestion, setMultiQuestion, listMultiQuestions
}) {

    const [optionColorStyle] = useState(styles.optionColorMulti)
    const [optionValidateStyle] = useState(styles.optionValidate)
    const [optionInvalidateStyle] = useState(styles.optionInvalidate)
    const [inputColorStyle] = useState(styles.inputMultiOptions)
    const [inputValidateStyle] = useState(styles.inputValidate)
    const [inputInvalidateStyle] = useState(styles.inputInvalidate)
    const [captureValueMulti, setCaptureValueMulti] = useState([])
    const [multiOptionMap, setMultiOptionMap] = useState([]) // mapear todas as opções da página multi    
    const [activePopupRepeatedAlternativesMultiMain, setActivePopupRepeatedAlternativesMultiMain] = useState(false) // ativa o componente PopupRepeatedAlternatives na MultiMain

    // pegar o estado da variável booleana que torna 'true' toda vez que responder, seja na opção correta ou errada na página multi, como na variável booleana 'questionAnwer', será utilizada no componente 'ButtonNext' para saber se pode ir para a próxima página somente depois de responder
    const [questionAnswerButtonNextMulti, setQuestionAnswerButtonNextMulti] = useState(false)

    const [itens, setItens] = useState('') // captura os itens corretos

    const [multiOptionMapNumberId, setMultiOptionMapNumberId] = useState([]) // capturar o número e a ID da opção de múltipla escolha atual do componente MultiMain

    function alertQuestionAnswerButtonNextMulti() {
        if (questionAnswerButtonNextMulti === false) {
            alert('Ops!!! Por favor, responda a questão antes de ir para a próxima!')

        }

    }

    function ablePageMain() { // função que muda a rota da página Multi para a página Main
        let able

        if (questionAnswerButtonNextMulti) {
        // condição: se a questão da página Multi foi respondida
            able = '/'
        } 

        return able
    }

    return (
        <div className={styles.multiMain}>
            <Question 
                question={question}            
            />

            <MenuTools
                multiQuestion={multiQuestion} 
                multiOptionMap={multiOptionMap} 
                multiOptionMapNumberId={multiOptionMapNumberId}                
            />

            {activePopupRepeatedAlternativesMultiMain === true && 
                <PopupRepeatedAlternatives 
                    specificStyles={styles.popupRepeatedMultiMain} 
                    textPopup={"Há alternativas repetidas! Por favor, antes de responder, altere as alternativas no Menu para que todas sejam diferentes, e então prossiga respondendo. Obrigado."}
                    activePopup={setActivePopupRepeatedAlternativesMultiMain}
                />
            }

            <MultiOptions
                listMultiOptions={listMultiOptions}
                setListMultiOptions={setListMultiOptions}
                optionColorStyle={optionColorStyle}
                inputColorStyle={inputColorStyle}
                setCaptureValueMulti={setCaptureValueMulti}
                captureValueMulti={captureValueMulti}
                multiOptionMap={multiOptionMap}
                setMultiOptionMap={setMultiOptionMap}
                multiQuestion={multiQuestion}
                setMultiQuestion={setMultiQuestion}
                setMultiOptionMapNumberId={setMultiOptionMapNumberId}
                listMultiQuestions={listMultiQuestions}
            />
            
            <ButtonAnswer            
                answerDisplay={answerDisplay}
                setAnswerDisplay={setAnswerDisplay}
                descriptionDisplay={descriptionDisplay}
                setDescriptionDisplay={setDescriptionDisplay}              
                answer={answer}
                numberQuestion={numberQuestion}
                optionValidateStyle={optionValidateStyle}
                optionInvalidateStyle={optionInvalidateStyle}
                optionColorStyle={optionColorStyle}
                inputColorStyle={inputColorStyle}
                inputValidateStyle={inputValidateStyle}
                inputInvalidateStyle={inputInvalidateStyle}
                listMultiOptions={listMultiOptions}
                setListMultiOptions={setListMultiOptions}
                captureValueMulti={captureValueMulti}
                setQuestionAnswerButtonNextMulti={setQuestionAnswerButtonNextMulti}
                multiOptionMap={multiOptionMap}
                activePopupRepeatedAlternativesMultiMain={activePopupRepeatedAlternativesMultiMain}
                setActivePopupRepeatedAlternativesMultiMain={setActivePopupRepeatedAlternativesMultiMain}
                setItens={setItens}
            />

            <AnswerDescription
                answer={answer}
                srcImg={srcImg} 
                descriptionP={descriptionP}
                numberQuestion={numberQuestion}
                answerDisplay={answerDisplay}
                setAnswerDisplay={setAnswerDisplay}
                descriptionDisplay={descriptionDisplay}
                setDescriptionDisplay={setDescriptionDisplay}
                listMultiOptions={listMultiOptions} 
                itens={itens}             
            />

            <Link
                to={ablePageMain()} 
            >
                <ButtonNext 
                    onClick={alertQuestionAnswerButtonNextMulti}
                    questionAnswerButtonNextMulti={questionAnswerButtonNextMulti}
                />
            </Link>

            <ModalResults />
                       
        </div>
    )
}

export default MultiMain;
