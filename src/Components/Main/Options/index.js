import { useEffect, useState } from 'react';
import styles from './Options.module.css';

function Options({ 
    setCaptureValue, optionColor, randomIndex, nextOptions, setNextOptions, optNum1, optNum2, optNum3, optNum4, optNum5, setOptNum1, setOptNum2, setOptNum3, setOptNum4, setOptNum5, optionMap, setOptionMap
}) {

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
                const res = await fetch("http://localhost:3001/options");
                const data = await res.json(); 
                
                if (!data) {
                    throw new Error("Dados inválidos");
                } else {
                    
                    // capturando toda a lista de opções da página main
                    data && setNextOptions(data)

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
                console.error('Erro ao buscar as opções:', error);
            }

        }
    
        fetchData()
    }, []);
    
    // função para capturar o valor que está marcado quando clicados no campo caixa de marcação (input)
    function captureValue(e) {
        nextOptions && setCaptureValue(e.target.value)

    }

    // função para capturar o valor que está marcado quando clicado no campo texto (p)
    function mouseOverOptionsMain(e) {
        const inputOptionMain = e.target.parentElement.childNodes[0]
        if (inputOptionMain) {
            inputOptionMain.checked = true
            setCaptureValue(inputOptionMain.value)
        } else {
            inputOptionMain.checked = false
        }

    }

    // Observação 1: Pode ser usada a função 'FILTER', também, nas opções que serão renderizadas neste componente como a seguir, mais indicado que o map, já que esta função filtra os elementos, pode ser usada no retorno do componente ou lá em cima na função fetchData() para capturar os dados (como não está sendo usada nesta parte do projeto então foi comentada)
    // const [optionFilter, setOptionFilter] = useState([])
    // useEffect(() => {
    //     nextOptions && nextOptions.map((e, i) => (i === parseInt([randomIndex])) && setOptionFilter([e.option1, e.option2, e.option3, e.option4, e.option5]))
        
    // }, [nextOptions])
    // console.log(optionFilter[optNum1], 83)

    useEffect(() => {

        // para garantir que todos os atributos sejam capturados antes de mostrar na tela e sejam 'opções' para a questão
        nextOptions && nextOptions.map((e, i) => (i === parseInt([randomIndex])) ? setOptionMap([e.option1, e.option2, e.option3, e.option4, e.option5]) : null) 
     
        // esconder a opção vazia, caso tenha questões com apenas 4 opções
        const optionMainVoid = document.querySelectorAll('.optionNext')

        if ((option1 === '') && (option2 !== '' && option3 !== '' && option4 !== '' && option5 !== '')) {
            optionMainVoid[0].style.display = 'none'
        } else if ((option2 === '') && (option1 !== '' && option3 !== '' && option4 !== '' && option5 !== '')) {
            optionMainVoid[1].style.display = 'none'
        } else if ((option3 === '') && (option1 !== '' && option2 !== '' && option4 !== '' && option5 !== '')) {
            optionMainVoid[2].style.display = 'none'
        } else if ((option4 === '') && (option1 !== '' && option2 !== '' && option3 !== '' && option5 !== '')) {
            optionMainVoid[3].style.display = 'none'
        } else if ((option5 === '') && (option1 !== '' && option2 !== '' && option3 !== '' && option4 !== '')) {
            optionMainVoid[4].style.display = 'none'
        }        
        
    }, [nextOptions, randomIndex, option1, option2, option3, option4, option5, setOption1, setOption2, setOption3, setOption4, setOption5, optNum1, optNum2, optNum3, optNum4, optNum5, setOptionMap])

    return(                 
        <div 
        className={styles.optionsMain}  
        id='option' 
        key={nextOptions && nextOptions.id}
        >
            <div className={`optionNext ${optionColor} ${styles.checkOpt}`}>
                <input
                    onClick={captureValue} 
                    className={styles.inputOptions}  
                    type='radio' 
                    name='options' 
                    value='0'
                />
                <p 
                    onClick={mouseOverOptionsMain}
                    className={`optionNextP ${styles.option}`}                
                >

                    {optionMap[optNum1]}

                </p>
            </div>
            <div className={`optionNext ${optionColor} ${styles.checkOpt}`}>
                <input
                    onClick={captureValue} 
                    className={styles.inputOptions} 
                    type='radio' 
                    name='options' 
                    value='1' 
                />
                <p 
                    onClick={mouseOverOptionsMain}
                    className={`optionNextP ${styles.option}`}                
                >

                    {optionMap[optNum2]}

                </p>
            </div>
            <div className={`optionNext ${optionColor} ${styles.checkOpt}`}>
                <input 
                    onClick={captureValue}
                    className={styles.inputOptions} 
                    type='radio' 
                    name='options' 
                    value='2' 
                />
                <p 
                    onClick={mouseOverOptionsMain}
                    className={`optionNextP ${styles.option}`}                
                >

                    {optionMap[optNum3]}

                </p>
            </div>
            <div className={`optionNext ${optionColor} ${styles.checkOpt}`}>
                <input 
                    onClick={captureValue}
                    className={styles.inputOptions} 
                    type='radio' 
                    name='options' 
                    value='3' 
                />
                <p 
                    onClick={mouseOverOptionsMain}
                    className={`optionNextP ${styles.option}`}                
                >

                    {optionMap[optNum4]}

                </p>
            </div>
            <div className={`optionNext ${optionColor} ${styles.checkOpt}`}>
                <input 
                    onClick={captureValue}
                    className={styles.inputOptions} 
                    type='radio' 
                    name='options' 
                    value='4' 
                />
                <p 
                    onClick={mouseOverOptionsMain}
                    className={`optionNextP ${styles.option}`}                
                >

                    {optionMap[optNum5]}
                    
                </p>
            </div>
        </div>        
    )
}

export default Options;
