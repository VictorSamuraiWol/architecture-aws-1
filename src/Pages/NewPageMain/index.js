import styles from './NewPageMain.module.css';
import Header from '../../Components/Header';
import Main from '../../Components/Main';
import { useContext, useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Loader from '../../Components/Loader';
import { DataContext } from '../../Components/DataContext';

function NewPageMain() {

    const [answerDisplay, setAnswerDisplay] = useState(styles.invisible);
    const [descriptionDisplay, setDescriptionDisplay] = useState(styles.invisible);   
    const [optionValidate, setOptionValidate] = useState(styles.optionValidate);
    const [optionInvalidate, setOptionInvalidate] = useState(styles.optionInvalidate);
    const [listQuestions, setListQuestions] = useState([]);
    const [nextQuestions, setNextQuestions] = useState('');
    const [randomIndex, setRandomIndex] = useState('');
    const [nextOptions, setNextOptions] = useState('');
    
    // pegando as variáveis através do 'useContext' do componente 'DataContext'
    const { listUnicQuestionsContext, listUnicQuestionsContextLength, loading  } = useContext(DataContext)
    
    // pegando a variável booleana para habilitar ou desabilitar tudo quando tiver conectado ou não com a api usando 'useOutletContext()' da página base e o número random da questão anterior que foi respondida
    const { requestData, setRequestData, lastRandomMain, setLastRandomMain, setActivePageFormsQuestionsOptions } = useOutletContext();    

    useEffect(() => {

        if (listUnicQuestionsContext) {

            // toda a lista de questões da página main (AJEITAR DEPOIS USANDO O listUnicQuestionsLength NO COMPONENTE MAIN )
            setListQuestions(listUnicQuestionsContext)

            // habilitar os icones de som, imagem e footer presentes na 'página base' ao renderizar o conteúdo da página main (PASSAR PARA DataContext)?
            setRequestData(true)

            if (listUnicQuestionsContextLength) {
                // atribuindo um número random, mas diferente do anterior para não se repetir após mudar a página, repetir somente depois
                const random = uniqueRandomMain(listUnicQuestionsContextLength) 
                setRandomIndex(random)  
                setNextQuestions(listUnicQuestionsContext[random])
            }

            // tornar o cronômetro e os icones dos audios ativos ao sair da página forms (PASSAR PARA DataContext)?
            setActivePageFormsQuestionsOptions(false)

        }

    }, [ listUnicQuestionsContext, listUnicQuestionsContextLength, setRequestData, setActivePageFormsQuestionsOptions ])

    // função para garantir que o novo número aleatório seja sempre diferente do anterior
    function uniqueRandomMain(dataLength) {
        let random;
        do {
            random = Math.floor(Math.random()*dataLength) 
        }
        while (random === lastRandomMain) // repete até obter um número diferente
        
        setLastRandomMain(random) // atualiza o último número gerado
        return random                
    
    }

    return(
        <div>
            {requestData && <div 
                id='allQuestionsMainId' 
                className={`${styles.allQuestionsMainClass} allquestions`} 
                key={nextQuestions.id}
            >        
                {nextQuestions &&
                    <Header 
                        title="Architecture Questions - Randomly"

                    />
                }

                {nextQuestions && 
                    <Main 
                        question={nextQuestions.question}
                        answer={nextQuestions.answer}
                        srcImg={nextQuestions.srcImg}
                        descriptionP={nextQuestions.descriptionP}
                        elementId={nextQuestions.elementId}
                        numberQuestion={nextQuestions.numberQuestion}
                        answerDisplay={answerDisplay}
                        setAnswerDisplay={setAnswerDisplay}
                        descriptionDisplay={descriptionDisplay}
                        setDescriptionDisplay={setDescriptionDisplay}
                        optionValidate={optionValidate}
                        optionInvalidate={optionInvalidate}
                        randomIndex={randomIndex}
                        nextOptions={nextOptions}
                        setNextOptions={setNextOptions}                       
                        uniqueRandomMain={uniqueRandomMain}
                        listQuestions={listQuestions}
                        setNextQuestions={setNextQuestions}
                        setRandomIndex={setRandomIndex}                        
                        nextQuestions={nextQuestions}
                    
                    />
                }  

                {loading && <Loader />}            

            </div>}

        </div>
    )

}

export default NewPageMain
