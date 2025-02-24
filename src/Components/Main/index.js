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

    return(
        <div className={styles.main}>
            <Question question={question} />

            <Options  
                randomIndex={randomIndex}
                optionColor={optionColor}
                nextOptions={nextOptions}
                setNextOptions={setNextOptions}        
                setCaptureValue={setCaptureValue}
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
