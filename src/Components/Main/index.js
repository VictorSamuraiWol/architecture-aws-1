import styles from './Main.module.css'
import Answer from './Answer';
import ButtonAnswer from './ButtonAnswer';
import Question from './Question';
import ButtonNext from './ButtonNext';
import { Link } from 'react-router-dom';
import Options from './Options';
import { useState } from 'react';
import ModalResults from '../ModalResults';

function Main({ 
    question, answer, srcImg, descriptionP, answerDisplay, descriptionDisplay, setAnswerDisplay, setDescriptionDisplay, optionValidate, optionInvalidate, randomIndex, nextOptions, setNextOptions, uniqueRandomMain, listQuestions, setNextQuestions, setRandomIndex, nextQuestions
}) {
   
    const [captureValue, setCaptureValue] = useState('')
    const [optionColor, setOptionColor] = useState(styles.optionColor)    
    const [optNum1, setOptNum1] = useState('');
    const [optNum2, setOptNum2] = useState('');
    const [optNum3, setOptNum3] = useState('');
    const [optNum4, setOptNum4] = useState('');
    const [optNum5, setOptNum5] = useState('');
    const [optionMap, setOptionMap] = useState([]) // mapear todas as opções da página main

    // pegar o estado da variável booleana que torna 'true' toda vez que responder, seja na opção correta ou errada na página main, como na variável booleana 'questionAnwer', será utilizada no componente 'ButtonNext' para saber se pode ir para a próxima página somente depois de responder
    const [questionAnswerButtonNextMain, setQuestionAnswerButtonNextMain] = useState(false)
 
    // Gera um número aleatório entre 1 e 3 para usar na função getPath
    const number = Math.floor(Math.random() * 3) + 1;

    // Definindo o caminho com base no número gerado
    // função para aumentar a probabilidade de cair mais questões de uma escolha do que de múltipla escolha
    const getPath = (number) => {
        
        switch (number) {
            case 1:
            case 2:
                return generateNewQuestionMain(); // quando o número  randômico for 1 ou 2 ativar a função
            case 3:
                return '/page-multi'; // quando o número randômico for 3 ir para página multi

            default:
                return '/';

        }

    };

    function generateNewQuestionMain() {

        // chamando a função que gera número randômico
        const random = uniqueRandomMain(listQuestions.length)
        setRandomIndex(random)

        // gerando novas questões
        setNextQuestions(listQuestions[random])

    }  

    return(
        <div className={styles.main}>           
            <Question 
                question={question} 
            
            />

            <Options  
                randomIndex={randomIndex}
                optionColor={optionColor}
                nextOptions={nextOptions}
                setNextOptions={setNextOptions}        
                setCaptureValue={setCaptureValue}
                optNum1={optNum1}
                optNum2={optNum2}
                optNum3={optNum3}
                optNum4={optNum4}
                optNum5={optNum5}
                setOptNum1={setOptNum1}
                setOptNum2={setOptNum2}
                setOptNum3={setOptNum3}
                setOptNum4={setOptNum4}
                setOptNum5={setOptNum5}
                optionMap={optionMap}
                setOptionMap={setOptionMap}
                nextQuestions={nextQuestions}

            />

            <ButtonAnswer            
                answerDisplay={answerDisplay}
                setAnswerDisplay={setAnswerDisplay}
                descriptionDisplay={descriptionDisplay}
                setDescriptionDisplay={setDescriptionDisplay}
                answer={answer}
                optionValidate={optionValidate}
                optionInvalidate={optionInvalidate}
                nextOptions={nextOptions}                      
                captureValue={captureValue}
                optionColor={optionColor}
                optNum1={optNum1}
                optNum2={optNum2}
                optNum3={optNum3}
                optNum4={optNum4}
                optNum5={optNum5}
                randomIndex={randomIndex}
                setQuestionAnswerButtonNextMain={setQuestionAnswerButtonNextMain}
                optionMap={optionMap}

            />

            <Answer 
                answer={answer} 
                srcImg={srcImg} 
                descriptionP={descriptionP}
                answerDisplay={answerDisplay}
                descriptionDisplay={descriptionDisplay}
                setDescriptionDisplay={setDescriptionDisplay}
                nextOptions={nextOptions}
                
            />

            {/* fazer com que o Link só mude a página se tiver respondido alguma opção, seja correta ou incorreta */}
            <Link
                to={questionAnswerButtonNextMain === true ? number === 3 && getPath(number) : '/'}                
            >
                <ButtonNext
                    questionAnswerButtonNextMain={questionAnswerButtonNextMain}
                    uniqueRandomMain={uniqueRandomMain}
                    
                    // passar a função para usar no onClick do componente ButtonNext
                    getPath={getPath}
                    number={number}

                    // tornar a resposta invisível ao mudar de questão
                    setAnswerDisplay={setAnswerDisplay}
                    
                    // tornar a descrição invisível ao mudar de questão
                    setDescriptionDisplay={setDescriptionDisplay}

                />
            </Link>

            <ModalResults /> 
                      
        </div>
    )

}

export default Main;
