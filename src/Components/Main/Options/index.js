import { useEffect, useState } from 'react';
import styles from './Options.module.css';

function Options({ indexQuestions, optionsMainAble, optionsAble, optionsDisablePageMain, validate }) {

    const [newOptions, setNewOptions] = useState([]);
    const [elementObject0, setElementObject0] = useState('');

    useEffect(() => {
        //obs: using port 3002, mock options's database
        fetch('http://localhost:3002/options')
        .then(res => res.json())
        .then(data => {

            setElementObject0(data[0]);

            data.filter((_, index) => (index === indexQuestions) ?setNewOptions(data[index]) : null)
            
        })
        .catch(error => console.log(error))
    }, [])   

    console.log(newOptions)

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
                className={optionsAble || optionsDisablePageMain}  id='options' 
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
