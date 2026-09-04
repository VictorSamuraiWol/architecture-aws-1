import styles from './PageThreeMulti.module.css'
import Header from '../../Components/Header'
import MultiMain from '../../Components/MultiMain'
import Loader from '../../Components/Loader'
import Footer from '../../Components/Footer'
import backgroundImage from '../../imgs/cloud-neon-vibe.png'
import { useContext, useEffect, useRef, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { DataContext } from '../../Components/DataContext'

function PageThreeMulti() {
    
    const [questionThreeMulti, setQuestionThreeMulti] = useState('')
    const [optionThreeMulti, setOptionThreeMulti] = useState([]) // mapear todas as opções da página multi    
    const [optionThreeMultiNumberId, setOptionThreeMultiNumberId] = useState([]) // capturar o número e a ID da opção de múltipla escolha atual do componente MultiMain
    const [optNum1, setOptNum1] = useState('')
    const [optNum2, setOptNum2] = useState('')
    const [optNum3, setOptNum3] = useState('')
    const [optNum4, setOptNum4] = useState('')
    const [optNum5, setOptNum5] = useState('')
    const [optNum6, setOptNum6] = useState('')
    const [answerDescriptionDisplay, setAnswerDescriptionDisplay] = useState(styles.invisibleAnswerDescription)
    const [descriptionDisplay, setDescriptionDisplay] = useState(styles.invisibleDescription)

    // pegando as variáveis através do 'useContext' do componente 'DataContext'
    const { listThreeMultiQuestionsContext, listThreeMultiQuestionsContextLength, listThreeMultiOptionsContext, listThreeMultiOptionsContextLength, loading, setLoading } = useContext(DataContext)

    // pegando a variável booleana para habilitar ou desabilitar tudo quando tiver conectado ou não com a api usando 'useOutletContext()' da página base e o número random da questão anterior que foi respondida
    const { setRequestData, activePageFormsQuestionsOptions, setActivePageFormsQuestionsOptions, setActivePageMain, setActivePageMulti, activeZeroImgThreeMulti, setActiveZeroImgThreeMulti, setActivePageDemo, setActivePageThreeMulti  } = useOutletContext()

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
        // habilitar os icones de som ao renderizar o conteúdo da página ThreeMulti
        setRequestData(true)

        // tornar a página ativa ao entrar na rota dela
        setActivePageThreeMulti(true)
        
        setActivePageMulti(false)
        setActivePageMain(false)
        setActivePageDemo(false)
        setActivePageFormsQuestionsOptions(false)

    }, [setRequestData, setActivePageDemo, setActivePageMain, setActivePageMulti, setActivePageThreeMulti, setActivePageFormsQuestionsOptions])
    
    useEffect(() => {
        if (!listThreeMultiQuestionsContext || !listThreeMultiQuestionsContextLength || listThreeMultiQuestionsContextLength === 0) return // se a lista de questões não existir, retorne
        
        // atribuindo um número random, mas diferente do anterior para não se repetir após mudar a página, repetir somente depois
        const random = uniqueRandomMulti(listThreeMultiQuestionsContextLength)
        const next = listThreeMultiQuestionsContext[random]

        setQuestionThreeMulti(next)          

    }, [listThreeMultiQuestionsContext, listThreeMultiQuestionsContextLength])

    useEffect(() => {
        if (!listThreeMultiOptionsContext || !listThreeMultiOptionsContextLength || listThreeMultiOptionsContextLength === 0) return // se a lista de opções não existir, retorne 

        const randomNumbers = [] // armazena a lista de números randômicos

        // gerando um número para randomizar toda vez que renderizar
        while (randomNumbers.length < 6) { // o comprimento deve ser no máximo o número de opções disponíveis, neste caso '6'
            const random = Math.floor(Math.random() * 6)

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
        setOptNum6(randomNumbers[5])
    
    }, [listThreeMultiOptionsContext, listThreeMultiOptionsContextLength])

    useEffect(() => { // mapeando todas as opções para procurar a opção que possue o mesmo número da questão e mostra-la na tela junto com a questão        
        // para garantir que todos os atributos sejam capturados antes de mostrar na tela e sejam 'opções' para a questão

        if (!listThreeMultiQuestionsContext || !listThreeMultiOptionsContext || !questionThreeMulti) return     

        function questionThreeMultiOptionMatch() { // função que procura uma questão com sua opção correspondente, evitando aparcer uma questão que não tenha opção
            let matchedOption = null
            let matchedQuestion = null

            setLoading(true) // habilita o componente 'Loader'

            // tenta corresponder diretamente com a questão atual
            matchedOption = listThreeMultiOptionsContext
                            .filter(options => options.optionNumber !== '')
                            .find(option => { // retorna uma opção que tenha uma questão correspondente

                return ((option.optionNumber === questionThreeMulti.questionNumber))
            })
     
            // Se não encontrou, tenta corresponder via lista de questões
            if (!matchedOption) { // se a opção não tiver questão correspondente, procura uma nova questão e opção correspondentes
                listThreeMultiOptionsContext
                .filter(options => options.optionNumber !== '')
                .forEach(option => {
                    matchedQuestion = listThreeMultiQuestionsContext
                                      .filter(questions => questions.questionNumber !== '')
                                      .find(question => { // retorna uma questão que tenha uma opção correspondente

                        return ((question.questionNumber === option.optionNumber))
                    })

                    if (matchedQuestion) { // se a questão tiver uma opção correspondente, captura a opção
                        matchedOption = option // armazena a opção correspondente
                        setQuestionThreeMulti(matchedQuestion) // atualizando a questão
                        setLoading(false) // desabilita o componente 'Loader'
                        
                    }
                })

                // se não encontrar uma questão e opção correspondentes, mostrará uma imagem de zero questão 
                !matchedQuestion && !matchedOption && setActiveZeroImgThreeMulti(true)

            } else if (matchedOption) { // se tiver opção, não precisa mudar a questão
                // atualizando a opção correspondente
                setOptionThreeMulti([matchedOption.optionA, matchedOption.optionB, matchedOption.optionC, matchedOption.optionD, matchedOption.optionE, matchedOption.optionF]) // atualizando a opção
                setOptionThreeMultiNumberId([matchedOption.optionNumber, matchedOption.id]) // capturar o número e o id da opção atual
                setLoading(false) // desabilita o componente 'Loader'
                setActiveZeroImgThreeMulti(false)

            } else {
                console.error('No option with a corresponding question was found. Create a new question or option using the same number to ensure proper mapping.')

            }

        }
        
        // chamando a função que busca uma questão e a opção correspondentes, com base na 'questionMulti' da página Multi
        questionThreeMultiOptionMatch()

    }, [listThreeMultiQuestionsContext, listThreeMultiQuestionsContextLength, listThreeMultiOptionsContext, questionThreeMulti, setQuestionThreeMulti, setOptionThreeMulti, setOptionThreeMultiNumberId, setLoading, setActiveZeroImgThreeMulti])

    return(
        <div>     
            {questionThreeMulti &&
            <div
                id='allQuestionsMultiId' 
                className={styles.allQuestionsMultiClass} 
                key={questionThreeMulti.id}
            >
                {/* background image */}
                {activePageFormsQuestionsOptions === false && 
                <img 
                    className={`backgroundImageClass ${styles.backgroundImage}`} 
                    src={backgroundImage} 
                    alt='backgoundIimage'
                />} 

                {/* reutilizando os componentes da página Multi */}
                <Header title="Architecture Questions - Randomly" />


                <MultiMain 
                    question={questionThreeMulti.questionText} 
                    answer={questionThreeMulti.correctAnswer}
                    imageDescription={questionThreeMulti.imageKey}
                    description={questionThreeMulti.description}
                    questionNumber={questionThreeMulti.questionNumber}
                    elementId={questionThreeMulti.id}
                    answerDescriptionDisplay={answerDescriptionDisplay}
                    setAnswerDescriptionDisplay={setAnswerDescriptionDisplay}
                    descriptionDisplay={descriptionDisplay}
                    setDescriptionDisplay={setDescriptionDisplay}
                    questionMulti={questionThreeMulti}
                    optionMulti={optionThreeMulti}
                    optionMultiNumberId={optionThreeMultiNumberId}
                    optNum1={optNum1}
                    optNum2={optNum2}
                    optNum3={optNum3}
                    optNum4={optNum4}
                    optNum5={optNum5}
                    optNum6={optNum6}
                    activeZeroImgMulti={activeZeroImgThreeMulti}
                />

                <Footer />
            
            </div>}

            {loading && <Loader />}           
               
        </div>

    )
}

export default PageThreeMulti
