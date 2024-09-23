import styles from './Main.module.css'
import Answer from './Answer';
import ButtonAnswer from './ButtonAnswer';
import Question from './Question';
import ButtonNext from './ButtonNext';
import { Link} from 'react-router-dom';
import Options from './Options';

function Main({ question, answer, srcImg, descriptionP, newRequest, optionsMainAble, optionsAble, validate, newOptions, setNewOptions, restartOptions, answerDisplay, descriptionDisplay, setAnswerDisplay, setDescriptionDisplay }) {

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
            />
            <ButtonAnswer 
                setAnswerDisplay={setAnswerDisplay}
                setDescriptionDisplay={setDescriptionDisplay} 
            />
            <Answer 
                answer={answer} 
                srcImg={srcImg} 
                descriptionP={descriptionP}

                answerDisplay={answerDisplay}
                descriptionDisplay={descriptionDisplay}
            />
            <Link to={'/next'}>
                <ButtonNext newRequest={newRequest} />
            </Link>
        </div>
    )
}

export default Main;
