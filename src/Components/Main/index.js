import styles from './Main.module.css'
import Answer from './Answer';
import ButtonAnswer from './ButtonAnswer';
import Question from './Question';
import ButtonNext from './ButtonNext';
import { Link} from 'react-router-dom';
import Options from './Options';
import { useState } from 'react';

function Main({ question, answer, srcImg, descriptionP, newRequest, optionsMainAble, optionsAble, validate, newOptions, setNewOptions, restartOptions, answerDisplay, descriptionDisplay, setAnswerDisplay, setDescriptionDisplay, answerMainDisplay, descriptionMainDisplay, setAnswerMainDisplay, setDescriptionMainDisplay, setRestartOptions, validateAnswerMain, optionValidate, optionInvalidate }) {

    const [optionMain, setOptionMain] = useState([]);    
    const [captureValue, setCaptureValue] = useState('')
    const [optionColor, setOptionColor] = useState(styles.optionColor)    

    return(
        <div className={styles.main}>
            <Question question={question} />

            <Options 
                optionsMainAble={optionsMainAble} 
                optionsAble={optionsAble} 
                validate={validate} 
                newOptions={newOptions}
                setNewOptions={setNewOptions}
                restartOptions={restartOptions}
                setRestartOptions={setRestartOptions} 
                optionMain={optionMain}
                setOptionMain={setOptionMain}
                setCaptureValue={setCaptureValue}
                optionColor={optionColor}
            />

            <ButtonAnswer            
                answerDisplay={answerDisplay}
                descriptionDisplay={descriptionDisplay}
                answerMainDisplay={answerMainDisplay}
                descriptionMainDisplay={descriptionMainDisplay}
                setAnswerDisplay={setAnswerDisplay}
                setDescriptionDisplay={setDescriptionDisplay}
                setAnswerMainDisplay={setAnswerMainDisplay}
                setDescriptionMainDisplay={setDescriptionMainDisplay}
                optionMain={optionMain}
                validateAnswerMain={validateAnswerMain}
                captureValue={captureValue}
                setOptionColor={setOptionColor}
                restartOptions={restartOptions}
                answer={answer}
                optionValidate={optionValidate}
                optionInvalidate={optionInvalidate}
            />

            <Answer 
                answer={answer} 
                srcImg={srcImg} 
                descriptionP={descriptionP}
                answerDisplay={answerDisplay}
                descriptionDisplay={descriptionDisplay}
                setDescriptionDisplay={setDescriptionDisplay}
                answerMainDisplay={answerMainDisplay}
                descriptionMainDisplay={descriptionMainDisplay}
                setDescriptionMainDisplay={setDescriptionMainDisplay}
            />

            <Link to={'/next'}>
                <ButtonNext 
                    newRequest={newRequest} 
                />
            </Link>
            
        </div>
    )

}

export default Main;
