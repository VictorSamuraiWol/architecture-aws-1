import styles from './Question.module.css';
import ModalImageQuestion from '../Modal/ModalImageQuestion';
import imageQuestionNotFound from '../../imgs/imageNotFound.png'
import imageQuestion13 from '../../imgs/question-imgs/question13.png';
import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Question({ question, questionNumber, questionMain, questionMulti, questionThreeMulti }) {

    const { setListImagesQuestions } = useOutletContext()

    const [imagesQuestions] = useState({
    none: imageQuestionNotFound,
    imageQuestion13: imageQuestion13

    })

    useEffect(() => {
        setListImagesQuestions(Object.keys(imagesQuestions)) // captura todos os valores de imagesQuestions

    }, [setListImagesQuestions, imagesQuestions])

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
                        imagesQuestions={imagesQuestions}
                />}
            </h2>

    )
}

export default Question
