import styles from './NewPageMain.module.css';
import Header from '../../Components/Header';
import Main from '../../Components/Main';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Loader from '../../Components/Loader';

function NewPageMain() {
    const [answerDisplay, setAnswerDisplay] = useState(styles.invisible);
    const [descriptionDisplay, setDescriptionDisplay] = useState(styles.invisible);   
    const [optionValidate, setOptionValidate] = useState(styles.optionValidate);
    const [optionInvalidate, setOptionInvalidate] = useState(styles.optionInvalidate);
    const [listQuestions, setListQuestions] = useState([]);
    const [nextQuestions, setNextQuestions] = useState('');
    const [randomIndex, setRandomIndex] = useState('');
    const [nextOptions, setNextOptions] = useState('');

    
    
    // pegando a variável booleana para habilitar ou desabilitar tudo quando tiver conectado ou não com a api usando 'useOutletContext()' da página base e o número random da questão anterior que foi respondida
    const { requestData, setRequestData, lastRandomMain, setLastRandomMain, setActivePageFormsQuestionsOptions, loading, setLoading } = useOutletContext();

    useEffect(() => {
        // habilitar o loading
        setLoading(true)

        fetch("http://localhost:3001/questions")
        .then(res => res.json())
        .then(data => {
            if (!data) {
                throw new Error("Dados inválidos");

            } else {

                // toda a lista de questões da página main
                setListQuestions(data)

                // habilitar os icones de som, imagem e footer presentes na 'página base' ao renderizar o conteúdo da página main 
                setRequestData(true)
                
                // atribuindo um número random, mas diferente do anterior para não se repetir após mudar a página, repetir somente depois
                const random = uniqueRandomMain(data.length) 
                setRandomIndex(random)  
                setNextQuestions(data[random])

                // tornar o cronômetro e os icones dos audios ativos ao sair da página forms
                setActivePageFormsQuestionsOptions(false)

                // desabilitar o loading
                setLoading(false)

            }
            
        })
        .catch(e => console.log(e))

        // desabilitar o loading
        setLoading(false)

    }, [])

    // função para garantir que o novo número aleatório seja sempre diferente do anterior
    function uniqueRandomMain(dataLength) {
        let random;
        do {
            random = Math.floor(Math.random()*dataLength) 
        }
        while (random === lastRandomMain) // repete até obter um número diferente
        
        setLastRandomMain(random) // atualiza o último número gerado
        return random                
    
    }

    return(
        <div>
            {requestData && <div 
                id='allQuestionsMainId' 
                className={`${styles.allQuestionsMainClass} allquestions`} 
                key={nextQuestions.id}
            >        
                {nextQuestions &&
                    <Header 
                        title={nextQuestions.title}

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
                        uniqueRandomMain={uniqueRandomMain}
                        listQuestions={listQuestions}
                        setNextQuestions={setNextQuestions}
                        setRandomIndex={setRandomIndex}

                    />
                }  

                {loading && <Loader />}            

            </div>}

        </div>
    )

}

export default NewPageMain
