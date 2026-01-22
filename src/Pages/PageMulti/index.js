import styles from './PageMulti.module.css'
import Header from '../../Components/Header'
import MultiMain from '../../Components/MultiMain'
import Loader from '../../Components/Loader'
import { useContext, useEffect, useRef, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { DataContext } from '../../Components/DataContext'

function PageMulti() {
    
    const [listMultiQuestions, setListMultiQuestions] = useState([])
    const [multiQuestion, setMultiQuestion] = useState([])
    const [listMultiOptions, setListMultiOptions] = useState([])
    const [answerDisplay, setAnswerDisplay] = useState(styles.invisible)
    const [descriptionDisplay, setDescriptionDisplay] = useState(styles.invisible)

    // pegando as variáveis através do 'useContext' do componente 'DataContext'
    const { listMultiQuestionsContext, listMultiQuestionsContextLength, loading } = useContext(DataContext)

    // pegando a variável booleana para habilitar ou desabilitar tudo quando tiver conectado ou não com a api usando 'useOutletContext()' da página base e o número random da questão anterior que foi respondida
    const { requestData, setRequestData, setActivePageFormsQuestionsOptions } = useOutletContext();

    // O useRef serve para armazenar um valor mutável que persiste entre renders sem provocar re-render do componente, neste caso, guarda o último número randômico
    // usado na função 'uniqueRandomMulti'
    const lastRandomMultiRef = useRef(null)  

    // função para garantir que o novo número aleatório seja sempre diferente do anterior
    const uniqueRandomMulti = (dataLength) => {
        if (dataLength <= 1) return 0

        let random

        do {
            random = Math.floor(Math.random() * dataLength)

        }
        while (random === lastRandomMultiRef.current) // repete até obter um número diferente
        
        lastRandomMultiRef.current = random // atualiza o último número gerado
        
        return random                
    
    }
    
    useEffect(() => {
        if (!listMultiQuestionsContext || !listMultiQuestionsContextLength) return; // se a lista de questões não existir, retorne

        // toda a lista de questões da página Multi
        setListMultiQuestions(listMultiQuestionsContext)       
    
        // habilitar os icones de som, imagem e footer presentes na 'página base' ao renderizar o conteúdo da página Multi
        setRequestData(true)

        // verifica se a página Forms está ativa
        setActivePageFormsQuestionsOptions(false)
        
        // atribuindo um número random, mas diferente do anterior para não se repetir após mudar a página, repetir somente depois
        const random = uniqueRandomMulti(listMultiQuestionsContextLength)
        const next = listMultiQuestionsContext[random]

        setMultiQuestion(next)          

    }, [listMultiQuestionsContext, listMultiQuestionsContextLength, setActivePageFormsQuestionsOptions, setRequestData])

    return(
        <div>     
            {requestData && <div
                id='allQuestionsMultiId' 
                className={styles.allQuestionsMultiClass} 
                key={multiQuestion.id}
            >
                {multiQuestion &&
                    <Header 
                        title="Architecture Questions - Randomly"
                    />
                }

                {multiQuestion &&
                    <MultiMain 
                        question={multiQuestion.question} 
                        answer={multiQuestion.answerText}
                        srcImg={multiQuestion.srcImg}
                        descriptionP={multiQuestion.descriptionP}
                        elementId={multiQuestion.id}
                        numberQuestion={multiQuestion.numberQuestion}
                        listMultiOptions={listMultiOptions}
                        setListMultiOptions={setListMultiOptions}
                        answerDisplay={answerDisplay}
                        setAnswerDisplay={setAnswerDisplay}
                        descriptionDisplay={descriptionDisplay}
                        setDescriptionDisplay={setDescriptionDisplay}
                        uniqueRandomMulti={uniqueRandomMulti}
                        multiQuestion={multiQuestion}
                        setMultiQuestion={setMultiQuestion}
                        listMultiQuestions={listMultiQuestions}
                    />
                }

                {loading && <Loader />}           
            
            </div>}
               
        </div>

    )
}

export default PageMulti
