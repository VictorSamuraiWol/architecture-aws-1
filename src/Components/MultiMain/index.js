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
    question, answer, imageDescription, description, questionNumber, answerDescriptionDisplay, setAnswerDescriptionDisplay, descriptionDisplay, 
    setDescriptionDisplay, questionMulti, optionMulti, optionMultiNumberId, optNum1, optNum2, optNum3, optNum4, optNum5
}) {

    const [optionColorStyle] = useState(styles.optionColorMulti)
    const [optionValidateStyle] = useState(styles.optionValidate)
    const [optionInvalidateStyle] = useState(styles.optionInvalidate)
    const [inputColorStyle] = useState(styles.inputMultiOptions)
    const [inputValidateStyle] = useState(styles.inputValidate)
    const [inputInvalidateStyle] = useState(styles.inputInvalidate)
    const [captureValueMulti, setCaptureValueMulti] = useState([])
    const [activePopupRepeatedAlternativesMultiMain, setActivePopupRepeatedAlternativesMultiMain] = useState(false) // ativa o componente PopupRepeatedAlternatives na MultiMain

    // pegar o estado da variável booleana que torna 'true' toda vez que responder, seja na opção correta ou errada na página multi, como na variável booleana 'questionAnwer', será utilizada no componente 'ButtonNext' para saber se pode ir para a próxima página somente depois de responder
    const [questionAnswerButtonNextMulti, setQuestionAnswerButtonNextMulti] = useState(false)

    const [itens, setItens] = useState('') // captura os itens corretos

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
                questionMulti={questionMulti} 
                optionMulti={optionMulti} 
                optionMultiNumberId={optionMultiNumberId}                
            />

            {activePopupRepeatedAlternativesMultiMain === true && 
                <PopupRepeatedAlternatives 
                    specificStyles={styles.popupRepeatedMultiMain} 
                    textPopup={"Há alternativas repetidas! Por favor, antes de responder, altere as alternativas no Menu para que todas sejam diferentes, e então prossiga respondendo. Obrigado."}
                    activePopup={setActivePopupRepeatedAlternativesMultiMain}
                />
            }

            <MultiOptions
                optionColorStyle={optionColorStyle}
                inputColorStyle={inputColorStyle}
                setCaptureValueMulti={setCaptureValueMulti}
                captureValueMulti={captureValueMulti}
                optionMulti={optionMulti}
                optNum1={optNum1}
                optNum2={optNum2}
                optNum3={optNum3}
                optNum4={optNum4}
                optNum5={optNum5}
            />
            
            <ButtonAnswer            
                answerDescriptionDisplay={answerDescriptionDisplay}
                setAnswerDescriptionDisplay={setAnswerDescriptionDisplay}
                descriptionDisplay={descriptionDisplay}
                setDescriptionDisplay={setDescriptionDisplay}              
                answer={answer}
                questionNumber={questionNumber}
                optionValidateStyle={optionValidateStyle}
                optionInvalidateStyle={optionInvalidateStyle}
                optionColorStyle={optionColorStyle}
                inputColorStyle={inputColorStyle}
                inputValidateStyle={inputValidateStyle}
                inputInvalidateStyle={inputInvalidateStyle}
                captureValueMulti={captureValueMulti}
                optionMulti={optionMulti}
                setQuestionAnswerButtonNextMulti={setQuestionAnswerButtonNextMulti}
                activePopupRepeatedAlternativesMultiMain={activePopupRepeatedAlternativesMultiMain}
                setActivePopupRepeatedAlternativesMultiMain={setActivePopupRepeatedAlternativesMultiMain}
                setItens={setItens}
            />

            <AnswerDescription
                answer={answer}
                imageDescription={imageDescription}
                description={description}
                answerDescriptionDisplay={answerDescriptionDisplay}
                setAnswerDescriptionDisplay={setAnswerDescriptionDisplay}
                descriptionDisplay={descriptionDisplay}
                setDescriptionDisplay={setDescriptionDisplay}
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
