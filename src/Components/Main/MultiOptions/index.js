import styles from './MultiOptions.module.css';
import { useEffect, useState } from 'react';

function MultiOptions({ multiOptions, setMultiOptions, captureMultiOptionTag, setCaptureMultiOptionTag, setListAnswer, optionColorMulti }) {

    const [optNum1, setOptNum1] = useState('');
    const [optNum2, setOptNum2] = useState('');
    const [optNum3, setOptNum3] = useState('');
    const [optNum4, setOptNum4] = useState('');
    const [optNum5, setOptNum5] = useState('');
    const [listNumRandom, setListNumRandom] = useState([]);
    const [listMulti, setListMulti] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:3001/multiOptions");
                const data = await res.json();

                setMultiOptions(data)

                data.map(e => {
                    //sempre as duas primeiras opções que estão no db.json que serão as corretas: "option1 e option2"
                    setListMulti([e.option1, e.option2, e.option3, e.option4, e.option5])

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
                    
                })               
    
            } catch (error) {
                console.log('Erro ao buscar as opções:', error);
            }

        }
    
        fetchData()
    }, []);

    return (
        <div className={styles.multiOptionsAll}>
            <div className={`optionNextMulti ${optionColorMulti} ${styles.inputTextMultiOptions}`}>
                <input
                    className={styles.inputMultiOptions}
                    type='checkbox'
                    value='0'
                />
                <p className={styles.textMultiOptions}>{listMulti[optNum1]}<span className={styles.answerBoolClass} id='answerBool1'>{(optNum1 === 0 || optNum1 === 1) && 'true'}</span></p>
            </div>

            <div className={`optionNextMulti ${optionColorMulti} ${styles.inputTextMultiOptions}`}>
                <input
                    className={styles.inputMultiOptions}
                    type='checkbox'
                    value='1'
                />
                <p className={styles.textMultiOptions}>{listMulti[optNum2]}<span className={styles.answerBoolClass} id='answerBool2'>{(optNum2 === 0 || optNum2 === 1) && 'true'}</span></p>
            </div>

            <div className={`optionNextMulti ${optionColorMulti} ${styles.inputTextMultiOptions}`}>
                <input
                    className={styles.inputMultiOptions}
                    type='checkbox'
                    value='2'
                />
                <p className={styles.textMultiOptions}>{listMulti[optNum3]}<span className={styles.answerBoolClass} id='answerBool3'>{(optNum3 === 0 || optNum3 === 1) && 'true'}</span></p>
            </div>

            <div className={`optionNextMulti ${optionColorMulti} ${styles.inputTextMultiOptions}`}>
                <input
                    className={styles.inputMultiOptions}
                    type='checkbox'
                    value='3'
                />
                <p className={styles.textMultiOptions}>{listMulti[optNum4]}<span className={styles.answerBoolClass} id='answerBool4'>{(optNum4 === 0 || optNum4 === 1) && 'true'}</span></p>
            </div>

            <div className={`optionNextMulti ${optionColorMulti} ${styles.inputTextMultiOptions}`}>
                <input
                    className={styles.inputMultiOptions}
                    type='checkbox'
                    value='4'
                />
                <p className={styles.textMultiOptions}>{listMulti[optNum5]}<span className={styles.answerBoolClass} id='answerBool5'>{(optNum5 === 0 || optNum5 === 1) && 'true'}</span></p>
            </div>
        </div>
    )
}

export default MultiOptions
