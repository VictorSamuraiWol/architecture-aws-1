import { useEffect, useState } from 'react';
import styles from './Options.module.css';

function Options({ setCaptureValue, optionColor, randomIndex, nextOptions, setNextOptions, optNum1, optNum2, optNum3, optNum4, optNum5, setOptNum1, setOptNum2, setOptNum3, setOptNum4, setOptNum5 }) {    
    
    const [listNumRandom, setListNumRandom] = useState([]);
 
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
                    className={styles.option}                
                >
                    {nextOptions && Object.values(nextOptions[randomIndex])[optNum1]}
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
                    className={styles.option}
                >
                    {nextOptions && Object.values(nextOptions[randomIndex])[optNum2]}
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
                    className={styles.option}
                >
                    {nextOptions && Object.values(nextOptions[randomIndex])[optNum3]}
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
                    className={styles.option}
                >
                    {nextOptions && Object.values(nextOptions[randomIndex])[optNum4]}
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
                    className={styles.option}
                >
                    {nextOptions && Object.values(nextOptions[randomIndex])[optNum5]}
                </p>
            </div>
        </div>
        
    )
}

export default Options;
