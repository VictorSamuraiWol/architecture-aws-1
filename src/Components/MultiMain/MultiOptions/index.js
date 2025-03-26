import styles from './MultiOptions.module.css';
import { useEffect, useState } from 'react';

function MultiOptions({ 
    multiOptions, setMultiOptions, optionColorMulti, setCaptureValueMulti, randomIndexMulti, captureValueMulti 
}) {

    const [optNum1, setOptNum1] = useState('');
    const [optNum2, setOptNum2] = useState('');
    const [optNum3, setOptNum3] = useState('');
    const [optNum4, setOptNum4] = useState('');
    const [optNum5, setOptNum5] = useState('');
    const [listNumRandom, setListNumRandom] = useState([]);

    // constantes para armazenar as opções
    const [option1, setOption1] = useState('')
    const [option2, setOption2] = useState('')
    const [option3, setOption3] = useState('')
    const [option4, setOption4] = useState('')
    const [option5, setOption5] = useState('')

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:3001/multiOptions");
                const data = await res.json();

                if (!data) {
                    throw new Error("Dados inválidos");
                } else {
                    // capturando a opção correspondente a questão através da utilização do mesmo número random da página multi
                    // data && setMultiOptions(data[randomIndexMulti])

                    data && setMultiOptions(data)

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
                
            } catch (error) {
                console.log('Erro ao buscar as opções:', error);
            }

        }    
        fetchData()

    }, []);

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
        
        // para garantir que todas as opções sejam capturadas antes de mostrar na tela
        setOption1(multiOptions[randomIndexMulti] && Object.values(multiOptions[randomIndexMulti])[optNum1])
        setOption2(multiOptions[randomIndexMulti] && Object.values(multiOptions[randomIndexMulti])[optNum2])
        setOption3(multiOptions[randomIndexMulti] && Object.values(multiOptions[randomIndexMulti])[optNum3])
        setOption4(multiOptions[randomIndexMulti] && Object.values(multiOptions[randomIndexMulti])[optNum4])
        setOption5(multiOptions[randomIndexMulti] && Object.values(multiOptions[randomIndexMulti])[optNum5])

        // esconder a opção vazia, caso tenha questões com apenas 4 opções
        const optionMultiVoid = document.querySelectorAll('.optionNextMulti')

        if ((option1 === '') && (option2 !== '' && option3 !== '' && option4 !== '' && option5 !== '')) {
            optionMultiVoid[0].style.display = 'none'
        } else if ((option2 === '') && (option1 !== '' && option3 !== '' && option4 !== '' && option5 !== '')) {
            optionMultiVoid[1].style.display = 'none'
        } else if ((option3 === '') && (option1 !== '' && option2 !== '' && option4 !== '' && option5 !== '')) {
            optionMultiVoid[2].style.display = 'none'
        } else if ((option4 === '') && (option1 !== '' && option2 !== '' && option3 !== '' && option5 !== '')) {
            optionMultiVoid[3].style.display = 'none'
        } else if ((option5 === '') && (option1 !== '' && option2 !== '' && option3 !== '' && option4 !== '')) {
            optionMultiVoid[4].style.display = 'none'
        }
        
    }, [multiOptions, randomIndexMulti, option1, option2, option3, option4, option5, optNum1, optNum2, optNum3, optNum4, optNum5])
    
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

                    {option1}

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

                    {option2}

                    <span 
                        className={styles.answerBoolClass} id='answerBool1'
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
   
                    {option3}

                    <span 
                        className={styles.answerBoolClass} id='answerBool1'
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
                   
                    {option4}

                    <span 
                        className={styles.answerBoolClass} id='answerBool1'
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
                 
                    {option5}
                    
                    <span 
                        className={styles.answerBoolClass} id='answerBool1'
                    >

                        {(optNum5 === 0 || optNum5 === 1) && 'true'}

                    </span>
                </p>
            </div>
        </div>
    )
}

export default MultiOptions
