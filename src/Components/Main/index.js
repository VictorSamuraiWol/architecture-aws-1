import styles from './Main.module.css'
import Question from '../Question'
import Options from './Options'
import ButtonAnswer from '../ButtonAnswer'
import ButtonNext from '../ButtonNext'
import AnswerDescription from '../AnswerDescription'
import MenuTools from '../MenuTools'
import PopupRepeatedAlternatives from '../PopupRepeatedAlternatives'
import ModalResults from '../ModalResults'
import { useContext, useState } from 'react'
import { DataContext } from '../DataContext'
import { Link } from 'react-router-dom'

function Main({ 
    question, answer, imageDescription, description, questionNumber, answerDisplay, descriptionDisplay, 
    setAnswerDisplay, setDescriptionDisplay, uniqueRandomMain, questionMain, setQuestionMain, 
    optionMain, optionMainNumberId, optNum1, optNum2, optNum3, optNum4, optNum5
}) {

    // pegando as variáveis através do 'useContext' do componente 'DataContext'
    const { listUnicQuestionsContext, listUnicQuestionsContextLength } = useContext(DataContext)
   
    const [captureValue, setCaptureValue] = useState('')
    const [optionColorStyle] = useState(styles.optionColorMain)
    const [optionValidateStyle] = useState(styles.optionValidate)
    const [optionInvalidateStyle] = useState(styles.optionInvalidate)
    const [inputColorStyle] = useState(styles.inputOptions)
    const [inputValidateStyle] = useState(styles.inputValidate)
    const [inputInvalidateStyle] = useState(styles.inputInvalidate)
    const [activePopupRepeatedAlternativesMain, setActivePopupRepeatedAlternativesMain] = useState(false) // ativa o componente PopupRepeatedAlternatives na Main

    // pegar o estado da variável booleana que torna 'true' toda vez que responder, seja na opção correta ou errada na página main, como na variável booleana 'questionAnwer', será utilizada no componente 'ButtonNext' para saber se pode ir para a próxima página somente depois de responder
    const [questionAnswerButtonNextMain, setQuestionAnswerButtonNextMain] = useState(false)

    const [item, setItem] = useState('') // captura o item correto

    const [numberPath] = useState(Math.floor(Math.random() * 3) + 1) // Gera um número aleatório entre 1 e 3

    function generateNewQuestionMain() { // função para gerar uma nova questão para a página Main
        // atribuindo um número random, mas diferente do anterior para não se repetir após mudar a página, repetir somente depois
        const random = uniqueRandomMain(listUnicQuestionsContextLength)
        const next = listUnicQuestionsContext[random]

        setQuestionMain(next) // nova questão

    } 
    
    function numbersOneTwoGenerateNewQuestionMain() { // se numberPath for igual a 1 ou 2 executará a função 'generateNewQuestionMain()' ao clicar 
        if (listUnicQuestionsContext.length >= 2 && questionAnswerButtonNextMain === true) {
        // condição: se a questão da página Main já foi respondida 
            (numberPath === 1 || numberPath === 2) && generateNewQuestionMain()

        } else if (questionAnswerButtonNextMain === false) {
            alert('Ops!!! Por favor, responda a questão antes de ir para a próxima!')

        }

    }

    function ablePageMulti() { // função que muda a rota da página Main para a página Multi, 
    // só mudará para a página Multi quando o numberPath for igual a '3' e permanecerá na página Main se o numberPath for igual a '1' ou '2',
    // a probabilidade de permanecer na página Main é de 66% (números 1 ou 2) e de ir para a página Multi é de 33% (número 3)
        let able

        if (questionAnswerButtonNextMain === true && numberPath === 3) {
        // condição: se a questão da página Main foi respondida e o numberPath for igual a '3' 
            able = '/page-multi'

        } else if ((questionAnswerButtonNextMain === true) && (numberPath === 1 || numberPath === 2) && (listUnicQuestionsContext.length < 2)) {
        // condição: se a questão da página Main foi respondida e o numberPath for igual a '1' ou '2' e tiver menos de 2 questões únicas
            able = '/page-multi'

        } 

        return able

    }

    return(
        <div className={styles.main}>           
            <Question 
                question={question}             
            />

            <MenuTools 
                questionMain={questionMain} 
                optionMain={optionMain}
                optionMainNumberId={optionMainNumberId}               
            />

            {activePopupRepeatedAlternativesMain === true && 
                <PopupRepeatedAlternatives 
                    specificStyles={styles.popupRepeatedMain} 
                    textPopup={"Há alternativas repetidas! Por favor, antes de responder, altere as alternativas no Menu para que todas sejam diferentes, e então prossiga respondendo. Obrigado."} 
                    activePopup={setActivePopupRepeatedAlternativesMain}
                />
            }

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
                answerDisplay={answerDisplay}
                setAnswerDisplay={setAnswerDisplay}
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
                answerDisplay={answerDisplay}
                descriptionDisplay={descriptionDisplay}
                setDescriptionDisplay={setDescriptionDisplay}
                item={item}
            />

            <Link
                to={ablePageMulti()} // se 'numberPath' é igual a '3' executa essa função 'ablePageMulti()', se for '1' ou '2' executa a função da props onClick 'numbersOneTwoGenerateNewQuestionMain'               
            >
                <ButtonNext
                    onClick={numbersOneTwoGenerateNewQuestionMain} // se 'numberPath' for '1' ou '2' executa essa função 'numbersOneTwoGenerateNewQuestionMain', se for '3' executa a função 'ablePageMulti()' do Link  
                    questionAnswerButtonNextMain={questionAnswerButtonNextMain}
                />
            </Link>

            <ModalResults />
                      
        </div>
    )

}

export default Main;
