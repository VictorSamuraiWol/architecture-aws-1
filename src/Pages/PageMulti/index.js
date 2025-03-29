import styles from './PageMulti.module.css';
import MultiMain from '../../Components/MultiMain';
import { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import { useOutletContext } from 'react-router-dom';
import Loader from '../../Components/Loader';

function PageMulti() {
    const [listMultiQuestions, setListMultiQuestions] = useState([]);
    const [multiQuestions, setMultiQuestions] = useState([]);
    const [multiOptions, setMultiOptions] = useState([]);
    const [answerDisplay, setAnswerDisplay] = useState(styles.invisible);
    const [descriptionDisplay, setDescriptionDisplay] = useState(styles.invisible);
    const [optionValidate, setOptionValidate] = useState(styles.optionValidate);
    const [optionInvalidate, setOptionInvalidate] = useState(styles.optionInvalidate);
    const [randomIndexMulti, setRandomIndexMulti] = useState('');

    // pegando a variável booleana para habilitar ou desabilitar tudo quando tiver conectado ou não com a api usando 'useOutletContext()' da página base e o número random da questão anterior que foi respondida
    const { requestData, setRequestData, lastRandomMulti, setLastRandomMulti, setActivePageFormsQuestionsOptions, loading, setLoading } = useOutletContext();

    useEffect(() => {
        // habilitar o loading
        setLoading(true)

        fetch("http://localhost:3001/multiQuestions")
        .then(res => res.json())
        .then(data => {
            if (!data) {
                throw new Error("Dados inválidos");

            } else {
                // toda a lista de questões da página multi
                setListMultiQuestions(data)       
            
                // habilitar os icones de som, imagem e footer presentes na 'página base' ao renderizar o conteúdo da página multi
                setRequestData(true)

                // atribuindo um número random, mas diferente do anterior para não se repetir após mudar a página, repetir somente depois
                const random = uniqueRandomMulti(data.length) 
                setRandomIndexMulti(random)  
                setMultiQuestions(data[random])

                // tornar o cronômetro e os icones dos audios ativos ao sair da página forms
                setActivePageFormsQuestionsOptions(false)

                // desabilitar o loading
                setLoading(false)

            }

    })
    .catch(e => console.log(e))

    // desabilitar o loading
    setLoading(false)
  
    }, [])

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
                {multiQuestions.length !== 0 &&
                    <Header 
                        title={multiQuestions.title}

                    />
                }

                {multiQuestions.length !== 0 &&
                    <MultiMain 
                        question={multiQuestions.question} 
                        answer={multiQuestions.answer}
                        answerText={multiQuestions.answerText}
                        srcImg={multiQuestions.srcImg}
                        descriptionP={multiQuestions.descriptionP}
                        elementId={multiQuestions.id}
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

                    />
                }

                {loading && <Loader />}           
            
            </div>}
               
        </div>

    )
}

export default PageMulti
