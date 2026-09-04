import styles from './Main.module.css'
import Question from '../Question'
import Options from './Options'
import ButtonAnswer from '../ButtonAnswer'
import ButtonNext from '../ButtonNext'
import AnswerDescription from '../AnswerDescription'
import MenuTools from '../MenuTools'
import PopupRepeatedAlternatives from '../Popups/PopupRepeatedAlternatives'
import ModalResults from '../ModalResults'
import zeroImage from '../../imgs/zero-question.png'
import PopupAlertMessage from '../Popups/PopupAlertMessage'
import { useCallback, useContext, useEffect, useState } from 'react'
import { DataContext } from '../DataContext'
import { Link, useOutletContext } from 'react-router-dom'

function Main({ 
    question, answer, imageDescription, description, questionNumber, answerDescriptionDisplay, descriptionDisplay, 
    setAnswerDescriptionDisplay, setDescriptionDisplay, uniqueRandomMain, questionMain, setQuestionMain, 
    optionMain, optionMainNumberId, optNum1, optNum2, optNum3, optNum4, optNum5, activeZeroImgMain, activePageDemo, activePageMain
}) {

    // pegando as variáveis através do 'useContext' do componente 'DataContext'
    const { listUnicQuestionsContext, listUnicQuestionsContextLength, listMultiQuestionsContextLength, listThreeMultiQuestionsContextLength } = useContext(DataContext)

    const { activePopupZeroTimerMainAlert, setActivePopupZeroTimerMainAlert } = useOutletContext()

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
    const [addOneSingleChoiceAlert, setAddOneSingleChoiceAlert] = useState(false) // ativa o componente PopupAlertMessage

    // pegar o estado da variável booleana que torna 'true' toda vez que responder, seja na opção correta ou errada na página main, como na variável booleana 'questionAnwer', será utilizada no componente 'ButtonNext' para saber se pode ir para a próxima página somente depois de responder
    const [questionAnswerButtonNextMain, setQuestionAnswerButtonNextMain] = useState(false)

    const [item, setItem] = useState('') // captura o item correto

    const [numberPath, setNumberPath] = useState(null) // Gera um número aleatório entre 1 e 4 dependendo dos tipos de questões disponíveis

    const numberRandomPath = useCallback(() => {
    let listNumbers
    let able

    if (listUnicQuestionsContextLength > 0 && listMultiQuestionsContextLength > 0 && listThreeMultiQuestionsContextLength > 0) {
        able = (Math.floor(Math.random() * 4) + 1)

    } else if (listUnicQuestionsContextLength > 0 && listMultiQuestionsContextLength === 0 && listThreeMultiQuestionsContextLength === 0) {
        able = (Math.floor(Math.random() * 2) + 1)

    } else if (listUnicQuestionsContextLength > 0 && listMultiQuestionsContextLength > 0 && listThreeMultiQuestionsContextLength === 0) {
        listNumbers = [1, 2, 3]
        able = listNumbers[Math.floor(Math.random() * listNumbers.length)]

    } else if (listUnicQuestionsContextLength > 0 && listMultiQuestionsContextLength === 0 && listThreeMultiQuestionsContextLength > 0) {
        listNumbers = [1, 2, 4]
        able = listNumbers[Math.floor(Math.random() * listNumbers.length)]

    }

    return able

    }, [listUnicQuestionsContextLength, listMultiQuestionsContextLength, listThreeMultiQuestionsContextLength])

    useEffect(() => {
        setNumberPath(numberRandomPath())

    }, [numberRandomPath])

    function generateNewQuestionMain() { // função para gerar uma nova questão para a página Main
        // atribuindo um número random, mas diferente do anterior para não se repetir após mudar a página, repetir somente depois
        const random = uniqueRandomMain(listUnicQuestionsContextLength)
        const next = listUnicQuestionsContext[random]

        activePageMain && setQuestionMain(next) // nova questão

    }

    function numbersOneTwoGenerateNewQuestionMain() { // se numberPath for igual a 1 ou 2 executará a função 'generateNewQuestionMain()' ao clicar 
        if (listUnicQuestionsContextLength >= 2 && questionAnswerButtonNextMain === true && (numberPath === 1 || numberPath === 2)) {
        // condição: se a questão da página Main já foi respondida 
            generateNewQuestionMain()
            setAnswerDescriptionDisplay(styles.invisibleAnswerDescription)
            setDescriptionDisplay(styles.invisibleDescription)

        } else if (questionAnswerButtonNextMain === false) {
            setAnswerMainQuestionAlert(true)

        } else if (activePageDemo && !listUnicQuestionsContextLength && !listMultiQuestionsContextLength && !listThreeMultiQuestionsContextLength) {
            setNoDataAlert(true)

        } else if (activePageDemo && !listUnicQuestionsContextLength && (listMultiQuestionsContextLength > 0 || listThreeMultiQuestionsContextLength > 0)) {
            setAddOneSingleChoiceAlert(true)

        }

    }

    function ablePageMulti() { // função que muda a rota da página Main para a página Multi, 
    // só mudará para a página Multi quando o numberPath for igual a '3' e permanecerá na página Main se o numberPath for igual a '1' ou '2',
    // a probabilidade de permanecer na página Main é de 66% (números 1 ou 2) e de ir para a página Multi é de 33% (número 3)
        let able = null

        if (listMultiQuestionsContextLength > 0 && questionAnswerButtonNextMain === true && numberPath === 3) {
        // condição: se a questão da página Main foi respondida e o numberPath for igual a '3' 
            able = '/page-multi'

        } else if (listMultiQuestionsContextLength > 0 && questionAnswerButtonNextMain === true && (numberPath === 1 || numberPath === 2) && listUnicQuestionsContextLength < 2) {
        // condição: se a questão da página Main foi respondida e o numberPath for igual a '1' ou '2' e tiver menos de 2 questões únicas
            able = '/page-multi'

        } else if (listThreeMultiQuestionsContextLength > 0 && questionAnswerButtonNextMain === true && numberPath === 4) {
        // condição: se a questão da página Main foi respondida e o numberPath for igual a '4'
            able = '/page-three-multi'

        }

        return able

    }

    function ablePageMain() {
        let able = null

        if (questionAnswerButtonNextMain === true && listUnicQuestionsContextLength > 0) {
            able = '/page-main'

        } else if (!listUnicQuestionsContextLength) {
            able = '/'

        }

        return able

    }

    return(
        <div className={styles.main}>
            {activeZeroImgMain === false &&
            <>
                <div className={styles.containerQuestionMenuTools}>
                    <Question 
                        question={question}
                        questionNumber={questionNumber}             
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
                    questionNumber={questionNumber}
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
                    answer={answer}
                    imageDescription={imageDescription} 
                    description={description}
                    answerDescriptionDisplay={answerDescriptionDisplay}
                    descriptionDisplay={descriptionDisplay}
                    setDescriptionDisplay={setDescriptionDisplay}
                    item={item}
                />
    
                <Link
                    to={activePageDemo ? ablePageMain() : ablePageMulti()} // se 'numberPath' é igual a '3' ou '4' executa essa função 'ablePageMulti()', se for '1' ou '2' executa a função da props onClick 'numbersOneTwoGenerateNewQuestionMain'
                >
                    <ButtonNext
                        onClick={numbersOneTwoGenerateNewQuestionMain} // se 'numberPath' for '1' ou '2' executa essa função 'numbersOneTwoGenerateNewQuestionMain', se for '3' ou '4' executa a função 'ablePageMulti()' do Link  
                        questionAnswerButtonNextMain={questionAnswerButtonNextMain}
                    />
                </Link>
            
                <ModalResults />

            </>}

            {/* imagem que aparece quando não tem questões disponíveis */}
            {activeZeroImgMain &&
                <img 
                    src={zeroImage} 
                    alt='zero img'
                    className={styles.zeroImg}
                />
            }

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

            {addOneSingleChoiceAlert &&
                <PopupAlertMessage 
                    text="Add at least one single-choice question to use the app."
                    activePopup={setAddOneSingleChoiceAlert}
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
