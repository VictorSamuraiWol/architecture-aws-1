import styles from './PageMain.module.css'
import Header from '../../Components/Header'
import Main from '../../Components/Main'
import Loader from '../../Components/Loader'
import { useContext, useEffect, useRef, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { DataContext } from '../../Components/DataContext'

function PageMain() {

    const [answerDisplay, setAnswerDisplay] = useState(styles.invisible);
    const [descriptionDisplay, setDescriptionDisplay] = useState(styles.invisible);   
    const [optionValidate] = useState(styles.optionValidate);
    const [optionInvalidate] = useState(styles.optionInvalidate);
    const [listQuestions, setListQuestions] = useState([]);
    const [nextQuestion, setNextQuestion] = useState('');
    const [listOptions, setListOptions] = useState('');
    const [randomIndex, setRandomIndex] = useState('');
  
    // pegando as variáveis através do 'useContext' do componente 'DataContext'
    const { listUnicQuestionsContext, listUnicQuestionsContextLength, loading  } = useContext(DataContext)
    
    // pegando a variável booleana para habilitar ou desabilitar tudo quando tiver conectado ou não com a api usando 'useOutletContext()' da página base e o número random da questão anterior que foi respondida
    const { requestData, setRequestData, setActivePageFormsQuestionsOptions } = useOutletContext();

    // O useRef serve para armazenar um valor mutável que persiste entre renders sem provocar re-render do componente
    const lastRandomMainRef = useRef(null)  
    
    // função para garantir que o novo número aleatório seja sempre diferente do anterior
    const uniqueRandomMain = (dataLength) => { // função para obter um número randômico diferente do anterior, evitando repetição
        if (dataLength <= 1) return 0

        let random

        do {
            random = Math.floor(Math.random() * dataLength)

        }
        while (random === lastRandomMainRef.current) // repete até obter um número diferente

        lastRandomMainRef.current = random

        return random            
    
    } 
   
    useEffect(() => {
        if (!listUnicQuestionsContext || !listUnicQuestionsContextLength) return; // se a lista de questões não existir, retorne
     
        // toda a lista de questões da página Main
        setListQuestions(listUnicQuestionsContext)

        // habilitar os icones de som, imagem e footer presentes na 'página Base' ao renderizar o conteúdo da página Main
        setRequestData(true)

        // tornar o cronômetro e os icones dos audios ativos ao sair da página Forms
        setActivePageFormsQuestionsOptions(false)

        // atribuindo um número random, mas diferente do anterior para não se repetir após mudar a página, repetir somente depois
        const random = uniqueRandomMain(listUnicQuestionsContextLength)
        const next = listUnicQuestionsContext[random]

        setRandomIndex(random)
        setNextQuestion(next) 

    }, [listUnicQuestionsContext, listUnicQuestionsContextLength, setActivePageFormsQuestionsOptions, setRequestData])

    return(
        <div>
            {requestData && <div 
                id='allQuestionsMainId' 
                className={`${styles.allQuestionsMainClass} allquestions`} 
                key={nextQuestion.id}

            >        
                {nextQuestion &&
                    <Header 
                        title="Architecture Questions - Randomly"
                    />
                    
                }
                
                {nextQuestion &&
                    <Main 
                        question={nextQuestion.question}
                        answer={nextQuestion.answer}
                        srcImg={nextQuestion.srcImg}
                        descriptionP={nextQuestion.descriptionP}
                        elementId={nextQuestion.id}
                        numberQuestion={nextQuestion.numberQuestion}
                        answerDisplay={answerDisplay}
                        setAnswerDisplay={setAnswerDisplay}
                        descriptionDisplay={descriptionDisplay}
                        setDescriptionDisplay={setDescriptionDisplay}
                        optionValidate={optionValidate}
                        optionInvalidate={optionInvalidate}
                        randomIndex={randomIndex}
                        listOptions={listOptions}
                        setListOptions={setListOptions}                       
                        uniqueRandomMain={uniqueRandomMain}
                        listQuestions={listQuestions}
                        setNextQuestion={setNextQuestion}
                        setRandomIndex={setRandomIndex}                        
                        nextQuestion={nextQuestion}                    
                    />
                }

                {loading && <Loader />}            

            </div>}

        </div>
    )

}

export default PageMain
