import { useEffect, useState } from 'react';
import styles from './Options.module.css';

function Options({ optionsMainAble, optionsAble, validate, newOptions, setNewOptions, restartOptions }) {    
    
    const [optionMain, setOptionMain] = useState([]);

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
   
    return(
        <>            
            {optionMain && <div 
                className={optionsMainAble} 
                id='optionsMain' 
                key={optionMain.id}
            >
                <div className={styles.checkOpt}>
                    <input 
                        type='radio' 
                        name='optionsMain' 
                        value='opt1' 
                    />
                    <p className={styles.option}>{optionMain.option1}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input 
                        type='radio' 
                        name='optionsMain' 
                        value='opt2' 
                    />
                    <p className={styles.option}>{optionMain.option2}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input 
                        type='radio' 
                        name='optionsMain' 
                        value='opt3' 
                    />
                    <p className={styles.option}>{optionMain.option3}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input 
                        type='radio' 
                        name='optionsMain' 
                        value='opt4' 
                    />
                    <p className={styles.option}>{optionMain.option4}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input 
                        type='radio' 
                        name='optionsMain' 
                        value='opt5' 
                    />
                    <p className={styles.option}>{optionMain.option5}</p>
                </div>
            </div>}

            {restartOptions && <div 
                className={optionsAble}  
                id='options' 
                key={newOptions.id}
            >
            <div className={styles.checkOpt}>
                    <input 
                        className={styles.inputOptions}  
                        type='radio' 
                        name='options' 
                        value='opt1' 
                    />
                    <p className={styles.option}>{restartOptions.option1}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input 
                        className={styles.inputOptions} 
                        type='radio' 
                        name='options' 
                        value='opt2' 
                    />
                    <p className={styles.option}>{restartOptions.option2}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input 
                        className={styles.inputOptions} 
                        type='radio' 
                        name='options' 
                        value='opt3' 
                    />
                    <p className={styles.option}>{restartOptions.option3}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input 
                        className={styles.inputOptions} 
                        type='radio' 
                        name='options' 
                        value='opt4' 
                    />
                    <p className={styles.option}>{restartOptions.option4}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input 
                        className={styles.inputOptions} 
                        type='radio' 
                        name='options' 
                        value='opt5' 
                    />
                    <p className={styles.option}>{restartOptions.option5}</p>
                </div>
            </div>}
        </>       

    )
}

export default Options;
