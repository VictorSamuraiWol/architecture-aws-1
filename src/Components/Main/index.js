import styles from './Main.module.css'
import Question from '../Question';
import Options from './Options';
import ButtonAnswer from '../ButtonAnswer';
import ButtonNext from '../ButtonNext';
import AnswerDescription from '../AnswerDescription';
import MenuTools from '../MenuTools';
import PopupRepeatedAlternatives from '../PopupRepeatedAlternatives';
import ModalResults from '../ModalResults';
import { useContext, useState } from 'react';
import { DataContext } from '../DataContext';
import { Link } from 'react-router-dom';

function Main({ 
    question, answer, srcImg, descriptionP, numberQuestion, answerDisplay, descriptionDisplay, 
    setAnswerDisplay, setDescriptionDisplay, optionValidate, optionInvalidate, randomIndex, listOptions, 
    setListOptions, uniqueRandomMain, setNextQuestion, setRandomIndex, nextQuestion, listQuestions
}) {

    // pegando as variáveis através do 'useContext' do componente 'DataContext'
    const { listUnicQuestionsContext, listUnicQuestionsContextLength } = useContext(DataContext)
   
    const [captureValue, setCaptureValue] = useState('')
    const [optionColor, setOptionColor] = useState(styles.optionColor)  
    const [optNum1, setOptNum1] = useState('');
    const [optNum2, setOptNum2] = useState('');
    const [optNum3, setOptNum3] = useState('');
    const [optNum4, setOptNum4] = useState('');
    const [optNum5, setOptNum5] = useState('');
    const [optionMap, setOptionMap] = useState([]) // mapear todas as opções presente na página main
    const [optionMapNumberId, setOptionMapNumberId] = useState([]) // capturar o número e a ID da opção atual do componente Main
    const [activePopupRepeatedAlternativesMain, setActivePopupRepeatedAlternativesMain] = useState(false) // ativa o componente PopupRepeatedAlternatives na Main

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
                return generateNewQuestionMain(); // quando o número randômico for 1 ou 2 ativar a função
            case 3:
                return '/page-multi'; // quando o número randômico for 3 ir para página multi

            default:
                return '/';

        }

    };

    function generateNewQuestionMain() {
        if (nextQuestion) {            
            const random = uniqueRandomMain(listUnicQuestionsContextLength) // chamando a função que gera número randômico
            setRandomIndex(random)
    
            // gerando novas questões
            setNextQuestion(listUnicQuestionsContext[random])

        }

    }  

    return(
        <div className={styles.main}>           
            <Question 
                question={question} 
            
            />

            <MenuTools 
                nextQuestion={nextQuestion} 
                setNextQuestion={setNextQuestion} 
                optionMap={optionMap} 
                setOptionMap={setOptionMap} 
                optionMapNumberId={optionMapNumberId}
                generateNewQuestionMain={generateNewQuestionMain}
                
            />

            {activePopupRepeatedAlternativesMain === true && 
                <PopupRepeatedAlternatives 
                    specificStyles={styles.popupRepeatedMain} 
                    textPopup={"Há alternativas repetidas! Por favor, antes de responder, altere as alternativas no Menu para que todas sejam diferentes, e então prossiga respondendo. Obrigado."} 
                    activePopup={setActivePopupRepeatedAlternativesMain}

                />
            }

            <Options  
                randomIndex={randomIndex}
                optionColor={optionColor}
                listOptions={listOptions}
                setListOptions={setListOptions}        
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
                nextQuestion={nextQuestion}
                setNextQuestion={setNextQuestion}
                setOptionMapNumberId={setOptionMapNumberId}
                listQuestions={listQuestions}

            />

            <ButtonAnswer            
                answerDisplay={answerDisplay}
                setAnswerDisplay={setAnswerDisplay}
                descriptionDisplay={descriptionDisplay}
                setDescriptionDisplay={setDescriptionDisplay}
                answer={answer}
                numberQuestion={numberQuestion}
                optionValidate={optionValidate}
                optionInvalidate={optionInvalidate}
                listOptions={listOptions}                      
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
                activePopupRepeatedAlternativesMain={activePopupRepeatedAlternativesMain}
                setActivePopupRepeatedAlternativesMain={setActivePopupRepeatedAlternativesMain}

            />

            <AnswerDescription 
                answer={answer} 
                srcImg={srcImg} 
                descriptionP={descriptionP}
                numberQuestion={numberQuestion}
                answerDisplay={answerDisplay}
                descriptionDisplay={descriptionDisplay}
                setDescriptionDisplay={setDescriptionDisplay}
                listOptions={listOptions}
                
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
