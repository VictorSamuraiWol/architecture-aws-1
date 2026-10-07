import styles from './MultiMain.module.css'
import Question from '../Question'
import MultiOptions from './MultiOptions'
import ButtonAnswer from '../ButtonAnswer'
import ButtonNext from '../ButtonNext'
import AnswerDescription from '../AnswerDescription'
import MenuTools from '../MenuTools'
import ModalResults from '../Modal/ModalResults'
import PopupRepeatedAlternatives from '../Popups/PopupRepeatedAlternatives'
import PopupAlertMessage from '../Popups/PopupAlertMessage'
import { useContext, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { DataContext } from '../DataContext'

function MultiMain({ 
    question, answer, iconDescription, description, questionNumber, answerDescriptionDisplay, setAnswerDescriptionDisplay, descriptionDisplay, 
    setDescriptionDisplay, questionMulti, optionMulti, optionMultiNumberId, optNum1, optNum2, optNum3, optNum4, optNum5, optNum6
}) {

    const [optionColorStyle] = useState(styles.optionColorMulti)
    const [optionValidateStyle] = useState(styles.optionValidate)
    const [optionInvalidateStyle] = useState(styles.optionInvalidate)
    const [inputColorStyle] = useState(styles.inputMultiOptions)
    const [inputValidateStyle] = useState(styles.inputValidate)
    const [inputInvalidateStyle] = useState(styles.inputInvalidate)
    const [captureValueMulti, setCaptureValueMulti] = useState([])
    const [activePopupRepeatedAlternativesMultiMain, setActivePopupRepeatedAlternativesMultiMain] = useState(false) // ativa o componente PopupRepeatedAlternatives na MultiMain
    
    const { activePopupZeroTimerMultiAlert, setActivePopupZeroTimerMultiAlert, activePageMulti, activePageThreeMulti, questionAnswerButtonNextMulti, 
        setQuestionAnswerButtonNextMulti } = useOutletContext()

    const { listUnicQuestionsContextLength, listUnicOptionsContextLength, listMultiQuestionsContextLength, listMultiOptionsContextLength, 
        listThreeMultiQuestionsContextLength, listThreeMultiOptionsContextLength } = useContext(DataContext)

    const [itens, setItens] = useState('') // captura os itens corretos

    const [answerMultiQuestionAlert, setAnswerMultiQuestionAlert] = useState(false) // ativa o componente PopupAlertMessage

    function alertQuestionAnswerButtonNextMulti() {
        if (questionAnswerButtonNextMulti === false) {
            setAnswerMultiQuestionAlert(true)

        }

    }

    function ableNextPage() { // função que habilita a próxima rota
        let able = null

        if (listUnicQuestionsContextLength > 0 && listUnicOptionsContextLength > 0 && questionAnswerButtonNextMulti) {
        // condição: se tiver questões Main disponíveis e a questão da página Multi for respondida
            able = '/page-main'

        } else if (activePageThreeMulti && listThreeMultiQuestionsContextLength === 1 && listThreeMultiOptionsContextLength === 1 && questionAnswerButtonNextMulti) {
            if (listMultiQuestionsContextLength >= 1 && listMultiOptionsContextLength >= 1) {
                able = '/page-multi'

            } else {
                able = '/'

            }

        } else if (listMultiQuestionsContextLength >= 1 && listMultiOptionsContextLength >= 1 && listThreeMultiQuestionsContextLength >= 1 
        && listThreeMultiOptionsContextLength >= 1 && questionAnswerButtonNextMulti) {
            if (activePageMulti) {
                able = '/page-three-multi'

            } else if (activePageThreeMulti)
                able = '/page-multi'
            
            else {
                able = '/'

            }

        } else if (listMultiQuestionsContextLength === 1 && listMultiOptionsContextLength === 1 && listThreeMultiQuestionsContextLength === 0
        && listThreeMultiOptionsContextLength === 0 && questionAnswerButtonNextMulti) {
            able = '/'

        } else if (listMultiQuestionsContextLength > 1 && listMultiOptionsContextLength > 1 && listThreeMultiQuestionsContextLength === 0 
        && listThreeMultiOptionsContextLength === 0 && questionAnswerButtonNextMulti) {
            able = '/page-multi'

        } else if (listMultiQuestionsContextLength === 0 && listMultiOptionsContextLength === 0 && listThreeMultiQuestionsContextLength === 1 
        && listThreeMultiOptionsContextLength === 1 && questionAnswerButtonNextMulti) {
            able = '/'
            
        } else if (listMultiQuestionsContextLength === 0 && listMultiOptionsContextLength === 0 && listThreeMultiQuestionsContextLength > 1 
        && listThreeMultiOptionsContextLength > 1 && questionAnswerButtonNextMulti) {
            able = '/page-three-multi'
            
        }

        return able

    }

    return (
        <div className={styles.multiMain}>
            <div className={styles.containerTextTitle}>
                <h1 className={styles.textTitle}>Architecture Questions - Randomly</h1>
            </div>
            
            <div className={styles.containerQuestionMenuTools}>
                <Question 
                    question={question}
                    questionNumber={questionNumber}
                    questionMulti={questionMulti}           
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
                questionMulti={questionMulti}
                answer={answer}
                iconDescription={iconDescription}
                description={description}
                answerDescriptionDisplay={answerDescriptionDisplay}
                setAnswerDescriptionDisplay={setAnswerDescriptionDisplay}
                descriptionDisplay={descriptionDisplay}
                setDescriptionDisplay={setDescriptionDisplay}
                itens={itens}             
            />

            <Link
                to={ableNextPage()}
            >
                <ButtonNext 
                    onClick={alertQuestionAnswerButtonNextMulti}
                    questionAnswerButtonNextMulti={questionAnswerButtonNextMulti}
                />
            </Link>

            <ModalResults />

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
