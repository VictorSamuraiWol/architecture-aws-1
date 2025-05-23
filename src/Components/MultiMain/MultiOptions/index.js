import styles from './MultiOptions.module.css';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../DataContext';

function MultiOptions({ 
    multiOptions, setMultiOptions, optionColorMulti, setCaptureValueMulti, randomIndexMulti, captureValueMulti, multiOptionMap, setMultiOptionMap,multiQuestions
}) {

    const [optNum1, setOptNum1] = useState('');
    const [optNum2, setOptNum2] = useState('');
    const [optNum3, setOptNum3] = useState('');
    const [optNum4, setOptNum4] = useState('');
    const [optNum5, setOptNum5] = useState('');
    const [listNumRandom, setListNumRandom] = useState([]);

    // pegando as variáveis através do 'useContext' do componente 'DataContext'
    const { listMultiOptionsContext } = useContext(DataContext)

    useEffect(() => {

        if (listMultiOptionsContext) {
        
            setMultiOptions(listMultiOptionsContext)

            // gerando um número para randomizar toda vez que renderizar
            while (listNumRandom && listNumRandom.length < 5) {
                const random = Math.floor(Math.random() * 5);
                if (!listNumRandom.includes(random)) {
                    listNumRandom.push(random)
                    setOptNum1(listNumRandom[0])
                    setOptNum2(listNumRandom[1])
                    setOptNum3(listNumRandom[2])
                    setOptNum4(listNumRandom[3])
                    setOptNum5(listNumRandom[4])
                }                    
            }
        
        }                      
    
    }, [ listMultiOptionsContext, setMultiOptions, setOptNum1, setOptNum2, setOptNum3, setOptNum4, setOptNum5, listNumRandom ]);

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
            console.error('Erro nos dados da função "mouseOverOptionsMulti(e)" do componente multiOptions, verificar na l.67 ou próximo.')

        }
        
    }

    useEffect(() => {

        // para garantir que todos os atributos sejam capturados antes de mostrar na tela e sejam 'opções' para a questão
        multiOptions && multiOptions.map((option) => {

            // a possibilidade será acionada se os números corresponderem, mesmo que a posição da questão e da opção sejam diferentes no backend          
            if (parseInt(option.numberOption) === parseInt(multiQuestions.numberQuestion)) {
                setMultiOptionMap([option.option1, option.option2, option.option3, option.option4, option.option5])

            }

            return null
       
        }) 
        
    }, [multiOptions, randomIndexMulti, setMultiOptionMap, multiQuestions])

    useEffect(() => {

        // colocando em outro useEffect a variável 'optionMultiMap' para evitar o excesso de atualizações pelas mudanças de estado, pelo fato de no useEffect acima ter o 'setMultiOptionMap'
        // esconder a opção vazia, caso tenha questões com apenas 4 opções
        const optionMultiVoid = document.querySelectorAll('.optionNextMulti')
    
        if ((multiOptionMap[optNum1] === '') && (multiOptionMap[optNum2] !== '' && multiOptionMap[optNum3] !== '' && multiOptionMap[optNum4] !== '' && multiOptionMap[optNum5] !== '')) {
            optionMultiVoid[0].style.display = 'none'
        } else if ((multiOptionMap[optNum2] === '') && (multiOptionMap[optNum1] !== '' && multiOptionMap[optNum3] !== '' && multiOptionMap[optNum4] !== '' && multiOptionMap[optNum5] !== '')) {
            optionMultiVoid[1].style.display = 'none'
        } else if ((multiOptionMap[optNum3] === '') && (multiOptionMap[optNum1] !== '' && multiOptionMap[optNum2] !== '' && multiOptionMap[optNum4] !== '' && multiOptionMap[optNum5] !== '')) {
            optionMultiVoid[2].style.display = 'none'
        } else if ((multiOptionMap[optNum4] === '') && (multiOptionMap[optNum1] !== '' && multiOptionMap[optNum2] !== '' && multiOptionMap[optNum3] !== '' && multiOptionMap[optNum5] !== '')) {
            optionMultiVoid[3].style.display = 'none'
        } else if ((multiOptionMap[optNum5] === '') && (multiOptionMap[optNum1] !== '' && multiOptionMap[optNum2] !== '' && multiOptionMap[optNum3] !== '' && multiOptionMap[optNum4] !== '')) {
            optionMultiVoid[4].style.display = 'none'
        }  

    }, [optNum1, optNum2, optNum3, optNum4, optNum5, multiOptionMap])

    return (
        <div className={styles.multiOptionsAll}>
            <div className={`optionNextMulti ${optionColorMulti} ${styles.inputTextMultiOptions}`}>
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

                        {(optNum1 === 0 || optNum1 === 1) && 'true'}

                    </span>
                </p>
            </div>

            <div className={`optionNextMulti ${optionColorMulti} ${styles.inputTextMultiOptions}`}>
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

                    <span 
                        className={styles.answerBoolClass} id='answerBool2'
                    >

                        {(optNum2 === 0 || optNum2 === 1) && 'true'}

                    </span>
                </p>
            </div>

            <div className={`optionNextMulti ${optionColorMulti} ${styles.inputTextMultiOptions}`}>
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

                    <span 
                        className={styles.answerBoolClass} id='answerBool3'
                    >

                        {(optNum3 === 0 || optNum3 === 1) && 'true'}

                    </span>
                </p>
            </div>

            <div className={`optionNextMulti ${optionColorMulti} ${styles.inputTextMultiOptions}`}>
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

                    <span 
                        className={styles.answerBoolClass} id='answerBool4'
                    >

                        {(optNum4 === 0 || optNum4 === 1) && 'true'}

                    </span>
                </p>
            </div>

            <div className={`optionNextMulti ${optionColorMulti} ${styles.inputTextMultiOptions}`}>
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
                    
                    <span 
                        className={styles.answerBoolClass} id='answerBool5'
                    >

                        {(optNum5 === 0 || optNum5 === 1) && 'true'}

                    </span>
                </p>
            </div>

        </div>
    )
}

export default MultiOptions
