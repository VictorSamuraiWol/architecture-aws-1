import { Link } from 'react-router-dom';
import Answer from '../Main/Answer';
import ButtonAnswer from '../Main/ButtonAnswer';
import ButtonNext from '../Main/ButtonNext';
import MultiOptions from './MultiOptions';
import Question from '../Main/Question';
import styles from './MultiMain.module.css';
import { useState } from 'react';
import ModalResults from '../ModalResults';

function MultiMain({ question, multiOptions, setMultiOptions, answer, answerText, srcImg, descriptionP, answerDisplay, setAnswerDisplay, descriptionDisplay, setDescriptionDisplay, optionValidate, optionInvalidate, randomIndexMulti }) {

    const [optionColorMulti, setOptionColorMulti] = useState(styles.optionColorMulti)
    const [captureValueMulti, setCaptureValueMulti] = useState([])

    // pegar o estado da variável booleana que torna 'true' toda vez que responder, seja na opção correta ou errada na página multi, como na variável booleana 'questionAnwer', será utilizada no componente 'ButtonNext' para saber se pode ir para a próxima página somente depois de responder
    const [questionAnswerButtonNextMulti, setQuestionAnswerButtonNextMulti] = useState(false)

    return (
        <div className={styles.multiMain}>
            <Question question={question} />

            <MultiOptions
                multiOptions={multiOptions}
                setMultiOptions={setMultiOptions}
                optionColorMulti={optionColorMulti}
                setCaptureValueMulti={setCaptureValueMulti}
                randomIndexMulti={randomIndexMulti}
                captureValueMulti={captureValueMulti}
            />
            
            <ButtonAnswer            
                answerDisplay={answerDisplay}
                setAnswerDisplay={setAnswerDisplay}
                descriptionDisplay={descriptionDisplay}
                setDescriptionDisplay={setDescriptionDisplay}              
                answer={answer}
                optionValidate={optionValidate}
                optionInvalidate={optionInvalidate}
                optionColorMulti={optionColorMulti}
                multiOptions={multiOptions}
                setMultiOptions={setMultiOptions}
                captureValueMulti={captureValueMulti}
                setQuestionAnswerButtonNextMulti={setQuestionAnswerButtonNextMulti}
            />

            <Answer 
                answer={answer}
                answerText={answerText}
                srcImg={srcImg} 
                descriptionP={descriptionP}
                answerDisplay={answerDisplay}
                setAnswerDisplay={setAnswerDisplay}
                descriptionDisplay={descriptionDisplay}
                setDescriptionDisplay={setDescriptionDisplay}
                multiOptions={multiOptions}
            />

            {/* fazer com que o Link só mude a página se tiver respondido alguma opção, seja correta ou incorreta */}
            <Link 
                to={questionAnswerButtonNextMulti === true ? '/' : null}
            >
                <ButtonNext 
                    questionAnswerButtonNextMulti={questionAnswerButtonNextMulti}
                />
            </Link>

            <ModalResults />              
        </div>
    )
}

export default MultiMain;
