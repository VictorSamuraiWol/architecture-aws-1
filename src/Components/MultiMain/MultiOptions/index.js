import styles from './MultiOptions.module.css'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../DataContext'

function MultiOptions({ 
    listMultiOptions, setListMultiOptions, optionColorMulti, setCaptureValueMulti, randomIndexMulti, captureValueMulti, 
    multiOptionMap, setMultiOptionMap, multiQuestion, setMultiQuestion, setMultiOptionMapNumberId, listMultiQuestions
}) {

    const [optNum1, setOptNum1] = useState('')
    const [optNum2, setOptNum2] = useState('')
    const [optNum3, setOptNum3] = useState('')
    const [optNum4, setOptNum4] = useState('')
    const [optNum5, setOptNum5] = useState('')

    const [itemA, setItemA] = useState('') // valor do item A
    const [itemB, setItemB] = useState('') // valor do item B
    const [itemC, setItemC] = useState('') // valor do item C
    const [itemD, setItemD] = useState('') // valor do item D
    const [itemE, setItemE] = useState('') // valor do item E

    // pegando as variáveis através do 'useContext' do componente 'DataContext'
    const { listMultiOptionsContext, setLoading } = useContext(DataContext)

    useEffect(() => {
        if (!listMultiOptionsContext || !listMultiOptionsContext.length) return // se a lista de opções não existir, retorne 
        
        setListMultiOptions(listMultiOptionsContext)

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
    
    }, [listMultiOptionsContext, setListMultiOptions])

    // função para capturar os dois valores que estão marcados quando clicados no campo caixa de marcação (input)
    function captureValueMultiFunc(e) {
        const { value, checked } = e.target
        setCaptureValueMulti(prevValues => checked ? [...prevValues, value] : prevValues.filter(v => v !== value))

    }

    // função para capturar os dois valores que estão marcados quando clicados no campo texto (p)
    function mouseClickOptionsMulti(e) {
        const inputOptionMulti = e.target.parentElement.parentElement.childNodes[1]

        if (inputOptionMulti.checked === false) {
            inputOptionMulti.checked = true
            setCaptureValueMulti(prevValues => inputOptionMulti.checked && !captureValueMulti.includes(`${inputOptionMulti.value}`) ? [...prevValues, inputOptionMulti.value] : prevValues.filter(v => v !== inputOptionMulti.value))

        } else if (inputOptionMulti.checked === true) {
            inputOptionMulti.checked = false
            setCaptureValueMulti(prevValues => inputOptionMulti.checked && !captureValueMulti.includes(`${inputOptionMulti.value}`) ? [...prevValues, inputOptionMulti.value] : prevValues.filter(v => v !== inputOptionMulti.value))

        }
        
    }

    useEffect(() => { // mapeando todas as opções para procurar a opção que possue o mesmo número da questão e mostra-la na tela junto com a questão        
        // para garantir que todos os atributos sejam capturados antes de mostrar na tela e sejam 'opções' para a questão

        if (!listMultiQuestions || !multiQuestion || !listMultiOptions) return

        function questionMultiOptionMatch() { // função que procura uma questão com sua opção correspondente, evitando aparcer uma questão que não tenha opção
            let matchedOption = null
            let matchedQuestion = null

            setLoading(true) // habilita o componente 'Loader'

            // tenta corresponder diretamente com a questão atual
            matchedOption = listMultiOptions.find(option => { // encontrar uma opção que tenha uma questão correspondente               
                return option.numberOption === multiQuestion.numberQuestion

            })
     
            // Se não encontrou, tenta corresponder via lista de questões
            if (!matchedOption) { // se a opção não tiver questão correspondente, procura uma nova questão e opção correspondentes
                listMultiOptions.forEach(option => {
                    matchedQuestion = listMultiQuestions.find(question => {
                        return question.numberQuestion === option.numberOption // procura uma questão que tenha uma opção correspondente

                    })

                    if (matchedQuestion) { // se a questão tiver uma opção correspondente, captura a opção
                        matchedOption = option;
                        setMultiQuestion(matchedQuestion) // atualizando a questão

                        setLoading(false) // desabilita o componente 'Loader'
                        
                    }
                    
                })
                
                

            } else if (matchedOption) { // se tiver opção, não precisa mudar a questão
                // atualizando a opção correspondente
                setMultiOptionMap([matchedOption.option1, matchedOption.option2, matchedOption.option3, matchedOption.option4, matchedOption.option5]) // atualizando a opção
                setMultiOptionMapNumberId([matchedOption.numberOption, matchedOption.id]) // capturar o número e o id da opção atual

                setLoading(false) // desabilita o componente 'Loader'

            }

        }        
        
        questionMultiOptionMatch() // chamando a função que escolhe a questão e a opção correspondentes e mostra na tela

    }, [listMultiQuestions, multiQuestion, setMultiQuestion, listMultiOptions, setMultiOptionMap, setMultiOptionMapNumberId, setLoading])

    useEffect(() => { // atualizar os itens A, B, C, D e E, dependendo do número de alternativas da opção, se for 4 (A, B, C e D) se for 5 (A, B, C, D e E) 
        function itemOrderSelection() { // função que atualiza a ordem dos itens A, B, C, D e E da opção
            if (multiOptionMap[optNum1] && multiOptionMap[optNum2] && multiOptionMap[optNum3] && multiOptionMap[optNum4] && multiOptionMap[optNum5]) {
                setItemA('a)') 
                setItemB('b)') 
                setItemC('c)') 
                setItemD('d)') 
                setItemE('e)')

            } else if (!multiOptionMap[optNum1] || !multiOptionMap[optNum2] || !multiOptionMap[optNum3] || !multiOptionMap[optNum4] || !multiOptionMap[optNum5]) {
                setItemA('a)') 
                setItemB('b)') 
                setItemC('c)') 
                setItemD('d)')
                setItemE('')

            }
            
        }

        itemOrderSelection()
        
    }, [multiOptionMap, optNum1, optNum2, optNum3, optNum4, optNum5]) 

    return (
        multiOptionMap && <div className={styles.multiOptions}>
            {multiOptionMap[optNum1] && <div className={`optionNextMulti ${optionColorMulti} ${styles.alternativeMultiOptions}`}> {/* esta alternativa da opção múltipla só irá aparecer se 'multiOptionMap[optNum1]' existir */}
                <input
                    onChange={captureValueMultiFunc}                    
                    className={styles.inputMultiOptions}
                    type='checkbox'
                    value={optNum1}
                />

                <div 
                    onClick={mouseClickOptionsMulti}
                    className={styles.textMultiOptions}
                >
                    <span className='item'>
                        {itemA}
                    </span>

                    <span>&nbsp;</span> {/* espaço em branco que o HTML não colapsa e não quebra linha (non-breaking space) */}

                    <p>                        
                        {multiOptionMap[optNum1]}

                        <span className={styles.answerBool} id='answerBool1'>
                            {(optNum1 === 0 || optNum1 === 1) && 'true'} 
                        </span>
                    </p>

                </div>                
                
            </div>}

            {multiOptionMap[optNum2] && <div className={`optionNextMulti ${optionColorMulti} ${styles.alternativeMultiOptions}`}> {/* esta alternativa da opção múltipla só irá aparecer se 'multiOptionMap[optNum2]' existir */}
                <input
                    onClick={captureValueMultiFunc}
                    className={styles.inputMultiOptions}
                    type='checkbox'
                    value={optNum2}
                />

                <div 
                    onClick={mouseClickOptionsMulti}
                    className={styles.textMultiOptions}
                >
                    <span className='item'>
                        {/* {condição para aparecer o item A ou B} */}
                        {(!multiOptionMap[optNum1] && itemA) || itemB}
                    </span>

                    <span>&nbsp;</span> {/* espaço em branco que o HTML não colapsa e não quebra linha (non-breaking space) */}

                    <p>
                        {multiOptionMap[optNum2]}

                        <span className={styles.answerBool} id='answerBool2'>
                            {(optNum2 === 0 || optNum2 === 1) && 'true'} 
                        </span>
                    </p>

                </div>

            </div>}

            {multiOptionMap[optNum3] && <div className={`optionNextMulti ${optionColorMulti} ${styles.alternativeMultiOptions}`}> {/* esta alternativa da opção múltipla só irá aparecer se 'multiOptionMap[optNum3]' existir */}
                <input
                    onClick={captureValueMultiFunc}
                    className={styles.inputMultiOptions}
                    type='checkbox'
                    value={optNum3}
                />

               <div 
                    onClick={mouseClickOptionsMulti}
                    className={styles.textMultiOptions}
                >
                    <span className='item'>
                        {/* condição para aparecer o item B ou C */}
                        {((!multiOptionMap[optNum1] || !multiOptionMap[optNum2]) && itemB) || itemC}
                    </span>

                    <span>&nbsp;</span> {/* espaço em branco que o HTML não colapsa e não quebra linha (non-breaking space) */}

                    <p>
                        {multiOptionMap[optNum3]}

                        <span className={styles.answerBool} id='answerBool3'>
                            {(optNum3 === 0 || optNum3 === 1) && 'true'} 
                        </span>
                    </p>

                </div>

            </div>}

            {multiOptionMap[optNum4] && <div className={`optionNextMulti ${optionColorMulti} ${styles.alternativeMultiOptions}`}> {/* esta alternativa da opção múltipla só irá aparecer se 'multiOptionMap[optNum4]' existir */}
                <input
                    onClick={captureValueMultiFunc}
                    className={styles.inputMultiOptions}
                    type='checkbox'
                    value={optNum4}
                />

                <div 
                    onClick={mouseClickOptionsMulti}
                    className={styles.textMultiOptions}
                >
                    <span className='item'>
                        {/* condição para aparecer o item C ou D */}
                        {((!multiOptionMap[optNum1] || !multiOptionMap[optNum2] || !multiOptionMap[optNum3]) && itemC) || itemD}
                    </span>

                    <span>&nbsp;</span> {/* espaço em branco que o HTML não colapsa e não quebra linha (non-breaking space) */}

                    <p>
                        {multiOptionMap[optNum4]}

                        <span className={styles.answerBool} id='answerBool4'>
                            {(optNum4 === 0 || optNum4 === 1) && 'true'} 
                        </span>
                    </p>

                </div>

            </div>}

            {multiOptionMap[optNum5] && <div className={`optionNextMulti ${optionColorMulti} ${styles.alternativeMultiOptions}`}> {/* esta alternativa da opção múltipla só irá aparecer se 'multiOptionMap[optNum5]' existir */}
                <input
                    onClick={captureValueMultiFunc}
                    className={styles.inputMultiOptions}
                    type='checkbox'
                    value={optNum5}
                />

                <div 
                    onClick={mouseClickOptionsMulti}
                    className={styles.textMultiOptions}
                >
                    <span className='item'>
                        {/* condição para aparecer o item D ou E */}
                        {((!multiOptionMap[optNum1] || !multiOptionMap[optNum2] || !multiOptionMap[optNum3] || !multiOptionMap[optNum4]) && itemD) || itemE}
                    </span>

                    <span>&nbsp;</span> {/* espaço em branco que o HTML não colapsa e não quebra linha (non-breaking space) */}

                    <p>
                        {multiOptionMap[optNum5]}

                        <span className={styles.answerBool} id='answerBool5'>
                            {(optNum5 === 0 || optNum5 === 1) && 'true'} 
                        </span>
                    </p>

                </div>

            </div>}

        </div>
    )
}

export default MultiOptions
