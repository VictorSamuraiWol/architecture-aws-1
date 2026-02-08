import styles from './PageMain.module.css'
import Header from '../../Components/Header'
import Main from '../../Components/Main'
import Loader from '../../Components/Loader'
import { useContext, useEffect, useRef, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { DataContext } from '../../Components/DataContext'

function PageMain() {

    const [questionMain, setQuestionMain] = useState('')
    const [optNum1, setOptNum1] = useState('')
    const [optNum2, setOptNum2] = useState('')
    const [optNum3, setOptNum3] = useState('')
    const [optNum4, setOptNum4] = useState('')
    const [optNum5, setOptNum5] = useState('')
    const [optionMain, setOptionMain] = useState([]) // mapear todas as opções presente na página main
    const [optionMainNumberId, setOptionMainNumberId] = useState([]) // capturar o número e a ID da opção atual do componente Main
    const [answerDescriptionDisplay, setAnswerDescriptionDisplay] = useState(styles.invisibleAnswerDescription)
    const [descriptionDisplay, setDescriptionDisplay] = useState(styles.invisibleDescription)  

    // pegando as variáveis através do 'useContext' do componente 'DataContext'
    const { listUnicQuestionsContext, listUnicQuestionsContextLength, listUnicOptionsContext, loading, setLoading  } = useContext(DataContext)
    
    // pegando a variável booleana para habilitar ou desabilitar tudo quando tiver conectado ou não com a api usando 'useOutletContext()' da página base e o número random da questão anterior que foi respondida
    const { requestData, setRequestData, setActivePageFormsQuestionsOptions } = useOutletContext()

    // O useRef serve para armazenar um valor mutável que persiste entre renders sem provocar re-render do componente, neste caso, guarda o último número randômico
    // usado na função 'uniqueRandomMain()'
    const lastRandomMainRef = useRef(null)

    // usado na função 'questionOptionMatch()'
    const lastNumberMatchedQuestionOptionRef = useRef(null) // guarda o último número da questão e opção correspondentes
    
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
        if (!listUnicQuestionsContext || !listUnicQuestionsContextLength) return // se a lista de questões não existir, retorne

        // habilitar os icones de som, imagem e footer presentes na 'página Base' ao renderizar o conteúdo da página Main
        setRequestData(true)

        // verifica se a página Forms está ativa
        setActivePageFormsQuestionsOptions(false) 

        // atribuindo um número random, mas diferente do anterior para não se repetir após mudar a página, repetir somente depois
        const random = uniqueRandomMain(listUnicQuestionsContextLength)
        const next = listUnicQuestionsContext[random]

        setQuestionMain(next) // armazena a questão que será mostrada na página Main
        
    }, [listUnicQuestionsContext, listUnicQuestionsContextLength, setRequestData, setActivePageFormsQuestionsOptions ])

    useEffect(() => {
        if (!listUnicOptionsContext || !listUnicOptionsContext.length) return // se a lista de opções não existir, retorne

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

    }, [listUnicOptionsContext, setOptNum1, setOptNum2, setOptNum3, setOptNum4, setOptNum5])

    useEffect(() => { // mapeando todas as opções para procurar a opção que possue o mesmo número da questão e mostra-la na tela junto com a questão        
        // para garantir que todos os atributos sejam capturados antes de mostrar na tela e sejam 'opções' para a questão           
        if (!listUnicQuestionsContext || !questionMain || !listUnicOptionsContext) return

        function questionOptionMatch() { // função que procura uma questão com sua opção correspondente, evitando aparcer uma questão que não tenha opção
            let matchedOption = null
            let matchedQuestion = null

            setLoading(true) // habilita o componente 'Loader'

            // busca uma opção que corresponde diretamente com a questão atual
            matchedOption = listUnicOptionsContext.find(option => { // retorna uma opção que tenha uma questão correspondente e que não seja igual a anterior
                        
                return ((option.optionNumber === questionMain.questionNumber) && (option.optionNumber !== lastNumberMatchedQuestionOptionRef.current))
            })
            // Se não encontrou, tenta corresponder via lista de questões
            if (!matchedOption) { // se a opção não tiver questão correspondente, procura uma nova questão e opção correspondentes
                listUnicOptionsContext.forEach(option => {
                    matchedQuestion = listUnicQuestionsContext.find(question => { // retorna uma questão que tenha uma opção correspondente e que não seja igual a anterior           
                        return ((question.questionNumber === option.optionNumber) && (question.questionNumber !== lastNumberMatchedQuestionOptionRef.current))
                    })

                    if (matchedQuestion) { // se a questão tiver uma opção correspondente, captura a opção                      
                        matchedOption = option // armazena a opção correspondente
                        setQuestionMain(matchedQuestion) // atualizando a questão                        
                        setLoading(false) // desabilita o componente 'Loader'                   

                    }
                })
      
            } else if (matchedOption) { // se tiver opção, não precisa mudar a questão
                // atualizando a opção correspondente
                setOptionMain([matchedOption.optionA, matchedOption.optionB, matchedOption.optionC, matchedOption.optionD, matchedOption.optionE]) // atualizando a opção
                setOptionMainNumberId([matchedOption.optionNumber, matchedOption.id]) // capturar o número e o id da opção atual
                matchedQuestion = questionMain // matchedQuestion recebe o valor 'questionMain'                
                setLoading(false) // desabilita o componente 'Loader'
                lastNumberMatchedQuestionOptionRef.current = matchedQuestion.questionNumber // armazena o número da questão correspondente

            } else {
                console.error('No option with a corresponding question was found. Create a new question or option using the same number to ensure proper mapping.')

            }

        } 
        
        questionOptionMatch() // chamando a função que busca uma questão e a opção correspondentes, com base na 'questionMain' da página Main

    }, [listUnicQuestionsContext, listUnicOptionsContext, questionMain, setQuestionMain, setOptionMain, setOptionMainNumberId, setLoading])

    return(
        <div>
            {requestData && <div 
                id='allQuestionsMainId' 
                className={`${styles.allQuestionsMainClass} allquestions`} 
                key={questionMain.id}

            >        
                {questionMain &&
                    <Header 
                        title="Architecture Questions - Randomly"
                    />
                    
                }
                
                {questionMain &&
                    <Main 
                        question={questionMain.questionText}
                        answer={questionMain.correctAnswer}
                        imageDescription={questionMain.imageKey}
                        description={questionMain.description}
                        questionNumber={questionMain.questionNumber}
                        elementId={questionMain.id}
                        answerDescriptionDisplay={answerDescriptionDisplay}
                        setAnswerDescriptionDisplay={setAnswerDescriptionDisplay}
                        descriptionDisplay={descriptionDisplay}
                        setDescriptionDisplay={setDescriptionDisplay}                  
                        uniqueRandomMain={uniqueRandomMain}
                        questionMain={questionMain}
                        setQuestionMain={setQuestionMain}                        
                        optionMain={optionMain}
                        optionMainNumberId={optionMainNumberId}
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

export default PageMain
