import styles from './PageMulti.module.css';
import MultiMain from '../../Components/MultiMain';
import { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import { useOutletContext } from 'react-router-dom';

function PageMulti() {
    const [listMultiQuestions, setListMultiQuestions] = useState([]);
    const [multiQuestions, setMultiQuestions] = useState([]);
    const [multiOptions, setMultiOptions] = useState([]);
    const [answerDisplay, setAnswerDisplay] = useState(styles.invisible);
    const [descriptionDisplay, setDescriptionDisplay] = useState(styles.invisible);
    const [optionValidate, setOptionValidate] = useState(styles.optionValidate);
    const [optionInvalidate, setOptionInvalidate] = useState(styles.optionInvalidate);
    const [randomIndexMulti, setRandomIndexMulti] = useState('');

    // pegando a variável booleana para habilitar ou desabilitar o icone quando tiver conectado ou não com a api usando 'useOutletContext()' da página base e o número random da questão anterior que foi respondida
    const { setAppearSound, lastRandomMulti, setLastRandomMulti } = useOutletContext();

    useEffect(() => {
        fetch("http://localhost:3001/multiQuestions")
        .then(res => res.json())
        .then(data => {
            if (!data) {
                throw new Error("Dados inválidos");

            } else {
                // toda a lista de questões da página multi
                setListMultiQuestions(data)       
            
                // habilitar os icones de som, imagem e footer presentes na 'página base' ao renderizar o conteúdo da página multi
                setAppearSound(true)

                // atribuindo um número random, mas diferente do anterior para não se repetir após mudar a página, repetir somente depois
                const random = uniqueRandomMulti(data.length) 
                setRandomIndexMulti(random)  
                setMultiQuestions(data[random])

            }

    })
    .catch(e => console.log(e))
  
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

    // função para esconder a opção vazia, caso tenha questões com apenas 4 opções, usando forEach
    function optionVoidFunc() {
        const optionMultiVoid = document.querySelectorAll('.optionNextMulti')
        const optionMultiVoidP = document.querySelectorAll('.optionsMultiP')

        optionMultiVoid.forEach((option, index) => {
            if (optionMultiVoidP[index]?.innerText === '') {
                option.style.display = 'none'
            } 
        })

    }
    
    useEffect(() => {
        // função que esconde a opção vazia, caso tenha       
        optionVoidFunc()

    }, [multiOptions]) // useEffect será chamado sempre que as opções (multiOptions) forem atualizadas

    return(
        <div
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

        </div> 

    )
}

export default PageMulti
