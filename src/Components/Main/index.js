import styles from './Main.module.css'
import Question from '../Question'
import Options from './Options'
import ButtonAnswer from '../ButtonAnswer'
import ButtonNext from '../ButtonNext'
import AnswerDescription from '../AnswerDescription'
import MenuTools from '../MenuTools'
import ModalResults from '../Modal/ModalResults'
import PopupRepeatedAlternatives from '../Popups/PopupRepeatedAlternatives'
import PopupAlertMessage from '../Popups/PopupAlertMessage'
import { useCallback, useContext, useEffect, useState } from 'react'
import { DataContext } from '../DataContext'
import { Link, useOutletContext } from 'react-router-dom'

function Main({ 
    question, answer, iconDescription, description, questionNumber, answerDescriptionDisplay, descriptionDisplay, 
    setAnswerDescriptionDisplay, setDescriptionDisplay, questionMain, setQuestionMain, 
    optionMain, optionMainNumberId, optNum1, optNum2, optNum3, optNum4, optNum5, activePageDemo, activePageMain
}) {

    // pegando as variáveis através do 'useContext' do componente 'DataContext'
    const { listUnicQuestionsContext, listUnicQuestionsContextLength, listUnicOptionsContextLength, 
        listMultiQuestionsContextLength, listMultiOptionsContextLength, 
        listThreeMultiQuestionsContextLength, listThreeMultiOptionsContextLength } = useContext(DataContext)

    const { activePopupZeroTimerMainAlert, setActivePopupZeroTimerMainAlert, questionAnswerButtonNextMain, setQuestionAnswerButtonNextMain } = useOutletContext()

    const [captureValue, setCaptureValue] = useState('')
    const [optionColorStyle] = useState(styles.optionColorMain)
    const [optionValidateStyle] = useState(styles.optionValidate)
    const [optionInvalidateStyle] = useState(styles.optionInvalidate)
    const [inputColorStyle] = useState(styles.inputOptions)
    const [inputValidateStyle] = useState(styles.inputValidate)
    const [inputInvalidateStyle] = useState(styles.inputInvalidate)
    const [activePopupRepeatedAlternativesMain, setActivePopupRepeatedAlternativesMain] = useState(false) // ativa o componente PopupRepeatedAlternatives na Main
    const [answerMainQuestionAlert, setAnswerMainQuestionAlert] = useState(false) // ativa o componente PopupAlertMessage
    const [noDataAlert, setNoDataAlert] = useState(false) // ativa o componente PopupAlertMessage 

    const [item, setItem] = useState('') // captura o item correto

    const [numberPath, setNumberPath] = useState(null) // Gera um número aleatório entre 1 e 4 dependendo dos tipos de questões disponíveis

    const numberRandomPath = useCallback(() => {
        let listNumbers
        let able

        if (listUnicQuestionsContextLength > 0 && listMultiQuestionsContextLength > 0 && listThreeMultiQuestionsContextLength > 0) {
            able = (Math.floor(Math.random() * 4) + 1)

        } else if (listUnicQuestionsContextLength > 0 && listMultiQuestionsContextLength > 0 && listThreeMultiQuestionsContextLength === 0) {
            listNumbers = [1, 2, 3]
            able = listNumbers[Math.floor(Math.random() * listNumbers.length)]

        } else if (listUnicQuestionsContextLength > 0 && listMultiQuestionsContextLength === 0 && listThreeMultiQuestionsContextLength > 0) {
            listNumbers = [1, 2, 4]
            able = listNumbers[Math.floor(Math.random() * listNumbers.length)]

        } else if (listUnicQuestionsContextLength === 0 && listMultiQuestionsContextLength > 0 && listThreeMultiQuestionsContextLength > 0) {
            listNumbers = [3, 4]
            able = listNumbers[Math.floor(Math.random() * listNumbers.length)]

        } else if (listUnicQuestionsContextLength > 0 && listMultiQuestionsContextLength === 0 && listThreeMultiQuestionsContextLength === 0) {
            able = (Math.floor(Math.random() * 2) + 1)

        } else if (listUnicQuestionsContextLength === 0 && listMultiQuestionsContextLength > 0 && listThreeMultiQuestionsContextLength === 0) {
            able = 3

        } else if (listUnicQuestionsContextLength === 0 && listMultiQuestionsContextLength === 0 && listThreeMultiQuestionsContextLength > 0) {
            able = 4

        } 

        return able

    }, [listUnicQuestionsContextLength, listMultiQuestionsContextLength, listThreeMultiQuestionsContextLength])

    useEffect(() => {
        setNumberPath(numberRandomPath())

    }, [numberRandomPath])

    useEffect(() => {
        setQuestionAnswerButtonNextMain(false)

    }, [setQuestionAnswerButtonNextMain])

    function generateNextQuestion() { // função para gerar uma nova questão para a página Main
        const listFilterMain = listUnicQuestionsContext
            .filter(question => question.questionNumber !== questionMain.questionNumber)

        activePageMain && setQuestionMain(listFilterMain[Math.floor(Math.random() * listFilterMain.length)]) // nova questão
        
        setAnswerDescriptionDisplay(styles.invisibleAnswerDescription)
        setDescriptionDisplay(styles.invisibleDescription)

    }

    function numbersOneTwoGenerateNewQuestion() { // se numberPath for igual a 1 ou 2 executará a função 'generateNewQuestionMain()' ao clicar 
        if (listUnicQuestionsContextLength >= 2 && questionAnswerButtonNextMain && (numberPath === 1 || numberPath === 2)) {
            generateNextQuestion()

        } else if (!questionAnswerButtonNextMain) { // condição: se a questão da página Main não foi respondida
            setAnswerMainQuestionAlert(true)

        } else if (activePageDemo && !listUnicQuestionsContextLength && !listMultiQuestionsContextLength && !listThreeMultiQuestionsContextLength) {
            setNoDataAlert(true)

        }

    }

    function ableNextPage() { // função que habilita a próxima rota
        let able = null
        // numberPath => 1 ou 2 ('/page-main'), 3 ('/page-multi') e 4 ('/page-three-multi')

        if (activePageDemo && (numberPath === 1 || numberPath === 2) && listUnicQuestionsContextLength > 0 && listUnicOptionsContextLength > 0 
        && questionAnswerButtonNextMain) {
            able = '/page-main'

        } else if (activePageDemo && (numberPath === 1 || numberPath === 2) && listUnicQuestionsContextLength === 0 && listUnicOptionsContextLength === 0 
        && questionAnswerButtonNextMain) {
            if (listMultiQuestionsContextLength > 0 && listMultiOptionsContextLength > 0) {
                able = '/page-multi'

            } else if (listThreeMultiQuestionsContextLength > 0 && listThreeMultiOptionsContextLength > 0) {
                able = '/page-three-multi'

            } else {
                able = '/'

            }
 
        } else if (activePageDemo && numberPath === 3 && listUnicQuestionsContextLength === 0 && listMultiQuestionsContextLength > 0 && listThreeMultiQuestionsContextLength === 0 && questionAnswerButtonNextMain) {
            able = '/page-multi'

        } else if (activePageDemo && numberPath === 4 && listUnicQuestionsContextLength === 0 && listMultiQuestionsContextLength === 0 && listThreeMultiQuestionsContextLength > 0 && questionAnswerButtonNextMain) {
            able = '/page-three-multi'

        } else if (activePageMain && (numberPath === 1 || numberPath === 2) && listUnicQuestionsContextLength === 1 && listUnicOptionsContextLength === 1 
        && questionAnswerButtonNextMain) {
            if (listMultiQuestionsContextLength > 0 && listMultiOptionsContextLength > 0) {
                able = '/page-multi'

            } else if (listThreeMultiQuestionsContextLength > 0 && listThreeMultiOptionsContextLength > 0) {
                able = '/page-three-multi'
                
            } else {
                able = '/'

            }

        } else if (activePageMain && (numberPath === 1 || numberPath === 2) && listUnicQuestionsContextLength === 0 && listUnicOptionsContextLength === 0 
        && questionAnswerButtonNextMain) {
            if (listMultiQuestionsContextLength > 0 && listMultiOptionsContextLength > 0) {
                able = '/page-multi'

            } else if (listThreeMultiQuestionsContextLength > 0 && listThreeMultiOptionsContextLength > 0) {
                able = '/page-three-multi'
                
            } else {
                able = '/'

            }

        } else if (activePageMain && (numberPath === 1 || numberPath === 2) && listUnicQuestionsContextLength > 1 && listUnicOptionsContextLength > 1 
        && questionAnswerButtonNextMain) {
            able = '/page-main'

        } else if (numberPath === 3 && listMultiQuestionsContextLength > 0 && listMultiOptionsContextLength > 0 && questionAnswerButtonNextMain) {
            able = '/page-multi'

        } else if (numberPath === 3 && listMultiQuestionsContextLength === 0 && listMultiOptionsContextLength === 0 && questionAnswerButtonNextMain) {
            if (listThreeMultiQuestionsContextLength > 0 && listThreeMultiOptionsContextLength > 0) {
                able = '/page-three-multi'

            } else {
                able = '/'

            }

        } else if (numberPath === 4 && listThreeMultiQuestionsContextLength > 0 && listThreeMultiOptionsContextLength > 0 && questionAnswerButtonNextMain) {
            able = '/page-three-multi'

        } else if (numberPath === 4 && listThreeMultiQuestionsContextLength === 0 && listThreeMultiOptionsContextLength === 0 && questionAnswerButtonNextMain) {
            able = '/'

        }
                        
        return able
    }

    return(
        <div className={styles.main}> 
            <div className={styles.containerTextTitle}>
                <h1 className={styles.textTitle}>Architecture Questions - Randomly</h1>
            </div>

            <div className={styles.containerQuestionMenuTools}>
                <Question 
                    question={question}
                    questionNumber={questionNumber}
                    questionMain={questionMain}           
                />

                <MenuTools 
                    questionMain={questionMain} 
                    optionMain={optionMain}
                    optionMainNumberId={optionMainNumberId}
                    setAnswerDescriptionDisplay={setAnswerDescriptionDisplay}
                    setDescriptionDisplay={setDescriptionDisplay}              
                />

            </div>

            <Options
                optionColorStyle={optionColorStyle}
                inputColorStyle={inputColorStyle}   
                setCaptureValue={setCaptureValue}
                optionMain={optionMain}
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
                answer={answer}
                optionColorStyle={optionColorStyle}
                optionValidateStyle={optionValidateStyle}
                optionInvalidateStyle={optionInvalidateStyle}
                inputColorStyle={inputColorStyle}
                inputValidateStyle={inputValidateStyle}
                inputInvalidateStyle={inputInvalidateStyle}                      
                captureValue={captureValue}
                optionMain={optionMain}
                optNum1={optNum1}
                optNum2={optNum2}
                optNum3={optNum3}
                optNum4={optNum4}
                optNum5={optNum5}
                setQuestionAnswerButtonNextMain={setQuestionAnswerButtonNextMain}
                activePopupRepeatedAlternativesMain={activePopupRepeatedAlternativesMain}
                setActivePopupRepeatedAlternativesMain={setActivePopupRepeatedAlternativesMain}
                setItem={setItem}
            />

            <AnswerDescription
                questionMain={questionMain}
                answer={answer}
                iconDescription={iconDescription}
                description={description}
                answerDescriptionDisplay={answerDescriptionDisplay}
                descriptionDisplay={descriptionDisplay}
                setDescriptionDisplay={setDescriptionDisplay}
                item={item}
            />

            <Link
                to={ableNextPage()}
            >
                <ButtonNext
                    onClick={numbersOneTwoGenerateNewQuestion} 
                    questionAnswerButtonNextMain={questionAnswerButtonNextMain}
                />
            </Link>
        
            <ModalResults />

            {/* PopupRepeatedAlternatives */}
            {activePopupRepeatedAlternativesMain && 
                <PopupRepeatedAlternatives 
                    specificStyles={styles.popupRepeatedMain} 
                    textPopup={"There are duplicate alternatives. Please, before answering, update the alternatives in the Menu so that each one is unique, and then proceed with your response."} 
                    activePopup={setActivePopupRepeatedAlternativesMain}
                />
            }

            {/* PopupAlertMessage */}
            {answerMainQuestionAlert &&
                <PopupAlertMessage 
                    text="Oops!!! Please answer the question before moving on to the next one!"
                    activePopup={setAnswerMainQuestionAlert}
                    specificStyles={styles.popupAlertMessage}
                />
            }

            {noDataAlert &&
                <PopupAlertMessage 
                    text="No data found. Need to mock the API."
                    activePopup={setNoDataAlert}
                    specificStyles={styles.popupAlertMessage}
                />
            }

            {activePopupZeroTimerMainAlert && 
                <PopupAlertMessage 
                    text='Oops! Time is up! Please pay attention to the exam time limit.' 
                    specificStyles={styles.popupAlertMessage}
                    activePopup={setActivePopupZeroTimerMainAlert}
                />
            }

                                  
        </div>
    )

}

export default Main;
