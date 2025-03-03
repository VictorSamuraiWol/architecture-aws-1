import styles from './NewPageMain.module.css';
import Header from '../../Components/Header';
import Main from '../../Components/Main';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function NewPageMain() {

    const [answerDisplay, setAnswerDisplay] = useState(styles.invisible);
    const [descriptionDisplay, setDescriptionDisplay] = useState(styles.invisible);   
    const [optionValidate, setOptionValidate] = useState(styles.optionValidate);
    const [optionInvalidate, setOptionInvalidate] = useState(styles.optionInvalidate);
    const [listQuestions, setListQuestions] = useState([]);
    const [nextQuestions, setNextQuestions] = useState('');
    const [randomIndex, setRandomIndex] = useState('');
    const [nextOptions, setNextOptions] = useState('');

    // pegando a variável booleana para habilitar ou desabilitar o icone quando tiver conectado ou não com a api usando 'useOutletContext()' da página base
    const { setAppearSound } = useOutletContext(); 

    useEffect(() => {
      fetch("http://localhost:3001/questions")
      .then(res => res.json())
      .then(data => {  

        // toda a lista de questões da página main
        setListQuestions(data)

        // gerando um número random e usando para capturar uma questão
        const random = Math.floor(Math.random()*data.length) 
        setRandomIndex(random)  
        setNextQuestions(data[random])

        data && setAppearSound(true)

      })
      .catch(e => console.log(e))

    }, [])

    function funcNewRequest() {     
        //Função que é chamada, caso seja necessário, ao clicar no botão Next para mudar de página, no momento sem código.

    }

    return(
        <div>
            <div className='allquestions' key={nextQuestions.id}>        
                {nextQuestions &&
                    <Header 
                        title={nextQuestions.title}
                        nextQuestions={nextQuestions}
                    />
                }

                {nextQuestions && 
                    <Main 
                        question={nextQuestions.question} 
                        answer={nextQuestions.answer} 
                        srcImg={nextQuestions.srcImg}
                        descriptionP={nextQuestions.descriptionP}
                        elementId={nextQuestions.elementId}
                        answerDisplay={answerDisplay}
                        setAnswerDisplay={setAnswerDisplay}
                        descriptionDisplay={descriptionDisplay}
                        setDescriptionDisplay={setDescriptionDisplay}
                        optionValidate={optionValidate}
                        optionInvalidate={optionInvalidate}
                        randomIndex={randomIndex}
                        nextOptions={nextOptions}
                        setNextOptions={setNextOptions}                       
                        newRequest={funcNewRequest}
                    />
                }                  

            </div>

        </div>
    )

}

export default NewPageMain
