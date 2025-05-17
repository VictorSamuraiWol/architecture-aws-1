import { useContext, useEffect, useState } from 'react';
import styles from './Options.module.css';
import { DataContext } from '../../DataContext';

function Options({ 
    setCaptureValue, optionColor, randomIndex, nextOptions, setNextOptions, optNum1, optNum2, optNum3, optNum4, optNum5, setOptNum1, setOptNum2, setOptNum3, setOptNum4, setOptNum5, optionMap, setOptionMap, nextQuestions
}) {

    const [listNumRandom, setListNumRandom] = useState([]);

    // pegando as variáveis através do 'useContext' do componente 'DataContext'
    const { listUnicOptionsContext } = useContext(DataContext)
    
    useEffect(() => {
        
        if (listUnicOptionsContext) {

            // capturando toda a lista de opções da página main
            setNextOptions(listUnicOptionsContext)

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

    }, [ listUnicOptionsContext, setNextOptions, setOptNum1, setOptNum2, setOptNum3, setOptNum4, setOptNum5, listNumRandom ]);
    
    // função para capturar o valor que está marcado quando clicados no campo caixa de marcação (input)
    function captureValue(e) {
        nextOptions && setCaptureValue(e.target.value)

    }

    // função para capturar o valor que está marcado quando clicado no campo texto (p)
    function mouseClickOptionsMain(e) {
        const inputOptionMain = e.target.parentElement.childNodes[0]
        if (inputOptionMain) {
            inputOptionMain.checked = true
            setCaptureValue(inputOptionMain.value)
        } else {
            inputOptionMain.checked = false
        }

    }

    // Observação: Pode ser usada a função 'FILTER', também, nas opções que serão renderizadas neste componente como a seguir, mais indicado que o map, já que esta função filtra os elementos, pode ser usada no retorno do componente ou lá em cima na função fetchData() para capturar os dados (como não está sendo usada nesta parte do projeto então foi comentada)
    // const [optionFilter, setOptionFilter] = useState([])
    // useEffect(() => {
    //     nextOptions && nextOptions.map((e, i) => (i === parseInt([randomIndex])) && setOptionFilter([e.option1, e.option2, e.option3, e.option4, e.option5]))
        
    // }, [nextOptions])
    // console.log(optionFilter[optNum1], 83)

    useEffect(() => {
        
        // para garantir que todos os atributos sejam capturados antes de mostrar na tela e sejam 'opções' para a questão
        nextOptions && nextOptions.map((option) => {

            // a possibilidade será acionada se os números corresponderem, mesmo que a posição da questão e da opção sejam diferentes no backend
            if (parseInt(option.numberOption) === parseInt(nextQuestions.numberQuestion)) {
                setOptionMap([option.option1, option.option2, option.option3, option.option4, option.option5])

            }

            return null
           
        })

    }, [nextOptions, randomIndex, setOptionMap, nextQuestions])

    useEffect(() => {

        // colocando em outro useEffect a variável 'optionMap' para evitar o excesso de atualizações pelas mudanças de estado, pelo fato de no useEffect acima ter o 'setOptionMap'
        // esconder a opção vazia, caso tenha questões com apenas 4 opções
        const optionMainVoid = document.querySelectorAll('.optionNext')

        if ((optionMap[optNum1] === '') && (optionMap[optNum2] !== '' && optionMap[optNum3] !== '' && optionMap[optNum4] !== '' && optionMap[optNum5] !== '')) {
            optionMainVoid[0].style.display = 'none'
        } else if ((optionMap[optNum2] === '') && (optionMap[optNum1] !== '' && optionMap[optNum3] !== '' && optionMap[optNum4] !== '' && optionMap[optNum5] !== '')) {
            optionMainVoid[1].style.display = 'none'
        } else if ((optionMap[optNum3] === '') && (optionMap[optNum1] !== '' && optionMap[optNum2] !== '' && optionMap[optNum4] !== '' && optionMap[optNum5] !== '')) {
            optionMainVoid[2].style.display = 'none'
        } else if ((optionMap[optNum4] === '') && (optionMap[optNum1] !== '' && optionMap[optNum2] !== '' && optionMap[optNum3] !== '' && optionMap[optNum5] !== '')) {
            optionMainVoid[3].style.display = 'none'
        } else if ((optionMap[optNum5] === '') && (optionMap[optNum1] !== '' && optionMap[optNum2] !== '' && optionMap[optNum3] !== '' && optionMap[optNum4] !== '')) {
            optionMainVoid[4].style.display = 'none'
        }  

    }, [optNum1, optNum2, optNum3, optNum4, optNum5, optionMap])

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
                    onClick={mouseClickOptionsMain}
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
                    onClick={mouseClickOptionsMain}
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
                    onClick={mouseClickOptionsMain}
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
                    onClick={mouseClickOptionsMain}
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
                    onClick={mouseClickOptionsMain}
                    className={`optionNextP ${styles.option}`}                
                >

                    {optionMap[optNum5]}
                    
                </p>
            </div>

        </div>      

    )    
    
}

export default Options;
