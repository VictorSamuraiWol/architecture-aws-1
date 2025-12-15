import styles from './PageMulti.module.css';
import MultiMain from '../../Components/MultiMain';
import { useContext, useEffect, useState } from 'react';
import Header from '../../Components/Header';
import { useOutletContext } from 'react-router-dom';
import Loader from '../../Components/Loader';
import { DataContext } from '../../Components/DataContext';

function PageMulti() {
    
    const [listMultiQuestions, setListMultiQuestions] = useState([]);
    const [multiQuestions, setMultiQuestions] = useState([]);
    const [multiOptions, setMultiOptions] = useState([]);
    const [answerDisplay, setAnswerDisplay] = useState(styles.invisible);
    const [descriptionDisplay, setDescriptionDisplay] = useState(styles.invisible);
    const [optionValidate, setOptionValidate] = useState(styles.optionValidate);
    const [optionInvalidate, setOptionInvalidate] = useState(styles.optionInvalidate);
    const [randomIndexMulti, setRandomIndexMulti] = useState('');

    // pegando as variáveis através do 'useContext' do componente 'DataContext'
    const { listMultiQuestionsContext, listMultiQuestionsContextLength, loading } = useContext(DataContext)

    // pegando a variável booleana para habilitar ou desabilitar tudo quando tiver conectado ou não com a api usando 'useOutletContext()' da página base e o número random da questão anterior que foi respondida
    const { requestData, setRequestData, lastRandomMulti, setLastRandomMulti, setActivePageFormsQuestionsOptions } = useOutletContext();

    useEffect(() => {

        if (listMultiQuestionsContext) {

            // toda a lista de questões da página multi
            setListMultiQuestions(listMultiQuestionsContext)       
        
            // habilitar os icones de som, imagem e footer presentes na 'página base' ao renderizar o conteúdo da página main (PASSAR PARA DataContext)
            setRequestData(true)

            if (listMultiQuestionsContextLength) {
                // atribuindo um número random, mas diferente do anterior para não se repetir após mudar a página, repetir somente depois
                const random = uniqueRandomMulti(listMultiQuestionsContextLength) 
                setRandomIndexMulti(random)  
                setMultiQuestions(listMultiQuestionsContext[random])                
            }

            // tornar o cronômetro e os icones dos audios ativos ao sair da página forms (PASSAR PARA DataContext)?
            setActivePageFormsQuestionsOptions(false)

        }

    }, [ listMultiQuestionsContext, listMultiQuestionsContextLength, setRequestData, setActivePageFormsQuestionsOptions ])

    // função para garantir que o novo número aleatório seja sempre diferente do anterior
    function uniqueRandomMulti(dataLength) {
        let random;
        do {
            random = Math.floor(Math.random()*dataLength)
        }
        while (random === lastRandomMulti) // repete até obter um número diferente
        
        setLastRandomMulti(random) // atualiza o último número gerado
        
        return random                
    
    }

    return(
        <div>     
            {requestData && <div
                id='allQuestionsMultiId' 
                className={styles.allQuestionsMultiClass} 
                key={multiQuestions.id}
            >
                {multiQuestions &&
                    <Header 
                        title="Architecture Questions - Randomly"

                    />
                }

                {multiQuestions &&
                    <MultiMain 
                        question={multiQuestions.question} 
                        answer={multiQuestions.answer}
                        answerText={multiQuestions.answerText}
                        srcImg={multiQuestions.srcImg}
                        descriptionP={multiQuestions.descriptionP}
                        elementId={multiQuestions.id}
                        numberQuestion={multiQuestions.numberQuestion}
                        multiOptions={multiOptions}
                        setMultiOptions={setMultiOptions}
                        answerDisplay={answerDisplay}
                        setAnswerDisplay={setAnswerDisplay}
                        descriptionDisplay={descriptionDisplay}
                        setDescriptionDisplay={setDescriptionDisplay}
                        optionValidate={optionValidate}
                        optionInvalidate={optionInvalidate}
                        randomIndexMulti={randomIndexMulti}
                        uniqueRandomMulti={uniqueRandomMulti}
                        multiQuestions={multiQuestions}
                        setMultiQuestions={setMultiQuestions}

                    />
                }

                {loading && <Loader />}           
            
            </div>}
               
        </div>

    )
}

export default PageMulti
