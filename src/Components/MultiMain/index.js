import { Link } from 'react-router-dom';
import Answer from '../Main/Answer';
import ButtonAnswer from '../Main/ButtonAnswer';
import ButtonNext from '../Main/ButtonNext';
import MultiOptions from '../Main/MultiOptions';
import Question from '../Main/Question';
import styles from './MultiMain.module.css';
import { useState } from 'react';

function MultiMain({ question, multiOptions, setMultiOptions, answer, answerText, srcImg, descriptionP, newRequest, answerDisplay, setAnswerDisplay, descriptionDisplay, setDescriptionDisplay, optionValidate, optionInvalidate, randomIndexMulti }) {

    const [optionColorMulti, setOptionColorMulti] = useState(styles.optionColorMulti)
    const [captureValueMulti, setCaptureValueMulti] = useState([]); 

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

            <Link to={'/'}>
                <ButtonNext 
                    newRequest={newRequest} 
                />
            </Link>
            
        </div>
    )
}

export default MultiMain;
