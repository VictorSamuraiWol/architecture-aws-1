import styles from './Question.module.css';
import ModalImageQuestion from '../Modal/ModalImageQuestion';

function Question({ question, questionNumber, questionMain, questionMulti, questionThreeMulti }) {

    return(     
        question &&
            <h2 
                className={styles.question}
            >
                {`${questionNumber}) ${question}`}

                {/* esta modal só irá aparecer se tiver uma imagem na questão para mostrar */}
                {(questionMain?.imageQuestion || questionMulti?.imageQuestion || questionThreeMulti?.imageQuestion) && 
                    <ModalImageQuestion 
                        questionMain={questionMain} 
                        questionMulti={questionMulti}
                />}
            </h2>

    )
}

export default Question
