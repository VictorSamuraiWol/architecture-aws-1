import styles from './Main.module.css'
import Answer from './Answer';
import ButtonAnswer from './ButtonAnswer';
import Question from './Question';
import ButtonNext from './ButtonNext';
import { Link} from 'react-router-dom';
import Options from './Options';

function Main({ question, answer, srcImg, descriptionP, newRequest, indexQuestions, optionsMainAble, optionsAble, optionsDisablePageMain, validate }) {

    return(
        <div className={styles.main}>
            <Question question={question} />
            <Options 
                indexQuestions={indexQuestions} 
                optionsMainAble={optionsMainAble} 
                optionsAble={optionsAble} 
                optionsDisablePageMain={optionsDisablePageMain}
                validate={validate} 
            />
            <ButtonAnswer />
            <Answer 
                answer={answer} 
                srcImg={srcImg} 
                descriptionP={descriptionP} 
            />
            <Link to={'/next'}>
                <ButtonNext newRequest={newRequest} />
            </Link>
        </div>
    )
}

export default Main;
