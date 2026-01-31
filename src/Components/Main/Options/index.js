import styles from './Options.module.css'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../DataContext'

function Options({ 
    setCaptureValue, optionColorStyle, inputColorStyle,  
    optNum1, optNum2, optNum3, optNum4, optNum5, optionMain
}) {
    
    const [itemA, setItemA] = useState('') // valor do item A
    const [itemB, setItemB] = useState('') // valor do item B
    const [itemC, setItemC] = useState('') // valor do item C
    const [itemD, setItemD] = useState('') // valor do item D
    const [itemE, setItemE] = useState('') // valor do item E

    const { listUnicOptionsContext } = useContext(DataContext)

    // função para capturar o valor que está marcado quando clicados no campo caixa de marcação (input)
    function captureValueFunc(e) {
        listUnicOptionsContext && setCaptureValue(e.target.value)

    }

    // função para capturar o valor que está marcado quando clicado no campo texto (p)
    function mouseClickOptionsMain(e) {
        const inputOptionMain = e.target.parentElement.parentElement.childNodes[0]

        if (inputOptionMain) {
            inputOptionMain.checked = true
            setCaptureValue(inputOptionMain.value)

        } else {
            inputOptionMain.checked = false

        }

    }
  
    useEffect(() => { // atualizar os itens A, B, C, D e E, dependendo do número de alternativas da opção, se for 4 (A, B, C e D) se for 5 (A, B, C, D e E) 
        function itemOrderSelection() { // função que atualiza a ordem dos itens A, B, C, D e E da opção
            if (optionMain[optNum1] && optionMain[optNum2] && optionMain[optNum3] && optionMain[optNum4] && optionMain[optNum5]) {
                setItemA('a)') 
                setItemB('b)') 
                setItemC('c)') 
                setItemD('d)') 
                setItemE('e)')

            } else if (!optionMain[optNum1] || !optionMain[optNum2] || !optionMain[optNum3] || !optionMain[optNum4] || !optionMain[optNum5]) {
                setItemA('a)') 
                setItemB('b)') 
                setItemC('c)') 
                setItemD('d)')
                setItemE('')

            }
        
        }

        itemOrderSelection()

    }, [optionMain, optNum1, optNum2, optNum3, optNum4, optNum5]) 

    return(                 
        optionMain && <div 
        className={styles.optionsMain}  
        id='option'
        key={listUnicOptionsContext && listUnicOptionsContext.id}
        >
            {/* esta alternativa da opção única só irá aparecer se 'optionMain[optNum1]' existir */}
            {optionMain[optNum1] && <div className={`optionNext ${optionColorStyle} ${styles.alternativeOptions}`}> 
                <input 
                    onClick={captureValueFunc}
                    className={inputColorStyle}                                                                
                    type='radio' 
                    name='options' 
                    value={optNum1}
                />

                <div
                    onClick={mouseClickOptionsMain}
                    className={styles.textOptions}              
                >
                    <span className='item'>
                        {itemA}
                    </span>

                    <span>&nbsp;</span> {/* espaço em branco que o HTML não colapsa e não quebra linha (non-breaking space) */}

                    <p>
                        {optionMain[optNum1]}
                    </p>

                </div>
                
            </div>}

            {/* esta alternativa da opção única só irá aparecer se 'optionMain[optNum2]' existir */}
            {optionMain[optNum2] &&  <div className={`optionNext ${optionColorStyle} ${styles.alternativeOptions}`}> 
                <input
                    onClick={captureValueFunc}
                    className={inputColorStyle}
                    type='radio' 
                    name='options' 
                    value={optNum2}
                />

                <div
                    onClick={mouseClickOptionsMain}
                    className={styles.textOptions}   
                >
                    <span className='item'>
                        {/* condição para aparecer o item A ou B */}
                        {(!optionMain[optNum1] && itemA) || itemB}
                    </span>

                    <span>&nbsp;</span> {/* espaço em branco que o HTML não colapsa e não quebra linha (non-breaking space) */}

                    <p>
                        {optionMain[optNum2]}
                    </p>

                </div>

            </div>}

            {/* esta alternativa da opção única só irá aparecer se 'optionMain[optNum3]' existir */}
            {optionMain[optNum3] && <div className={`optionNext ${optionColorStyle} ${styles.alternativeOptions}`}> 
                <input 
                    onClick={captureValueFunc}
                    className={inputColorStyle}
                    type='radio' 
                    name='options' 
                    value={optNum3}
                />

                <div
                    onClick={mouseClickOptionsMain}
                    className={styles.textOptions}   
                >
                    <span className='item'>
                        {/* condição para aparecer o item B ou C */}
                        {((!optionMain[optNum1] || !optionMain[optNum2]) && itemB) || itemC}
                    </span>

                    <span>&nbsp;</span> {/* espaço em branco que o HTML não colapsa e não quebra linha (non-breaking space) */}

                    <p>
                        {optionMain[optNum3]}
                    </p>

                </div>

            </div>}

            {/* esta alternativa da opção única só irá aparecer se 'optionMain[optNum4]' existir */}
            {optionMain[optNum4] && <div className={`optionNext ${optionColorStyle} ${styles.alternativeOptions}`}> 
                <input
                    onClick={captureValueFunc}
                    className={inputColorStyle}
                    type='radio' 
                    name='options' 
                    value={optNum4}
                />

                <div
                    onClick={mouseClickOptionsMain}
                    className={styles.textOptions}   
                >
                    <span className='item'>
                        {/* condição para aparecer o item C ou D */}
                        {((!optionMain[optNum1] || !optionMain[optNum2] || !optionMain[optNum3]) && itemC) || itemD}
                    </span>

                    <span>&nbsp;</span> {/* espaço em branco que o HTML não colapsa e não quebra linha (non-breaking space) */}

                    <p>
                        {optionMain[optNum4]}
                    </p>

                </div>

            </div>}

            {/* esta alternativa da opção única só irá aparecer se 'optionMain[optNum5]' existir */}
            {optionMain[optNum5] && <div className={`optionNext ${optionColorStyle} ${styles.alternativeOptions}`}> 
                <input
                    onClick={captureValueFunc}
                    className={inputColorStyle}
                    type='radio' 
                    name='options' 
                    value={optNum5}
                />

                <div
                    onClick={mouseClickOptionsMain}
                    className={styles.textOptions}   
                >
                    <span className='item'>
                        {/* condição para aparecer o item D ou E */}
                        {((!optionMain[optNum1] || !optionMain[optNum2] || !optionMain[optNum3] || !optionMain[optNum4]) && itemD) || itemE}
                    </span>

                    <span>&nbsp;</span> {/* espaço em branco que o HTML não colapsa e não quebra linha (non-breaking space) */}

                    <p>
                        {optionMain[optNum5]}
                    </p>

                </div>

            </div>}

        </div>      

    )    
    
}

export default Options;
