import { useContext, useEffect, useState } from 'react';
import styles from './Options.module.css';
import { DataContext } from '../../DataContext';
import { TfiControlShuffle } from 'react-icons/tfi';

function Options({ 
    setCaptureValue, optionColor, randomIndex, listOptions, setListOptions, optNum1, optNum2, optNum3, optNum4, optNum5, setOptNum1, setOptNum2, setOptNum3, setOptNum4, setOptNum5, optionMap, setOptionMap, nextQuestion, setNextQuestion, setOptionMapNumberId, listQuestions
}) {

    // pegando as variáveis através do 'useContext' do componente 'DataContext'
    const { listUnicQuestionsContext, listUnicOptionsContext } = useContext(DataContext)

    

// ---------------------------------------------------------------------------
    // useEffect(() => {
        
    //     if (listUnicOptionsContext) {

    //         // capturando toda a lista de opções da página main
    //         setListOptions(listUnicOptionsContext)

    //         // gerando um número para randomizar toda vez que renderizar
    //         while (listNumRandom && listNumRandom.length < 5) {
    //             const random = Math.floor(Math.random() * 5);
    //             if (!listNumRandom.includes(random)) {
    //                 listNumRandom.push(random)
    //                 setOptNum1(listNumRandom[0])
    //                 setOptNum2(listNumRandom[1])
    //                 setOptNum3(listNumRandom[2])
    //                 setOptNum4(listNumRandom[3])
    //                 setOptNum5(listNumRandom[4])
    //             }                    
    //         }

    //     }         

    // }, [ listUnicOptionsContext, setListOptions, setOptNum1, setOptNum2, setOptNum3, setOptNum4, setOptNum5, listNumRandom ]);
// ----------------------------------------------------------------------------



    useEffect(() => {        
        if (!listUnicOptionsContext) return; // se listUnicOptionsContext não existir, não faça nada e saia do useEffect 

        // capturando toda a lista de opções da página main
        setListOptions(listUnicOptionsContext);

        const randomNumbers = []; // armazena a lista de números randômicos
        // gerando um número para randomizar toda vez que renderizar
        while (randomNumbers.length < 5) { // o comprimento deve ser no máximo o número de opções disponíveis, neste caso '5'
            const random = Math.floor(Math.random() * 5);
            if (!randomNumbers.includes(random)) {
                randomNumbers.push(random);                
            }
        }
            
        setOptNum1(randomNumbers[0]);
        setOptNum2(randomNumbers[1]);
        setOptNum3(randomNumbers[2]);
        setOptNum4(randomNumbers[3]);
        setOptNum5(randomNumbers[4]);     

    }, [listUnicOptionsContext]);
   
    // função para capturar o valor que está marcado quando clicados no campo caixa de marcação (input)
    function captureValue(e) {
        listOptions && setCaptureValue(e.target.value)

    }

    // função para capturar o valor que está marcado quando clicado no campo texto (p)
    function mouseClickOptionsMain(e) {
        const inputOptionMain = e.target.parentElement.childNodes[0]
        if (inputOptionMain) {
            inputOptionMain.checked = true
            setCaptureValue(inputOptionMain.value)
        } else {
            inputOptionMain.checked = false
        }

    }

    useEffect(() => { // mapeando todas as opções para procurar a opção que possue o mesmo número da questão e mostra-la na tela junto com a questão        
        // para garantir que todos os atributos sejam capturados antes de mostrar na tela e sejam 'opções' para a questão
   
               
        
        // ----------------------------------------------------------------------------------
        // function questionOptionMatch() {
        //     listOptions.forEach(option => {
        //         // a possibilidade será acionada se os números corresponderem, mesmo que a posição da questão e da opção sejam diferentes no backend
        //         if (parseInt(option.numberOption) === parseInt(nextQuestion.numberQuestion)) {
        //             setOptionMap([option.option1, option.option2, option.option3, option.option4, option.option5])
        //             setOptionMapNumberId([option.numberOption, option.id]) // capturar o número e o id da opção atual
        
        //         } else if (parseInt(option.numberOption) !== parseInt(nextQuestion.numberQuestion)) {
        //             listOptions.forEach(option => {
            //                 listQuestions.forEach(question => {
        //                     if (option.numberOption === question.numberQuestion) {                                
        //                         setOptionMap([option.option1, option.option2, option.option3, option.option4, option.option5])
        //                         setOptionMapNumberId([option.numberOption, option.id]) // capturar o número e o id da opção atual
                                
        //                         setNextQuestion(question)
                                
        //                     }

        //                 })
        //             })
        
        //         }
        
        //     })    

        // }
        
        // questionOptionMatch()
        // ------------------------------------------------------------------------------------
        
        
        
        if (!listQuestions || !nextQuestion || !listOptions) return;

        function questionOptionMatch() { // função que procura uma questão com sua opção correspondente, evitando aparcer uma questão que não tenha opção
            let matchedOption = null;
            let matchedQuestion = null;

            // tenta corresponder diretamente com a questão atual
            matchedOption = listOptions.find(option => { // encontrar uma opção que tenha uma questão correspondente               
                return Number(option.numberOption) === Number(nextQuestion.numberQuestion)

            })
            
            // Se não encontrou, tenta corresponder via lista de questões
            if (!matchedOption) { // se a opção não tiver questão correspondente, procura uma nova questão e opção correspondentes
                listOptions.forEach(option => {
                    matchedQuestion = listQuestions.find(question => {
                        return question.numberQuestion === option.numberOption // procura uma questão que tenha uma opção correspondente

                    })

                    if (matchedQuestion) { // se a questão tiver uma opção correspondente, captura a opção
                        matchedOption = option;
                        
                    } else if (!matchedQuestion) { // se ainda não encontrar uma questão com opção correspondente, procura uma nova questão e opção correspondentes
                        listQuestions.forEach(question => {
                            matchedOption = listOptions.find(option => {
                                return option.numberOption === question.numberQuestion // procura uma opção que tenha uma questão correspondente

                            })
                            matchedQuestion = question; // ao encontrar uma questão e opção correspondentes, capturar e mostra na tela

                        })
                    }
                })

                setNextQuestion(matchedQuestion) // atualizando a questão

            } else if (matchedOption) { // se tiver opção, não precisa mudar a questão
                // atualizando a opção
                setOptionMap([matchedOption.option1, matchedOption.option2, matchedOption.option3, matchedOption.option4, matchedOption.option5])
                setOptionMapNumberId([matchedOption.numberOption, matchedOption.id]) // capturar o número e o id da opção atual

            }

        }        
        
        questionOptionMatch()

    }, [listOptions, nextQuestion, listQuestions])

    useEffect(() => {
        // colocando em outro useEffect a variável 'optionMap' para evitar o excesso de atualizações pelas mudanças de estado, pelo fato de no useEffect acima ter o 'setOptionMap'
        // esconder a opção vazia, caso tenha questões com apenas 4 opções
        const optionMainVoid = document.querySelectorAll('.optionNext')

        if ((optionMap[optNum1] === '') && (optionMap[optNum2] !== '' && optionMap[optNum3] !== '' && optionMap[optNum4] !== '' && optionMap[optNum5] !== '')) {
            optionMainVoid[0].style.display = 'none'
        } else if ((optionMap[optNum2] === '') && (optionMap[optNum1] !== '' && optionMap[optNum3] !== '' && optionMap[optNum4] !== '' && optionMap[optNum5] !== '')) {
            optionMainVoid[1].style.display = 'none'
        } else if ((optionMap[optNum3] === '') && (optionMap[optNum1] !== '' && optionMap[optNum2] !== '' && optionMap[optNum4] !== '' && optionMap[optNum5] !== '')) {
            optionMainVoid[2].style.display = 'none'
        } else if ((optionMap[optNum4] === '') && (optionMap[optNum1] !== '' && optionMap[optNum2] !== '' && optionMap[optNum3] !== '' && optionMap[optNum5] !== '')) {
            optionMainVoid[3].style.display = 'none'
        } else if ((optionMap[optNum5] === '') && (optionMap[optNum1] !== '' && optionMap[optNum2] !== '' && optionMap[optNum3] !== '' && optionMap[optNum4] !== '')) {
            optionMainVoid[4].style.display = 'none'
        }  

    }, [optNum1, optNum2, optNum3, optNum4, optNum5, optionMap])

    return(                 
        <div 
        className={styles.optionsMain}  
        id='option' 
        key={listOptions && listOptions.id}
        >
            <div className={`optionNext ${optionColor} ${styles.checkOpt}`}>
                <input
                    onClick={captureValue}
                    className={styles.inputOptions}  
                    type='radio' 
                    name='options' 
                    value='0'
                />
                <p 
                    onClick={mouseClickOptionsMain}
                    className={`optionNextP ${styles.option}`}                
                >

                    {optionMap[optNum1]}

                </p>
            </div>

            <div className={`optionNext ${optionColor} ${styles.checkOpt}`}>
                <input
                    onClick={captureValue}
                    className={styles.inputOptions} 
                    type='radio' 
                    name='options' 
                    value='1' 
                />
                <p 
                    onClick={mouseClickOptionsMain}
                    className={`optionNextP ${styles.option}`}                
                >

                    {optionMap[optNum2]}

                </p>
            </div>

            <div className={`optionNext ${optionColor} ${styles.checkOpt}`}>
                <input 
                    onClick={captureValue}
                    className={styles.inputOptions} 
                    type='radio' 
                    name='options' 
                    value='2' 
                />
                <p 
                    onClick={mouseClickOptionsMain}
                    className={`optionNextP ${styles.option}`}                
                >

                    {optionMap[optNum3]}

                </p>
            </div>

            <div className={`optionNext ${optionColor} ${styles.checkOpt}`}>
                <input 
                    onClick={captureValue}
                    className={styles.inputOptions} 
                    type='radio' 
                    name='options' 
                    value='3' 
                />
                <p 
                    onClick={mouseClickOptionsMain}
                    className={`optionNextP ${styles.option}`}                
                >

                    {optionMap[optNum4]}

                </p>
            </div>

            <div className={`optionNext ${optionColor} ${styles.checkOpt}`}>
                <input 
                    onClick={captureValue}
                    className={styles.inputOptions} 
                    type='radio' 
                    name='options' 
                    value='4' 
                />
                <p 
                    onClick={mouseClickOptionsMain}
                    className={`optionNextP ${styles.option}`}                
                >

                    {optionMap[optNum5]}
                    
                </p>
            </div>

        </div>      

    )    
    
}

export default Options;
