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
    question, answer, srcImg, descriptionP, numberQuestion, answerDisplay, descriptionDisplay, 
    setAnswerDisplay, setDescriptionDisplay, listOptions, setListOptions, uniqueRandomMain, 
    setNextQuestion, nextQuestion, listQuestions
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
    const [optNum1, setOptNum1] = useState('')
    const [optNum2, setOptNum2] = useState('')
    const [optNum3, setOptNum3] = useState('')
    const [optNum4, setOptNum4] = useState('')
    const [optNum5, setOptNum5] = useState('')
    const [optionMap, setOptionMap] = useState([]) // mapear todas as opções presente na página main
    const [optionMapNumberId, setOptionMapNumberId] = useState([]) // capturar o número e a ID da opção atual do componente Main
    const [activePopupRepeatedAlternativesMain, setActivePopupRepeatedAlternativesMain] = useState(false) // ativa o componente PopupRepeatedAlternatives na Main

    // pegar o estado da variável booleana que torna 'true' toda vez que responder, seja na opção correta ou errada na página main, como na variável booleana 'questionAnwer', será utilizada no componente 'ButtonNext' para saber se pode ir para a próxima página somente depois de responder
    const [questionAnswerButtonNextMain, setQuestionAnswerButtonNextMain] = useState(false)

    const [item, setItem] = useState('') // captura o item correto

    const [numberPath] = useState(Math.floor(Math.random() * 3) + 1) // Gera um número aleatório entre 1 e 3

    function generateNewQuestionMain() { // função para gerar uma nova questão para a página Main
        // atribuindo um número random, mas diferente do anterior para não se repetir após mudar a página, repetir somente depois
        const random = uniqueRandomMain(listUnicQuestionsContextLength)
        const next = listUnicQuestionsContext[random]

        setNextQuestion(next) // nova questão

    } 
    
    function numbersOneTwoGenerateNewQuestionMain() { // se numberPath for igual a 1 ou 2 executará a função 'generateNewQuestionMain()' ao clicar 
        if (questionAnswerButtonNextMain === true) {
        // condição: se a questão da página Main já foi respondida 
            (numberPath === 1 || numberPath === 2) && generateNewQuestionMain()

        } else if (questionAnswerButtonNextMain === false) {
            alert('Ops!!! Por favor, responda a questão antes de ir para a próxima!')

        }

    }

    return(
        <div className={styles.main}>           
            <Question 
                question={question}             
            />

            <MenuTools 
                nextQuestion={nextQuestion} 
                optionMap={optionMap}
                optionMapNumberId={optionMapNumberId}               
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
                listOptions={listOptions}
                setListOptions={setListOptions}        
                setCaptureValue={setCaptureValue}
                optNum1={optNum1}
                optNum2={optNum2}
                optNum3={optNum3}
                optNum4={optNum4}
                optNum5={optNum5}
                setOptNum1={setOptNum1}
                setOptNum2={setOptNum2}
                setOptNum3={setOptNum3}
                setOptNum4={setOptNum4}
                setOptNum5={setOptNum5}
                optionMap={optionMap}
                setOptionMap={setOptionMap}
                nextQuestion={nextQuestion}
                setNextQuestion={setNextQuestion}
                setOptionMapNumberId={setOptionMapNumberId}
                listQuestions={listQuestions}
            />

            <ButtonAnswer            
                answerDisplay={answerDisplay}
                setAnswerDisplay={setAnswerDisplay}
                descriptionDisplay={descriptionDisplay}
                answer={answer}
                numberQuestion={numberQuestion}
                optionColorStyle={optionColorStyle}
                optionValidateStyle={optionValidateStyle}
                optionInvalidateStyle={optionInvalidateStyle}
                inputColorStyle={inputColorStyle}
                inputValidateStyle={inputValidateStyle}
                inputInvalidateStyle={inputInvalidateStyle}
                listOptions={listOptions}                      
                captureValue={captureValue}
                optNum1={optNum1}
                optNum2={optNum2}
                optNum3={optNum3}
                optNum4={optNum4}
                optNum5={optNum5}
                setQuestionAnswerButtonNextMain={setQuestionAnswerButtonNextMain}
                optionMap={optionMap}
                activePopupRepeatedAlternativesMain={activePopupRepeatedAlternativesMain}
                setActivePopupRepeatedAlternativesMain={setActivePopupRepeatedAlternativesMain}
                setItem={setItem}
            />

            <AnswerDescription 
                answer={answer}
                srcImg={srcImg} 
                descriptionP={descriptionP}
                numberQuestion={numberQuestion}
                answerDisplay={answerDisplay}
                descriptionDisplay={descriptionDisplay}
                setDescriptionDisplay={setDescriptionDisplay}
                listOptions={listOptions}
                item={item}
            />

            <Link
                to={questionAnswerButtonNextMain === true ? numberPath === 3 && '/page-multi' : null}
                // condição: se a questão da página Main foi respondida e o numberPath for igual a '3' muda para a página Multi, se for igual a 1 ou 2 continuará na rota da página Main e executará a função 'numbersOneTwoGenerateNewQuestionMain()' ao clicar 
            >
                <ButtonNext
                    questionAnswerButtonNextMain={questionAnswerButtonNextMain}
                    onClick={numbersOneTwoGenerateNewQuestionMain} 
                />
            </Link>

            <ModalResults />
                      
        </div>
    )

}

export default Main;
