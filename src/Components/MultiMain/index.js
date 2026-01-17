import styles from './MultiMain.module.css';
import Question from '../Question';
import MultiOptions from './MultiOptions';
import ButtonAnswer from '../ButtonAnswer';
import ButtonNext from '../ButtonNext';
import AnswerDescription from '../AnswerDescription';
import MenuTools from '../MenuTools';
import PopupRepeatedAlternatives from '../PopupRepeatedAlternatives';
import ModalResults from '../ModalResults';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MultiMain({ 
    question, listMultiOptions, setListMultiOptions, answer, srcImg, descriptionP, 
    numberQuestion, answerDisplay, setAnswerDisplay, descriptionDisplay, setDescriptionDisplay, optionValidate, 
    optionInvalidate, randomIndexMulti, multiQuestion, setMultiQuestion, listMultiQuestions
}) {

    const [optionColorMulti] = useState(styles.optionColorMulti)
    const [captureValueMulti, setCaptureValueMulti] = useState([])
    const [multiOptionMap, setMultiOptionMap] = useState([]) // mapear todas as opções da página multi    
    const [activePopupRepeatedAlternativesMultiMain, setActivePopupRepeatedAlternativesMultiMain] = useState(false) // ativa o componente PopupRepeatedAlternatives na MultiMain

    // pegar o estado da variável booleana que torna 'true' toda vez que responder, seja na opção correta ou errada na página multi, como na variável booleana 'questionAnwer', será utilizada no componente 'ButtonNext' para saber se pode ir para a próxima página somente depois de responder
    const [questionAnswerButtonNextMulti, setQuestionAnswerButtonNextMulti] = useState(false)

    const [multiOptionMapNumberId, setMultiOptionMapNumberId] = useState([]) // capturar o número e a ID da opção de múltipla escolha atual do componente MultiMain

    return (
        <div className={styles.multiMain}>
            <Question 
                question={question} 
            
            />

            <MenuTools
                multiQuestion={multiQuestion} 
                setMultiQuestion={setMultiQuestion} 
                multiOptionMap={multiOptionMap} 
                setMultiOptionMap={setMultiOptionMap}
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
                optionColorMulti={optionColorMulti}
                setCaptureValueMulti={setCaptureValueMulti}
                randomIndexMulti={randomIndexMulti}
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
                optionValidate={optionValidate}
                optionInvalidate={optionInvalidate}
                optionColorMulti={optionColorMulti}
                listMultiOptions={listMultiOptions}
                setListMultiOptions={setListMultiOptions}
                captureValueMulti={captureValueMulti}
                setQuestionAnswerButtonNextMulti={setQuestionAnswerButtonNextMulti}
                multiOptionMap={multiOptionMap}
                activePopupRepeatedAlternativesMultiMain={activePopupRepeatedAlternativesMultiMain}
                setActivePopupRepeatedAlternativesMultiMain={setActivePopupRepeatedAlternativesMultiMain}

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
                
            />

            {/* fazer com que o Link só mude a página se tiver respondido alguma opção, seja correta ou incorreta */}
            <Link 
                to={questionAnswerButtonNextMulti === true ? '/' : null}
            >
                <ButtonNext 
                    questionAnswerButtonNextMulti={questionAnswerButtonNextMulti}

                    // tornar a resposta invisível ao mudar de questão
                    setAnswerDisplay={setAnswerDisplay}

                    // tornar a descrição invisível ao mudar de questão
                    setDescriptionDisplay={setDescriptionDisplay}

                />
            </Link>

            <ModalResults />
                       
        </div>
    )
}

export default MultiMain;
