import styles from './MultiOptions.module.css';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../DataContext';

function MultiOptions({ 
    listMultiOptions, setListMultiOptions, optionColorMulti, setCaptureValueMulti, randomIndexMulti, captureValueMulti, 
    multiOptionMap, setMultiOptionMap, multiQuestion, setMultiQuestion, setMultiOptionMapNumberId, listMultiQuestions
}) {

    const [optNum1, setOptNum1] = useState('');
    const [optNum2, setOptNum2] = useState('');
    const [optNum3, setOptNum3] = useState('');
    const [optNum4, setOptNum4] = useState('');
    const [optNum5, setOptNum5] = useState('');

    // pegando as variáveis através do 'useContext' do componente 'DataContext'
    const { listMultiOptionsContext } = useContext(DataContext)

    useEffect(() => {
        if (!listMultiOptionsContext || !listMultiOptionsContext.length) return; // se a lista de opções não existir, retorne 
        
        setListMultiOptions(listMultiOptionsContext)

        const randomNumbers = []; // armazena a lista de números randômicos
        // gerando um número para randomizar toda vez que renderizar
        while (randomNumbers.length < 5) { // o comprimento deve ser no máximo o número de opções disponíveis, neste caso '5'
            const random = Math.floor(Math.random() * 5);
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
    
    }, [listMultiOptionsContext]);

    // função para capturar os dois valores que estão marcados quando clicados no campo caixa de marcação (input)
    function captureValueMultiFunc(e) {
        const { value, checked } = e.target
        setCaptureValueMulti(prevValues => checked ? [...prevValues, value] : prevValues.filter(v => v !== value))

    }

    // função para capturar os dois valores que estão marcados quando clicados no campo texto (p)
    function mouseOverOptionsMulti(e) {

        const inputOptionMulti = e.target.parentElement.childNodes[0]

        if (inputOptionMulti.checked === false) {
            inputOptionMulti.checked = true
            setCaptureValueMulti(prevValues => inputOptionMulti.checked && !captureValueMulti.includes(`${inputOptionMulti.value}`) ? [...prevValues, inputOptionMulti.value] : prevValues.filter(v => v !== inputOptionMulti.value))

        } else if (inputOptionMulti.checked === true) {
            inputOptionMulti.checked = false
            setCaptureValueMulti(prevValues => inputOptionMulti.checked && !captureValueMulti.includes(`${inputOptionMulti.value}`) ? [...prevValues, inputOptionMulti.value] : prevValues.filter(v => v !== inputOptionMulti.value))

        } else {
            console.error('Erro nos dados da função "mouseOverOptionsMulti(e)" do componente listMultiOptions, verificar na l.67 ou próximo.')

        }
        
    }

    useEffect(() => { // mapeando todas as opções para procurar a opção que possue o mesmo número da questão e mostra-la na tela junto com a questão        
        // para garantir que todos os atributos sejam capturados antes de mostrar na tela e sejam 'opções' para a questão

        if (!listMultiQuestions || !multiQuestion || !listMultiOptions) return;

        function questionMultiOptionMatch() { // função que procura uma questão com sua opção correspondente, evitando aparcer uma questão que não tenha opção
            let matchedOption = null;
            let matchedQuestion = null;

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
                        setMultiQuestion(matchedQuestion)
                        
                    } else if (!matchedQuestion) { // se ainda não encontrar uma questão com opção correspondente, procura uma nova questão e opção correspondentes
                        listMultiQuestions.forEach(question => {
                            matchedOption = listMultiOptions.find(option => {
                                return option.numberOption === question.numberQuestion // procura uma opção que tenha uma questão correspondente

                            })
                            matchedQuestion = question; // ao encontrar uma questão e opção correspondentes, capturar e mostra na tela

                        })
                    }
                
                })

            } else if (matchedOption) { // se tiver opção, não precisa mudar a questão
                // atualizando a opção
                setMultiOptionMap([matchedOption.option1, matchedOption.option2, matchedOption.option3, matchedOption.option4, matchedOption.option5])
                setMultiOptionMapNumberId([matchedOption.numberOption, matchedOption.id]) // capturar o número e o id da opção atual

            }

        }        
        
        questionMultiOptionMatch() // chamando a função que escolhe a questão e a opção correspondentes e mostra na tela

    }, [listMultiOptions, multiQuestion, listMultiQuestions])

    return (
        <div className={styles.multiOptionsAll}>
            {multiOptionMap[optNum1] && <div className={`optionNextMulti ${optionColorMulti} ${styles.inputTextMultiOptions}`}> {/* esta alternativa da opção múltipla só irá aparecer se 'multiOptionMap[optNum1]' existir */}
                <input
                    onChange={captureValueMultiFunc}                    
                    className={styles.inputMultiOptions}
                    type='checkbox'
                    value='0'
                />
                <p 
                    onClick={mouseOverOptionsMulti}
                    className={`optionsMultiP ${styles.textMultiOptions}`}
                >

                    {multiOptionMap[optNum1]}

                    <span className={styles.answerBoolClass} id='answerBool1'>
                        {(optNum1 === 0 || optNum1 === 1) && 'true'} {/* obs: tornar sempre verdadeira as opções 1 e 2 do backend, mesmo estando em ordens diferentes quando mostradas na tela */}
                    </span>
                </p>
            </div>}

            {multiOptionMap[optNum2] && <div className={`optionNextMulti ${optionColorMulti} ${styles.inputTextMultiOptions}`}> {/* esta alternativa da opção múltipla só irá aparecer se 'multiOptionMap[optNum2]' existir */}
                <input
                    onClick={captureValueMultiFunc}
                    className={styles.inputMultiOptions}
                    type='checkbox'
                    value='1'
                />
                <p 
                    onClick={mouseOverOptionsMulti}
                    className={`optionsMultiP ${styles.textMultiOptions}`}
                >

                    {multiOptionMap[optNum2]}

                    <span className={styles.answerBoolClass} id='answerBool2'>
                        {(optNum2 === 0 || optNum2 === 1) && 'true'} {/* obs: tornar sempre verdadeira as opções 1 e 2 do backend, mesmo estando em ordens diferentes quando mostradas na tela */}
                    </span>
                </p>
            </div>}

            {multiOptionMap[optNum3] && <div className={`optionNextMulti ${optionColorMulti} ${styles.inputTextMultiOptions}`}> {/* esta alternativa da opção múltipla só irá aparecer se 'multiOptionMap[optNum3]' existir */}
                <input
                    onClick={captureValueMultiFunc}
                    className={styles.inputMultiOptions}
                    type='checkbox'
                    value='2'
                />
                <p 
                    onClick={mouseOverOptionsMulti}
                    className={`optionsMultiP ${styles.textMultiOptions}`}
                >

                    {multiOptionMap[optNum3]}

                    <span className={styles.answerBoolClass} id='answerBool3'>
                        {(optNum3 === 0 || optNum3 === 1) && 'true'} {/* obs: tornar sempre verdadeira as opções 1 e 2 do backend, mesmo estando em ordens diferentes quando mostradas na tela */}
                    </span>
                </p>
            </div>}

            {multiOptionMap[optNum4] && <div className={`optionNextMulti ${optionColorMulti} ${styles.inputTextMultiOptions}`}> {/* esta alternativa da opção múltipla só irá aparecer se 'multiOptionMap[optNum4]' existir */}
                <input
                    onClick={captureValueMultiFunc}
                    className={styles.inputMultiOptions}
                    type='checkbox'
                    value='3'
                />
                <p 
                    onClick={mouseOverOptionsMulti}
                    className={`optionsMultiP ${styles.textMultiOptions}`}
                >
                   
                    {multiOptionMap[optNum4]}

                    <span className={styles.answerBoolClass} id='answerBool4'>
                        {(optNum4 === 0 || optNum4 === 1) && 'true'} {/* obs: tornar sempre verdadeira as opções 1 e 2 do backend, mesmo estando em ordens diferentes quando mostradas na tela */}
                    </span>
                </p>
            </div>}

            {multiOptionMap[optNum5] && <div className={`optionNextMulti ${optionColorMulti} ${styles.inputTextMultiOptions}`}> {/* esta alternativa da opção múltipla só irá aparecer se 'multiOptionMap[optNum5]' existir */}
                <input
                    onClick={captureValueMultiFunc}
                    className={styles.inputMultiOptions}
                    type='checkbox'
                    value='4'
                />
                <p 
                    onClick={mouseOverOptionsMulti}
                    className={`optionsMultiP ${styles.textMultiOptions}`}
                >
                 
                    {multiOptionMap[optNum5]}
                    
                    <span className={styles.answerBoolClass} id='answerBool5'>
                        {(optNum5 === 0 || optNum5 === 1) && 'true'} {/* obs: tornar sempre verdadeira as opções 1 e 2 do backend, mesmo estando em ordens diferentes quando mostradas na tela */}
                    </span>
                </p>
            </div>}

        </div>
    )
}

export default MultiOptions
