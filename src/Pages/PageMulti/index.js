import styles from './PageMulti.module.css';
import MultiMain from '../../Components/MultiMain';
import { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import NotRequest from '../../Components/NotRequest';
import image from '../../imgs/questions-image.png';
import { useOutletContext } from 'react-router-dom';

function PageMulti() {

    const [listMultiQuestions, setListMultiQuestions] = useState([]);
    const [multiQuestions, setMultiQuestions] = useState([]);
    const [multiOptions, setMultiOptions] = useState([]);
    const [answerDisplay, setAnswerDisplay] = useState(styles.invisible);
    const [descriptionDisplay, setDescriptionDisplay] = useState(styles.invisible);
    const [optionValidate, setOptionValidate] = useState(styles.optionValidate);
    const [optionInvalidate, setOptionInvalidate] = useState(styles.optionInvalidate);
    const [randomIndexMulti, setRandomIndexMulti] = useState('');

     // pegando a variável booleana para habilitar ou desabilitar o icone quando tiver conectado ou não com a api usando 'useOutletContext()' da página base
    const { setAppearSound } = useOutletContext(); 

    useEffect(() => {
        fetch("http://localhost:3001/multiQuestions")
        .then(res => res.json())
        .then(data => {        
            // toda a lista de questões da página multi
            setListMultiQuestions(data)       

            // gerando um número random e usando para capturar uma questão
            const random = Math.floor(Math.random()*data.length) 
            setRandomIndexMulti(random)  
            setMultiQuestions(data[random])

            data && setAppearSound(true)
        })
        .catch(e => console.log(e))
  
      }, [])

    function funcNewRequest() {     
        //Função que é chamada, caso seja necessário, ao clicar no botão Next para mudar de página, no momento sem código.

    }

    return(
        <div key={multiQuestions.id}>
            <Header 
                title={multiQuestions.title}
                multiQuestions={multiQuestions}
            />

            {multiQuestions.length !== 0 &&
                <MultiMain 
                    question={multiQuestions.question} 
                    answer={multiQuestions.answer}
                    answerText={multiQuestions.answerText}
                    srcImg={multiQuestions.srcImg}
                    descriptionP={multiQuestions.descriptionP}
                    elementId={multiQuestions.id}
                    multiOptions={multiOptions}
                    setMultiOptions={setMultiOptions}
                    answerDisplay={answerDisplay}
                    setAnswerDisplay={setAnswerDisplay}
                    descriptionDisplay={descriptionDisplay}
                    setDescriptionDisplay={setDescriptionDisplay}
                    optionValidate={optionValidate}
                    optionInvalidate={optionInvalidate}
                    randomIndexMulti={randomIndexMulti}
                    newRequest={funcNewRequest}             
                />
            }

            {multiQuestions.length === 0 &&
                <NotRequest image={image} />
            }      
        </div> 

    )
}

export default PageMulti
