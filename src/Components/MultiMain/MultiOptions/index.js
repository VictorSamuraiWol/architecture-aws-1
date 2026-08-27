import styles from './MultiOptions.module.css'
import { useEffect, useState } from 'react'

function MultiOptions({ 
    optionColorStyle, inputColorStyle, setCaptureValueMulti, captureValueMulti, 
    optionMulti, optNum1, optNum2, optNum3, optNum4, optNum5
}) {

    const [itemA, setItemA] = useState('') // valor do item A
    const [itemB, setItemB] = useState('') // valor do item B
    const [itemC, setItemC] = useState('') // valor do item C
    const [itemD, setItemD] = useState('') // valor do item D
    const [itemE, setItemE] = useState('') // valor do item E

    // função para capturar os dois valores que estão marcados quando clicados no campo caixa de marcação (input)
    function captureValueMultiFunc(e) {
        const { value, checked } = e.target
        setCaptureValueMulti(prevValues => checked ? [...prevValues, value] : prevValues.filter(v => v !== value))

    }

    // função para capturar os dois valores que estão marcados quando clicados no campo texto (p)
    function mouseClickOptionsMulti(e) {
        const inputOptionMulti = e.target.parentElement.parentElement.childNodes[1]

        if (inputOptionMulti.checked === false) {
            inputOptionMulti.checked = true
            setCaptureValueMulti(prevValues => inputOptionMulti.checked && !captureValueMulti.includes(`${inputOptionMulti.value}`) ? [...prevValues, inputOptionMulti.value] : prevValues.filter(v => v !== inputOptionMulti.value))

        } else if (inputOptionMulti.checked === true) {
            inputOptionMulti.checked = false
            setCaptureValueMulti(prevValues => inputOptionMulti.checked && !captureValueMulti.includes(`${inputOptionMulti.value}`) ? [...prevValues, inputOptionMulti.value] : prevValues.filter(v => v !== inputOptionMulti.value))

        }
        
    }

    useEffect(() => { // atualizar os itens A, B, C, D e E, dependendo do número de alternativas da opção, se for 4 (A, B, C e D) se for 5 (A, B, C, D e E) 
        function itemOrderSelection() { // função que atualiza a ordem dos itens A, B, C, D e E da opção
            if (optionMulti[optNum1] && optionMulti[optNum2] && optionMulti[optNum3] && optionMulti[optNum4] && optionMulti[optNum5]) {
                setItemA('a)') 
                setItemB('b)') 
                setItemC('c)') 
                setItemD('d)') 
                setItemE('e)')

            } else if (!optionMulti[optNum1] || !optionMulti[optNum2] || !optionMulti[optNum3] || !optionMulti[optNum4] || !optionMulti[optNum5]) {
                setItemA('a)') 
                setItemB('b)') 
                setItemC('c)') 
                setItemD('d)')
                setItemE('')

            }
            
        }

        itemOrderSelection()
        
    }, [optionMulti, optNum1, optNum2, optNum3, optNum4, optNum5]) 

    return (
        optionMulti && <div className={styles.multiOptions}>
            {optionMulti[optNum1] && <div className={`optionNextMulti ${optionColorStyle} ${styles.alternativeMultiOptions}`}> {/* esta alternativa da opção múltipla só irá aparecer se 'optionMulti[optNum1]' existir */}
                <input
                    onChange={captureValueMultiFunc}                    
                    className={inputColorStyle}
                    type='checkbox'
                    value={optNum1}
                />

                <div 
                    onClick={mouseClickOptionsMulti}
                    className={styles.textMultiOptions}
                >
                    <span className='item'>
                        {itemA}
                    </span>

                    <span>&nbsp;</span> {/* espaço em branco que o HTML não colapsa e não quebra linha (non-breaking space) */}

                    <p>                        
                        {optionMulti[optNum1]}

                        <span className={styles.answerBool} id='answerBool1'>
                            {(optNum1 === 0 || optNum1 === 1) && 'true'} 
                        </span>
                    </p>

                </div>                
                
            </div>}

            {optionMulti[optNum2] && <div className={`optionNextMulti ${optionColorStyle} ${styles.alternativeMultiOptions}`}> {/* esta alternativa da opção múltipla só irá aparecer se 'optionMulti[optNum2]' existir */}
                <input
                    onClick={captureValueMultiFunc}
                    className={inputColorStyle}
                    type='checkbox'
                    value={optNum2}
                />

                <div 
                    onClick={mouseClickOptionsMulti}
                    className={styles.textMultiOptions}
                >
                    <span className='item'>
                        {/* {condição para aparecer o item A ou B} */}
                        {(!optionMulti[optNum1] && itemA) || itemB}
                    </span>

                    <span>&nbsp;</span> {/* espaço em branco que o HTML não colapsa e não quebra linha (non-breaking space) */}

                    <p>
                        {optionMulti[optNum2]}

                        <span className={styles.answerBool} id='answerBool2'>
                            {(optNum2 === 0 || optNum2 === 1) && 'true'} 
                        </span>
                    </p>

                </div>

            </div>}

            {optionMulti[optNum3] && <div className={`optionNextMulti ${optionColorStyle} ${styles.alternativeMultiOptions}`}> {/* esta alternativa da opção múltipla só irá aparecer se 'optionMulti[optNum3]' existir */}
                <input
                    onClick={captureValueMultiFunc}
                    className={inputColorStyle}
                    type='checkbox'
                    value={optNum3}
                />

               <div 
                    onClick={mouseClickOptionsMulti}
                    className={styles.textMultiOptions}
                >
                    <span className='item'>
                        {/* condição para aparecer o item B ou C */}
                        {((!optionMulti[optNum1] || !optionMulti[optNum2]) && itemB) || itemC}
                    </span>

                    <span>&nbsp;</span> {/* espaço em branco que o HTML não colapsa e não quebra linha (non-breaking space) */}

                    <p>
                        {optionMulti[optNum3]}

                        <span className={styles.answerBool} id='answerBool3'>
                            {(optNum3 === 0 || optNum3 === 1) && 'true'} 
                        </span>
                    </p>

                </div>

            </div>}

            {optionMulti[optNum4] && <div className={`optionNextMulti ${optionColorStyle} ${styles.alternativeMultiOptions}`}> {/* esta alternativa da opção múltipla só irá aparecer se 'optionMulti[optNum4]' existir */}
                <input
                    onClick={captureValueMultiFunc}
                    className={inputColorStyle}
                    type='checkbox'
                    value={optNum4}
                />

                <div 
                    onClick={mouseClickOptionsMulti}
                    className={styles.textMultiOptions}
                >
                    <span className='item'>
                        {/* condição para aparecer o item C ou D */}
                        {((!optionMulti[optNum1] || !optionMulti[optNum2] || !optionMulti[optNum3]) && itemC) || itemD}
                    </span>

                    <span>&nbsp;</span> {/* espaço em branco que o HTML não colapsa e não quebra linha (non-breaking space) */}

                    <p>
                        {optionMulti[optNum4]}

                        <span className={styles.answerBool} id='answerBool4'>
                            {(optNum4 === 0 || optNum4 === 1) && 'true'} 
                        </span>
                    </p>

                </div>

            </div>}

            {optionMulti[optNum5] && <div className={`optionNextMulti ${optionColorStyle} ${styles.alternativeMultiOptions}`}> {/* esta alternativa da opção múltipla só irá aparecer se 'optionMulti[optNum5]' existir */}
                <input
                    onClick={captureValueMultiFunc}
                    className={inputColorStyle}
                    type='checkbox'
                    value={optNum5}
                />

                <div 
                    onClick={mouseClickOptionsMulti}
                    className={styles.textMultiOptions}
                >
                    <span className='item'>
                        {/* condição para aparecer o item D ou E */}
                        {((!optionMulti[optNum1] || !optionMulti[optNum2] || !optionMulti[optNum3] || !optionMulti[optNum4]) && itemD) || itemE}
                    </span>

                    <span>&nbsp;</span> {/* espaço em branco que o HTML não colapsa e não quebra linha (non-breaking space) */}

                    <p>
                        {optionMulti[optNum5]}

                        <span className={styles.answerBool} id='answerBool5'>
                            {(optNum5 === 0 || optNum5 === 1) && 'true'} 
                        </span>
                    </p>

                </div>

            </div>}

        </div>
    )
}

export default MultiOptions
