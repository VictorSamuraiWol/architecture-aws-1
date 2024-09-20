import styles from './Main.module.css'
import Answer from './Answer';
import ButtonAnswer from './ButtonAnswer';
import Question from './Question';
import ButtonNext from './ButtonNext';
import { Link} from 'react-router-dom';

function Main({ question, answer, srcImg, descriptionP, elementId, newRequest }) {


    return(
        <div className={styles.main}>
            <Question question={question}></Question>
            <ButtonAnswer></ButtonAnswer>
            <Answer answer={answer} srcImg={srcImg} descriptionP={descriptionP}></Answer>
            <Link to={'/next'}>
                <ButtonNext newRequest={newRequest} />
            </Link>
        </div>
    )
}

export default Main;
