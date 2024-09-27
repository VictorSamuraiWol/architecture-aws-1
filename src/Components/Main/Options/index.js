import { useEffect, useState } from 'react';
import styles from './Options.module.css';

function Options({ optionsMainAble, optionsAble, validate, newOptions, setNewOptions, restartOptions, optionMain, setOptionMain, setCaptureValue, optionColor }) {    
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:3001/options");
                const data = await res.json();
              
                //update the firts element
                setOptionMain(data[0]);

                //All options
                newOptions && setNewOptions(data)
    
            } catch (error) {
                console.log('Erro ao buscar as opções:', error);
            }

        }
    
        fetchData()
    }, []);

    function captureValue(e) {
        setCaptureValue(e.target.value)
    }
   
    return(
        <>            
            {optionMain && <div 
                className={optionsMainAble} 
                id='optionsMain' 
                key={optionMain.id}
            >
                <div className={`option ${optionColor} ${styles.checkOpt}`}>
                    <input
                        onClick={captureValue} 
                        type='radio' 
                        name='optionsMain' 
                        value='0' 
                    />
                    <p className={styles.option}>{optionMain.option1}</p>
                </div>
                <div className={`option ${optionColor} ${styles.checkOpt}`}>
                    <input
                        onClick={captureValue} 
                        type='radio' 
                        name='optionsMain' 
                        value='1' 
                    />
                    <p className={styles.option}>{optionMain.option2}</p>
                </div>
                <div className={`option ${optionColor} ${styles.checkOpt}`}>
                    <input 
                        onClick={captureValue}
                        type='radio' 
                        name='optionsMain' 
                        value='2' 
                    />
                    <p className={styles.option}>{optionMain.option3}</p>
                </div>
                <div className={`option ${optionColor} ${styles.checkOpt}`}>
                    <input 
                        onClick={captureValue}
                        type='radio' 
                        name='optionsMain' 
                        value='3' 
                    />
                    <p className={styles.option}>{optionMain.option4}</p>
                </div>
                <div className={`option ${optionColor} ${styles.checkOpt}`}>
                    <input 
                        onClick={captureValue}
                        type='radio' 
                        name='optionsMain' 
                        value='4' 
                    />
                    <p className={styles.option}>{optionMain.option5}</p>
                </div>
            </div>}

            {restartOptions && <div 
                className={optionsAble}  
                id='options' 
                key={newOptions.id}
            >
                <div className={`optionNext ${optionColor} ${styles.checkOpt}`}>
                    <input
                        onClick={captureValue} 
                        className={styles.inputOptions}  
                        type='radio' 
                        name='options' 
                        value='0'
                    />
                    <p className={styles.option}>{restartOptions.option1}</p>
                </div>
                <div className={`optionNext ${optionColor} ${styles.checkOpt}`}>
                    <input
                        onClick={captureValue} 
                        className={styles.inputOptions} 
                        type='radio' 
                        name='options' 
                        value='1' 
                    />
                    <p className={styles.option}>{restartOptions.option2}</p>
                </div>
                <div className={`optionNext ${optionColor} ${styles.checkOpt}`}>
                    <input 
                        onClick={captureValue}
                        className={styles.inputOptions} 
                        type='radio' 
                        name='options' 
                        value='2' 
                    />
                    <p className={styles.option}>{restartOptions.option3}</p>
                </div>
                <div className={`optionNext ${optionColor} ${styles.checkOpt}`}>
                    <input 
                        onClick={captureValue}
                        className={styles.inputOptions} 
                        type='radio' 
                        name='options' 
                        value='3' 
                    />
                    <p className={styles.option}>{restartOptions.option4}</p>
                </div>
                <div className={`optionNext ${optionColor} ${styles.checkOpt}`}>
                    <input 
                        onClick={captureValue}
                        className={styles.inputOptions} 
                        type='radio' 
                        name='options' 
                        value='4' 
                    />
                    <p className={styles.option}>{restartOptions.option5}</p>
                </div>
            </div>}
        </>       

    )
}

export default Options;
