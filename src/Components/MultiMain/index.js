import { Link } from 'react-router-dom';
import Answer from '../Main/Answer';
import ButtonAnswer from '../Main/ButtonAnswer';
import ButtonNext from '../Main/ButtonNext';
import MultiOptions from '../Main/MultiOptions';
import Question from '../Main/Question';
import styles from './MultiMain.module.css';
import { useState } from 'react';

function MultiMain({ question, multiOptions, setMultiOptions, answer, srcImg, descriptionP, newRequest, answerDisplay, setAnswerDisplay, descriptionDisplay, setDescriptionDisplay, optionValidate, optionInvalidate }) {

    const [captureMultiOptionTag, setCaptureMultiOptionTag] = useState([])
    const [listAnswer, setListAnswer] = useState([]);
    const [optionColorMulti, setOptionColorMulti] = useState(styles.optionColorMulti) 

    return (
        <div className={styles.multiMain}>
            <Question question={question} />

            <MultiOptions 
                multiOptions={multiOptions}
                setMultiOptions={setMultiOptions}
                setListAnswer={setListAnswer}
                optionColorMulti={optionColorMulti}


                captureMultiOptionTag={captureMultiOptionTag}
                setCaptureMultiOptionTag={setCaptureMultiOptionTag}                            
            />
            
            <ButtonAnswer            
                answerDisplay={answerDisplay}
                setAnswerDisplay={setAnswerDisplay}
                descriptionDisplay={descriptionDisplay}
                setDescriptionDisplay={setDescriptionDisplay}              
                answer={answer}
                captureMultiOptionTag={captureMultiOptionTag}
                setCaptureMultiOptionTag={setCaptureMultiOptionTag}
                optionValidate={optionValidate}
                optionInvalidate={optionInvalidate}
                listAnswer={listAnswer}
                optionColorMulti={optionColorMulti}
                setOptionColorMulti={setOptionColorMulti}
             
            />

            <Answer 
                answer={answer} 
                srcImg={srcImg} 
                descriptionP={descriptionP}
                answerDisplay={answerDisplay}
                setAnswerDisplay={setAnswerDisplay}
                descriptionDisplay={descriptionDisplay}
                setDescriptionDisplay={setDescriptionDisplay}
            />

            <Link to={'/next'}>
                <ButtonNext 
                    newRequest={newRequest} 
                />
            </Link>
            
        </div>
    )
}

export default MultiMain;
