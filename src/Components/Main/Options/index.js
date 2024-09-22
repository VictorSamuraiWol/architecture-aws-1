import { useEffect, useState } from 'react';
import styles from './Options.module.css';

function Options({ indexQuestions, optionsMainAble, optionsAble, optionsDisablePageMain, validate }) {

    const [newOptions, setNewOptions] = useState([]);
    const [elementObject0, setElementObject0] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                //obs: usando a porta 3002, mock de database de opções
                const res = await fetch('http://localhost:3002/options');
                const data = await res.json();
                
                setElementObject0(data[0]);
    
                data.filter((_, index) => {
                    if (index === indexQuestions) {
                        setNewOptions(data[index]);
                    }
                    return null;
                });
    
                console.log(newOptions, 39);
    
            } catch (error) {
                console.log('Erro ao buscar as opções:', error);
            }
        };
    
        fetchData();
    }, []);
    

    // console.log(newOptions, 23)
    // console.log(elementObject0, 24)

    return(
        <>
            {(newOptions.length === 0) && <div 
                className={optionsMainAble} 
                id='optionsMain' 
                key={elementObject0.id}
            >
                <div className={styles.checkOpt}>
                    <input type='radio' name='optionsMain' value='opt1' />
                    <p className={styles.option}>{elementObject0.option1}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input type='radio' name='optionsMain' value='opt2' />
                    <p className={styles.option}>{elementObject0.option2}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input type='radio' name='optionsMain' value='opt3' />
                    <p className={styles.option}>{elementObject0.option3}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input type='radio' name='optionsMain' value='opt4' />
                    <p className={styles.option}>{elementObject0.option4}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input type='radio' name='optionsMain' value='opt5' />
                    <p className={styles.option}>{elementObject0.option5}</p>
                </div>
            </div>}

            {newOptions && validate==='true' && <div 
                className={optionsAble}  id='options' 
                key={newOptions.id}
            >
            <div className={styles.checkOpt}>
                    <input className={styles.inputOptions}  type='radio' name='options' value='opt1' />
                    <p className={styles.option}>{newOptions.option1}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input className={styles.inputOptions} type='radio' name='options' value='opt2' />
                    <p className={styles.option}>{newOptions.option2}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input className={styles.inputOptions} type='radio' name='options' value='opt3' />
                    <p className={styles.option}>{newOptions.option3}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input className={styles.inputOptions} type='radio' name='options' value='opt4' />
                    <p className={styles.option}>{newOptions.option4}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input className={styles.inputOptions} type='radio' name='options' value='opt5' />
                    <p className={styles.option}>{newOptions.option5}</p>
                </div>
            </div>}
        </>       

    )
}

export default Options;
