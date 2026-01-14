import { useContext, useEffect } from 'react';
import styles from './Options.module.css';
import { DataContext } from '../../DataContext';

function Options({ 
    setCaptureValue, optionColor, randomIndex, listOptions, setListOptions, 
    optNum1, optNum2, optNum3, optNum4, optNum5, setOptNum1, setOptNum2, setOptNum3, setOptNum4, setOptNum5, 
    optionMap, setOptionMap, nextQuestion, setNextQuestion, setOptionMapNumberId, listQuestions
}) {

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
        const inputOptionMain = e.target.parentElement.childNodes[1]

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

    return(                 
        <div 
        className={styles.optionsMain}  
        id='option' 
        key={listOptions && listOptions.id}
        >
            {optionMap[optNum1] && <div className={`optionNext ${optionColor} ${styles.alternativeOptions}`}> {/* esta alternativa da opção única só irá aparecer se 'optionMap[optNum1]' existir */}
                <input 
                    onClick={captureValueFunc}
                    className={styles.inputOptions}  
                    type='radio' 
                    name='options' 
                    value={optNum1}
                />

                <span className={styles.itemAlternativeMain}>{"a)"}</span>

                <p 
                    onClick={mouseClickOptionsMain}
                    className={`optionNextP ${styles.textOptions}`}                
                >

                    {optionMap[optNum1]}

                </p>
            </div>}

            {optionMap[optNum2] &&  <div className={`optionNext ${optionColor} ${styles.alternativeOptions}`}> {/* esta alternativa da opção única só irá aparecer se 'optionMap[optNum2]' existir */}
                <input
                    onClick={captureValueFunc}
                    className={styles.inputOptions} 
                    type='radio' 
                    name='options' 
                    value={optNum2} 
                />

                <span className={styles.itemAlternativeMain}>{"b)"}</span>

                <p 
                    onClick={mouseClickOptionsMain}
                    className={`optionNextP ${styles.textOptions}`}                
                >

                    {optionMap[optNum2]}

                </p>
            </div>}

            {optionMap[optNum3] && <div className={`optionNext ${optionColor} ${styles.alternativeOptions}`}> {/* esta alternativa da opção única só irá aparecer se 'optionMap[optNum3]' existir */}
                <input 
                    onClick={captureValueFunc}
                    className={styles.inputOptions} 
                    type='radio' 
                    name='options' 
                    value={optNum3}
                />

                <span className={styles.itemAlternativeMain}>{"c)"}</span>

                <p 
                    onClick={mouseClickOptionsMain}
                    className={`optionNextP ${styles.textOptions}`}                
                >

                    {optionMap[optNum3]}

                </p>
            </div>}

            {optionMap[optNum4] && <div className={`optionNext ${optionColor} ${styles.alternativeOptions}`}> {/* esta alternativa da opção única só irá aparecer se 'optionMap[optNum4]' existir */}
                <input
                    onClick={captureValueFunc}
                    className={styles.inputOptions} 
                    type='radio' 
                    name='options' 
                    value={optNum4}
                />

                <span className={styles.itemAlternativeMain}>{"d)"}</span>

                <p 
                    onClick={mouseClickOptionsMain}
                    className={`optionNextP ${styles.textOptions}`}                
                >

                    {optionMap[optNum4]}

                </p>
            </div>}

            {optionMap[optNum5] && <div className={`optionNext ${optionColor} ${styles.alternativeOptions}`}> {/* esta alternativa da opção única só irá aparecer se 'optionMap[optNum5]' existir */}
                <input
                    onClick={captureValueFunc}
                    className={styles.inputOptions} 
                    type='radio' 
                    name='options' 
                    value={optNum5}
                />

                <span className={styles.itemAlternativeMain}>{"e)"}</span>

                <p 
                    onClick={mouseClickOptionsMain}
                    className={`optionNextP ${styles.textOptions}`}                
                >

                    {optionMap[optNum5]}
                    
                </p>

            </div>}

        </div>      

    )    
    
}

export default Options;
