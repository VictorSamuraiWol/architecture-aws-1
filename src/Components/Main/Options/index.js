import { useEffect, useState } from 'react';
import styles from './Options.module.css';

function Options({ setCaptureValue, optionColor, randomIndex, nextOptions, setNextOptions }) {    
    
    const [listNumRandom, setListNumRandom] = useState([]);
    const [listRandomOptions, setListRandomOptions] = useState([]);
    const [optNum1, setOptNum1] = useState('');
    const [optNum2, setOptNum2] = useState('');
    const [optNum3, setOptNum3] = useState('');
    const [optNum4, setOptNum4] = useState('');
    const [optNum5, setOptNum5] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:3001/options");
                const data = await res.json(); 
                
                if (!data) {
                    throw new Error("Dados inválidos");
                } else {
                    // capturando a opção correspondente a questão através da utilização do mesmo número random
                    setNextOptions(data[randomIndex])

                    //pegando os dados e criando uma lista de todas as opções para depois randomizar as opções na própria questão com os números randomizados das variáveis optNum
                    data[randomIndex] && setListRandomOptions([data[randomIndex].option1, data[randomIndex].option2, data[randomIndex].option3, data[randomIndex].option4, data[randomIndex].option5])

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
    
    function captureValue(e) {
        nextOptions && setCaptureValue(e.target.value)
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
                <p className={styles.option}>{nextOptions && Object.values(nextOptions)[optNum1]}</p>
            </div>
            <div className={`optionNext ${optionColor} ${styles.checkOpt}`}>
                <input
                    onClick={captureValue} 
                    className={styles.inputOptions} 
                    type='radio' 
                    name='options' 
                    value='1' 
                />
                <p className={styles.option}>{nextOptions && Object.values(nextOptions)[optNum2]}</p>
            </div>
            <div className={`optionNext ${optionColor} ${styles.checkOpt}`}>
                <input 
                    onClick={captureValue}
                    className={styles.inputOptions} 
                    type='radio' 
                    name='options' 
                    value='2' 
                />
                <p className={styles.option}>{nextOptions && Object.values(nextOptions)[optNum3]}</p>
            </div>
            <div className={`optionNext ${optionColor} ${styles.checkOpt}`}>
                <input 
                    onClick={captureValue}
                    className={styles.inputOptions} 
                    type='radio' 
                    name='options' 
                    value='3' 
                />
                <p className={styles.option}>{nextOptions && Object.values(nextOptions)[optNum4]}</p>
            </div>
            <div className={`optionNext ${optionColor} ${styles.checkOpt}`}>
                <input 
                    onClick={captureValue}
                    className={styles.inputOptions} 
                    type='radio' 
                    name='options' 
                    value='4' 
                />
                <p className={styles.option}>{nextOptions && Object.values(nextOptions)[optNum5]}</p>
            </div>
        </div>
        
    )
}

export default Options;
