import { useOutletContext } from 'react-router-dom';
import styles from './MultiOptions.module.css';
import { useEffect, useState } from 'react';

function MultiOptions({ 
    multiOptions, setMultiOptions, optionColorMulti, setCaptureValueMulti, randomIndexMulti, captureValueMulti, multiOptionMap, setMultiOptionMap 
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

    const { setLoading } = useOutletContext()

    useEffect(() => {
        const fetchData = async () => {
            try {
                // habilitar o loading
                setLoading(true)

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

                    // desabilitar o loading                  
                    setLoading(false)

                }         
                
            } catch (error) {
                console.log('Erro ao buscar as opções:', error);

                // desabilitar o loading                  
                setLoading(false)
                
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

        // para garantir que todos os atributos sejam capturados antes de mostrar na tela e sejam 'opções' para a questão
        multiOptions && multiOptions.map((e, i) => (i === parseInt([randomIndexMulti])) ? setMultiOptionMap([e.option1, e.option2, e.option3, e.option4, e.option5]) : null)
        
    }, [multiOptions, randomIndexMulti, setMultiOptionMap])

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
