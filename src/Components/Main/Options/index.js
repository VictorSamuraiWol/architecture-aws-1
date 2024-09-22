import { useEffect, useState } from 'react';
import styles from './Options.module.css';

function Options({ indexQuestions }) {

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

    return(
        <>
            {(newOptions.length === 0) && <div className={styles.optionsMain} id='optionsMain' key={elementObject0.id}>
                <div className={styles.checkOpt}>
                    <input type='radio' name='opcao' value='opt1'></input>
                    <p className={styles.option}>{elementObject0.option1}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input type='radio' name='opcao' value='opt2'></input>
                    <p className={styles.option}>{elementObject0.option2}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input type='radio' name='opcao' value='opt3'></input>
                    <p className={styles.option}>{elementObject0.option3}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input type='radio' name='opcao' value='opt4'></input>
                    <p className={styles.option}>{elementObject0.option4}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input type='radio' name='opcao' value='opt5'></input>
                    <p className={styles.option}>{elementObject0.option5}</p>
                </div>
            </div>}

            {newOptions && <div className={styles.options} id='options' key={newOptions.id}>
            <div className={styles.checkOpt}>
                    <input type='radio' name='opcao' value='opt1'></input>
                    <p className={styles.option}>{newOptions.option1}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input type='radio' name='opcao' value='opt2'></input>
                    <p className={styles.option}>{newOptions.option2}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input type='radio' name='opcao' value='opt3'></input>
                    <p className={styles.option}>{newOptions.option3}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input type='radio' name='opcao' value='opt4'></input>
                    <p className={styles.option}>{newOptions.option4}</p>
                </div>
                <div className={styles.checkOpt}>
                    <input type='radio' name='opcao' value='opt5'></input>
                    <p className={styles.option}>{newOptions.option5}</p>
                </div>
            </div>}
        </>       

    )
}

export default Options;
