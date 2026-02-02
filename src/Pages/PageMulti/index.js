import styles from './PageMulti.module.css'
import Header from '../../Components/Header'
import MultiMain from '../../Components/MultiMain'
import Loader from '../../Components/Loader'
import { useContext, useEffect, useRef, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { DataContext } from '../../Components/DataContext'

function PageMulti() {
    
    const [questionMulti, setQuestionMulti] = useState('')
    const [optNum1, setOptNum1] = useState('')
    const [optNum2, setOptNum2] = useState('')
    const [optNum3, setOptNum3] = useState('')
    const [optNum4, setOptNum4] = useState('')
    const [optNum5, setOptNum5] = useState('')
    const [optionMulti, setOptionMulti] = useState([]) // mapear todas as opções da página multi    
    const [optionMultiNumberId, setOptionMultiNumberId] = useState([]) // capturar o número e a ID da opção de múltipla escolha atual do componente MultiMain
    const [answerDisplay, setAnswerDisplay] = useState(styles.invisible)
    const [descriptionDisplay, setDescriptionDisplay] = useState(styles.invisible)

    // pegando as variáveis através do 'useContext' do componente 'DataContext'
    const { listMultiQuestionsContext, listMultiQuestionsContextLength, listMultiOptionsContext, loading, setLoading } = useContext(DataContext)

    // pegando a variável booleana para habilitar ou desabilitar tudo quando tiver conectado ou não com a api usando 'useOutletContext()' da página base e o número random da questão anterior que foi respondida
    const { requestData, setRequestData, setActivePageFormsQuestionsOptions } = useOutletContext()

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
        if (!listMultiQuestionsContext || !listMultiQuestionsContextLength) return // se a lista de questões não existir, retorne    
    
        // habilitar os icones de som, imagem e footer presentes na 'página base' ao renderizar o conteúdo da página Multi
        setRequestData(true)

        // verifica se a página Forms está ativa
        setActivePageFormsQuestionsOptions(false)
        
        // atribuindo um número random, mas diferente do anterior para não se repetir após mudar a página, repetir somente depois
        const random = uniqueRandomMulti(listMultiQuestionsContextLength)
        const next = listMultiQuestionsContext[random]

        setQuestionMulti(next)          

    }, [listMultiQuestionsContext, listMultiQuestionsContextLength, setRequestData, setActivePageFormsQuestionsOptions ])

    useEffect(() => {
        if (!listMultiOptionsContext || !listMultiOptionsContext.length) return // se a lista de opções não existir, retorne 

        const randomNumbers = [] // armazena a lista de números randômicos

        // gerando um número para randomizar toda vez que renderizar
        while (randomNumbers.length < 5) { // o comprimento deve ser no máximo o número de opções disponíveis, neste caso '5'
            const random = Math.floor(Math.random() * 5)

            if (!randomNumbers.includes(random)) {
                randomNumbers.push(random)

            }

        }
        
        // gerando números radômicos para alterar a ordem das opções
        setOptNum1(randomNumbers[0])
        setOptNum2(randomNumbers[1])
        setOptNum3(randomNumbers[2])
        setOptNum4(randomNumbers[3])
        setOptNum5(randomNumbers[4])
    
    }, [listMultiOptionsContext])

    useEffect(() => { // mapeando todas as opções para procurar a opção que possue o mesmo número da questão e mostra-la na tela junto com a questão        
        // para garantir que todos os atributos sejam capturados antes de mostrar na tela e sejam 'opções' para a questão

        if (!listMultiQuestionsContext || !questionMulti || !listMultiOptionsContext) return     

        function questionMultiOptionMatch() { // função que procura uma questão com sua opção correspondente, evitando aparcer uma questão que não tenha opção
            let matchedOption = null
            let matchedQuestion = null

            setLoading(true) // habilita o componente 'Loader'

            // tenta corresponder diretamente com a questão atual
            matchedOption = listMultiOptionsContext.find(option => { // retorna uma opção que tenha uma questão correspondente                
                return option.optionNumber === questionMulti.questionNumber
            })
     
            // Se não encontrou, tenta corresponder via lista de questões
            if (!matchedOption) { // se a opção não tiver questão correspondente, procura uma nova questão e opção correspondentes
                listMultiOptionsContext.forEach(option => {
                      matchedQuestion = listMultiQuestionsContext.find(question => { // retorna uma questão que tenha uma opção correspondente
                        return question.questionNumber === option.optionNumber
                    })

                    if (matchedQuestion) { // se a questão tiver uma opção correspondente, captura a opção
                        matchedOption = option // armazena a opção correspondente
                        setQuestionMulti(matchedQuestion) // atualizando a questão
                        setLoading(false) // desabilita o componente 'Loader'
                        
                    } 
                })

            } else if (matchedOption) { // se tiver opção, não precisa mudar a questão
                // atualizando a opção correspondente
                setOptionMulti([matchedOption.optionA, matchedOption.optionB, matchedOption.optionC, matchedOption.optionD, matchedOption.optionE]) // atualizando a opção
                setOptionMultiNumberId([matchedOption.optionNumber, matchedOption.id]) // capturar o número e o id da opção atual
                setLoading(false) // desabilita o componente 'Loader'

            } else {
                console.error('No option with a corresponding question was found. Create a new question or option using the same number to ensure proper mapping.')

            }

        }        
        
        questionMultiOptionMatch() // chamando a função que busca uma questão e a opção correspondentes, com base na 'questionMulti' da página Multi

    }, [listMultiQuestionsContext, listMultiOptionsContext, questionMulti, setQuestionMulti, setOptionMulti, setOptionMultiNumberId, setLoading])

    return(
        <div>     
            {requestData && <div
                id='allQuestionsMultiId' 
                className={styles.allQuestionsMultiClass} 
                key={questionMulti.id}
            >
                {questionMulti &&
                    <Header 
                        title="Architecture Questions - Randomly"
                    />
                }

                {questionMulti &&
                    <MultiMain 
                        question={questionMulti.questionText} 
                        answer={questionMulti.correctAnswer}
                        imageDescription={questionMulti.imageKey}
                        description={questionMulti.description}
                        questionNumber={questionMulti.questionNumber}
                        elementId={questionMulti.id}
                        answerDisplay={answerDisplay}
                        setAnswerDisplay={setAnswerDisplay}
                        descriptionDisplay={descriptionDisplay}
                        setDescriptionDisplay={setDescriptionDisplay}
                        questionMulti={questionMulti}
                        optionMulti={optionMulti}
                        optionMultiNumberId={optionMultiNumberId}
                        optNum1={optNum1}
                        optNum2={optNum2}
                        optNum3={optNum3}
                        optNum4={optNum4}
                        optNum5={optNum5}
                        setOptNum1={setOptNum1}
                        setOptNum2={setOptNum2}
                        setOptNum3={setOptNum3}
                        setOptNum4={setOptNum4}
                        setOptNum5={setOptNum5}
                    />
                }

                {loading && <Loader />}           
            
            </div>}
               
        </div>

    )
}

export default PageMulti
