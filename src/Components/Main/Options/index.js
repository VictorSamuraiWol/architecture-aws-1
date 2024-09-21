import { useEffect, useState } from 'react';
import styles from './Options.module.css';

function Options({ indexQuestions }) {

    const [newOptions, setNewOptions] = useState([]);
    const [elementObject0, setElementObject0] = useState('');

    useEffect(() => {
        //obs: using port 3002, mock another database
        fetch('http://localhost:3002/options')
        .then(res => res.json())
        .then(data => {

            setElementObject0(data[0]);

            data.filter((_, index) => index === indexQuestions ?setNewOptions(data[index]) : null)
        })
        .catch(error => console.log(error))
    }, [])   

    return(
        <>
            {(newOptions.length === 0) && <div className={styles.optionsMain} id='optionsMain' key={elementObject0.id}>
                <p className={styles.option}>{elementObject0.option1}</p>
                <p className={styles.option}>{elementObject0.option2}</p>
                <p className={styles.option}>{elementObject0.option3}</p>
                <p className={styles.option}>{elementObject0.option4}</p>
                <p className={styles.option}>{elementObject0.option5}</p>
            </div>}
            {newOptions && <div className={styles.options} id='options' key={newOptions.id}>
                <p className={styles.option}>{newOptions.option1}</p>
                <p className={styles.option}>{newOptions.option2}</p>
                <p className={styles.option}>{newOptions.option3}</p>
                <p className={styles.option}>{newOptions.option4}</p>
                <p className={styles.option}>{newOptions.option5}</p>
            </div>}
        </>       

    )
}

export default Options;
