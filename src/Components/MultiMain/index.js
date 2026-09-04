import styles from './MultiMain.module.css'
import Question from '../Question'
import MultiOptions from './MultiOptions'
import ButtonAnswer from '../ButtonAnswer'
import ButtonNext from '../ButtonNext'
import AnswerDescription from '../AnswerDescription'
import MenuTools from '../MenuTools'
import ModalResults from '../ModalResults'
import zeroImage from '../../imgs/zero-question.png'
import PopupRepeatedAlternatives from '../Popups/PopupRepeatedAlternatives'
import PopupAlertMessage from '../Popups/PopupAlertMessage'
import { useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'

function MultiMain({ 
    question, answer, imageDescription, description, questionNumber, answerDescriptionDisplay, setAnswerDescriptionDisplay, descriptionDisplay, 
    setDescriptionDisplay, questionMulti, optionMulti, optionMultiNumberId, optNum1, optNum2, optNum3, optNum4, optNum5, optNum6, activeZeroImgMulti
}) {

    const [optionColorStyle] = useState(styles.optionColorMulti)
    const [optionValidateStyle] = useState(styles.optionValidate)
    const [optionInvalidateStyle] = useState(styles.optionInvalidate)
    const [inputColorStyle] = useState(styles.inputMultiOptions)
    const [inputValidateStyle] = useState(styles.inputValidate)
    const [inputInvalidateStyle] = useState(styles.inputInvalidate)
    const [captureValueMulti, setCaptureValueMulti] = useState([])
    const [activePopupRepeatedAlternativesMultiMain, setActivePopupRepeatedAlternativesMultiMain] = useState(false) // ativa o componente PopupRepeatedAlternatives na MultiMain
    
    const { activePopupZeroTimerMultiAlert, setActivePopupZeroTimerMultiAlert } = useOutletContext()

    // pegar o estado da variável booleana que torna 'true' toda vez que responder, seja na opção correta ou errada na página multi, como na variável booleana 'questionAnwer', será utilizada no componente 'ButtonNext' para saber se pode ir para a próxima página somente depois de responder
    const [questionAnswerButtonNextMulti, setQuestionAnswerButtonNextMulti] = useState(false)

    const [itens, setItens] = useState('') // captura os itens corretos

    const [answerMultiQuestionAlert, setAnswerMultiQuestionAlert] = useState(false) // ativa o componente PopupAlertMessage

    function alertQuestionAnswerButtonNextMulti() {
        if (questionAnswerButtonNextMulti === false) {
            setAnswerMultiQuestionAlert(true)

        }

    }

    function ablePageMain() { // função que muda a rota da página Multi para a página Main
        let able = null

        if (questionAnswerButtonNextMulti) {
        // condição: se a questão da página Multi foi respondida
            able = '/page-main'
        } 

        return able
    }

    return (
        <div className={styles.multiMain}>
            {activeZeroImgMulti === false && 
            <>
                <div className={styles.containerQuestionMenuTools}>
                    <Question 
                        question={question}
                        questionNumber={questionNumber}            
                    />

                    <MenuTools
                        questionMulti={questionMulti} 
                        optionMulti={optionMulti} 
                        optionMultiNumberId={optionMultiNumberId}
                        setAnswerDescriptionDisplay={setAnswerDescriptionDisplay}
                        setDescriptionDisplay={setDescriptionDisplay}               
                    />
                
                </div>
         
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
                    optNum6={optNum6}
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

            </>}

            {/* imagem que aparece quando não tem questões disponíveis */}
            {activeZeroImgMulti && <img 
                src={zeroImage} 
                alt='zero img'
                className={styles.zeroImg}
            />}

            {/* PopupRepeatedAlternatives */}
            {activePopupRepeatedAlternativesMultiMain === true && 
                <PopupRepeatedAlternatives 
                    specificStyles={styles.popupRepeatedMultiMain} 
                    textPopup={"There are duplicate alternatives. Please, before answering, update the alternatives in the Menu so that each one is unique, and then proceed with your response."}
                    activePopup={setActivePopupRepeatedAlternativesMultiMain}
                />
            }

            {/* {PopupAlertMessage} */}
            {answerMultiQuestionAlert &&
                <PopupAlertMessage 
                    text="Oops!!! Please answer the question before moving on to the next one!"
                    activePopup={setAnswerMultiQuestionAlert}
                    specificStyles={styles.popupAlertMessage}
                />
            }

            {activePopupZeroTimerMultiAlert && 
                <PopupAlertMessage 
                    text='Oops! Time is up! Please pay attention to the exam time limit.' 
                    specificStyles={styles.popupAlertMessage}
                    activePopup={setActivePopupZeroTimerMultiAlert}
                />
            }
                       
        </div>
    )
}

export default MultiMain;
