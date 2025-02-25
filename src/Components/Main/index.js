import styles from './Main.module.css'
import Answer from './Answer';
import ButtonAnswer from './ButtonAnswer';
import Question from './Question';
import ButtonNext from './ButtonNext';
import { Link} from 'react-router-dom';
import Options from './Options';
import { useState } from 'react';

function Main({ question, answer, srcImg, descriptionP, newRequest, answerDisplay, descriptionDisplay, setAnswerDisplay, setDescriptionDisplay, optionValidate, optionInvalidate, randomIndex, nextOptions, setNextOptions }) {
   
    const [captureValue, setCaptureValue] = useState('')
    const [optionColor, setOptionColor] = useState(styles.optionColor)
    
    const [optNum1, setOptNum1] = useState('');
    const [optNum2, setOptNum2] = useState('');
    const [optNum3, setOptNum3] = useState('');
    const [optNum4, setOptNum4] = useState('');
    const [optNum5, setOptNum5] = useState('');

    return(
        <div className={styles.main}>
            <Question question={question} />

            <Options  
                randomIndex={randomIndex}
                optionColor={optionColor}
                nextOptions={nextOptions}
                setNextOptions={setNextOptions}        
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
            />

            <ButtonAnswer            
                answerDisplay={answerDisplay}
                setAnswerDisplay={setAnswerDisplay}
                descriptionDisplay={descriptionDisplay}
                setDescriptionDisplay={setDescriptionDisplay}
                answer={answer}
                optionValidate={optionValidate}
                optionInvalidate={optionInvalidate}
                nextOptions={nextOptions}                      
                captureValue={captureValue}
                optionColor={optionColor}
                optNum1={optNum1}
                optNum2={optNum2}
                optNum3={optNum3}
                optNum4={optNum4}
                optNum5={optNum5}
                randomIndex={randomIndex}
            />

            <Answer 
                answer={answer} 
                srcImg={srcImg} 
                descriptionP={descriptionP}
                answerDisplay={answerDisplay}
                descriptionDisplay={descriptionDisplay}
                setDescriptionDisplay={setDescriptionDisplay}
                nextOptions={nextOptions}
            />

            <Link to={'/pageMulti'}>
                <ButtonNext 
                    newRequest={newRequest} 
                />
            </Link>
            
        </div>
    )

}

export default Main;
