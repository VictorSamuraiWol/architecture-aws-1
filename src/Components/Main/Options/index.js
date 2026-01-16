import { useContext, useEffect, useState } from 'react';
import styles from './Options.module.css';
import { DataContext } from '../../DataContext';

function Options({ 
    setCaptureValue, optionColor, randomIndex, listOptions, setListOptions, 
    optNum1, optNum2, optNum3, optNum4, optNum5, setOptNum1, setOptNum2, setOptNum3, setOptNum4, setOptNum5, 
    optionMap, setOptionMap, nextQuestion, setNextQuestion, setOptionMapNumberId, listQuestions
}) {
    
    const [itemA, setItemA] = useState('') // valor do item A
    const [itemB, setItemB] = useState('') // valor do item B
    const [itemC, setItemC] = useState('') // valor do item C
    const [itemD, setItemD] = useState('') // valor do item D
    const [itemE, setItemE] = useState('') // valor do item E

    // pegando as variáveis através do 'useContext' do componente 'DataContext'
    const { listUnicOptionsContext, setLoading } = useContext(DataContext)

    useEffect(() => {        
        if (!listUnicOptionsContext || !listUnicOptionsContext.length) return; // se a lista de opções não existir, retorne

        // capturando toda a lista de opções da página main
        setListOptions(listUnicOptionsContext);

        const randomNumbers = []; // armazena a lista de números randômicos
        // gerando um número para randomizar toda vez que renderizar
        while (randomNumbers.length < 5) { // o comprimento deve ser no máximo o número de opções disponíveis, neste caso '5'
            const random = Math.floor(Math.random() * 5);
            if (!randomNumbers.includes(random)) {
                randomNumbers.push(random);                
            }
        }
        
        // gerando números radômicos para alterar a ordem das opções
        setOptNum1(randomNumbers[0]);
        setOptNum2(randomNumbers[1]);
        setOptNum3(randomNumbers[2]);
        setOptNum4(randomNumbers[3]);
        setOptNum5(randomNumbers[4]);  

    }, [listUnicOptionsContext]);

    // função para capturar o valor que está marcado quando clicados no campo caixa de marcação (input)
    function captureValueFunc(e) {
        listOptions && setCaptureValue(e.target.value)

    }

    // função para capturar o valor que está marcado quando clicado no campo texto (p)
    function mouseClickOptionsMain(e) {
        const inputOptionMain = e.target.parentElement.parentElement.childNodes[0]

        if (inputOptionMain) {
            inputOptionMain.checked = true
            setCaptureValue(inputOptionMain.value)

        } else {
            inputOptionMain.checked = false

        }

    }

    useEffect(() => { // mapeando todas as opções para procurar a opção que possue o mesmo número da questão e mostra-la na tela junto com a questão        
        // para garantir que todos os atributos sejam capturados antes de mostrar na tela e sejam 'opções' para a questão
           
        if (!listQuestions || !nextQuestion || !listOptions) return

        function questionOptionMatch() { // função que procura uma questão com sua opção correspondente, evitando aparcer uma questão que não tenha opção
            let matchedOption = null
            let matchedQuestion = null

            setLoading(true) // habilita o componente 'Loader'

            // busca uma opção que corresponde diretamente com a questão atual
            matchedOption = listOptions.find(option => { // encontrar uma opção que tenha uma questão correspondente               
                return option.numberOption === nextQuestion.numberQuestion
            })
            
            // Se não encontrou, tenta corresponder via lista de questões
            if (!matchedOption) { // se a opção não tiver questão correspondente, procura uma nova questão e opção correspondentes
                listOptions.forEach(option => {
                    matchedQuestion = listQuestions.find(question => {
                        return question.numberQuestion === option.numberOption // procura uma questão que tenha uma opção correspondente

                    })
                        
                    if (matchedQuestion) { // se a questão tiver uma opção correspondente, captura a opção                      
                        matchedOption = option
                        setNextQuestion(matchedQuestion) // atualizando a questão

                    setLoading(false) // desabilita o componente 'Loader'
                        
                    }

                })

            } else if (matchedOption) { // se tiver opção, não precisa mudar a questão
                // atualizando a opção correspondente
                setOptionMap([matchedOption.option1, matchedOption.option2, matchedOption.option3, matchedOption.option4, matchedOption.option5])
                setOptionMapNumberId([matchedOption.numberOption, matchedOption.id]) // capturar o número e o id da opção atual

                setLoading(false) // desabilita o componente 'Loader'

            } else {
                console.error('não encontrou uma opção que possua uma questão correspondente, crie uma nova questão ou opção com o mesmo número para haver correspondênciam, obrigado.')

            }

        }        
        
        questionOptionMatch() // chamando a função que escolhe a questão e a opção correspondentes e mostra na tela

    }, [listOptions, nextQuestion, listQuestions])
  
    useEffect(() => { // atualizar os itens A, B, C, D e E, dependendo do número de alternativas da opção, se for 4 (A, B, C e D) se for 5 (A, B, C, D e E) 
        function itemOrderSelection() { // função que atualiza a ordem dos itens A, B, C, D e E da opção
            if (optionMap[optNum1] && optionMap[optNum2] && optionMap[optNum3] && optionMap[optNum4] && optionMap[optNum5]) {
                setItemA('a)') 
                setItemB('b)') 
                setItemC('c)') 
                setItemD('d)') 
                setItemE('e)')

            } else if (!optionMap[optNum1] || !optionMap[optNum2] || !optionMap[optNum3] || !optionMap[optNum4] || !optionMap[optNum5]) {
                setItemA('a)') 
                setItemB('b)') 
                setItemC('c)') 
                setItemD('d)')
                setItemE('')

            }
        
        }

        itemOrderSelection()

    }, [optionMap, optNum1, optNum2, optNum3, optNum4, optNum5]) 

    return(                 
        <div 
        className={styles.optionsMain}  
        id='option' 
        key={listOptions && listOptions.id}
        >
            {/* esta alternativa da opção única só irá aparecer se 'optionMap[optNum1]' existir */}
            {optionMap[optNum1] && <div className={`optionNext ${optionColor} ${styles.alternativeOptions}`}> 
                <input 
                    onClick={captureValueFunc}
                    className={styles.inputOptions}  
                    type='radio' 
                    name='options' 
                    value={optNum1}
                />

                <div
                    onClick={mouseClickOptionsMain}
                    className={styles.textOptions}              
                >
                    <span>
                        {itemA}
                    </span>

                    <span>&nbsp;</span> {/* espaço em branco que o HTML não colapsa e não quebra linha (non-breaking space) */}

                    <p>
                        {optionMap[optNum1]}
                    </p>

                </div>
                
            </div>}

            {/* esta alternativa da opção única só irá aparecer se 'optionMap[optNum2]' existir */}
            {optionMap[optNum2] &&  <div className={`optionNext ${optionColor} ${styles.alternativeOptions}`}> 
                <input
                    onClick={captureValueFunc}
                    className={styles.inputOptions} 
                    type='radio' 
                    name='options' 
                    value={optNum2} 
                />

                <div
                    onClick={mouseClickOptionsMain}
                    className={styles.textOptions}   
                >
                    <span>
                        {/* condição para aparecer o item A ou B */}
                        {(!optionMap[optNum1] && itemA) || itemB}
                    </span>

                    <span>&nbsp;</span> {/* espaço em branco que o HTML não colapsa e não quebra linha (non-breaking space) */}

                    <p>
                        {optionMap[optNum2]}
                    </p>

                </div>

            </div>}

            {/* esta alternativa da opção única só irá aparecer se 'optionMap[optNum3]' existir */}
            {optionMap[optNum3] && <div className={`optionNext ${optionColor} ${styles.alternativeOptions}`}> 
                <input 
                    onClick={captureValueFunc}
                    className={styles.inputOptions} 
                    type='radio' 
                    name='options' 
                    value={optNum3}
                />

                <div
                    onClick={mouseClickOptionsMain}
                    className={styles.textOptions}   
                >
                    <span>
                        {/* condição para aparecer o item B ou C */}
                        {((!optionMap[optNum1] || !optionMap[optNum2]) && itemB) || itemC}
                    </span>

                    <span>&nbsp;</span> {/* espaço em branco que o HTML não colapsa e não quebra linha (non-breaking space) */}

                    <p>
                        {optionMap[optNum3]}
                    </p>

                </div>

            </div>}

            {/* esta alternativa da opção única só irá aparecer se 'optionMap[optNum4]' existir */}
            {optionMap[optNum4] && <div className={`optionNext ${optionColor} ${styles.alternativeOptions}`}> 
                <input
                    onClick={captureValueFunc}
                    className={styles.inputOptions} 
                    type='radio' 
                    name='options' 
                    value={optNum4}
                />

                <div
                    onClick={mouseClickOptionsMain}
                    className={styles.textOptions}   
                >
                    <span>
                        {/* condição para aparecer o item C ou D */}
                        {((!optionMap[optNum1] || !optionMap[optNum2] || !optionMap[optNum3]) && itemC) || itemD}
                    </span>

                    <span>&nbsp;</span> {/* espaço em branco que o HTML não colapsa e não quebra linha (non-breaking space) */}

                    <p>
                        {optionMap[optNum4]}
                    </p>

                </div>

            </div>}

            {/* esta alternativa da opção única só irá aparecer se 'optionMap[optNum5]' existir */}
            {optionMap[optNum5] && <div className={`optionNext ${optionColor} ${styles.alternativeOptions}`}> 
                <input
                    onClick={captureValueFunc}
                    className={styles.inputOptions} 
                    type='radio' 
                    name='options' 
                    value={optNum5}
                />

                <div
                    onClick={mouseClickOptionsMain}
                    className={styles.textOptions}   
                >
                    <span>
                        {/* condição para aparecer o item D ou E */}
                        {((!optionMap[optNum1] || !optionMap[optNum2] || !optionMap[optNum3] || !optionMap[optNum4]) && itemD) || itemE}
                    </span>

                    <span>&nbsp;</span> {/* espaço em branco que o HTML não colapsa e não quebra linha (non-breaking space) */}

                    <p>
                        {optionMap[optNum5]}
                    </p>

                </div>

            </div>}

        </div>      

    )    
    
}

export default Options;
