import styles from './PageNext.module.css';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Main from '../../Components/Main';
import { useEffect, useState } from 'react';

function PageNext() {

    const [nextQuestions, setNextQuestions] = useState('');
    const [listQuestions, setListQuestions] = useState([]);
    const [optionsMainAble, setOptionsMainAble] = useState(styles.invisible);
    const [optionsAble, setOptionsAble] = useState(styles.visible);
    const [validate, setValidate] = useState(false);
    const [newOptions, setNewOptions] = useState([]);
    const [restartOptions, setRestartOptions] = useState({
        "option1": "a) Requester Pays",
        "option2": "b) Server Access Logging",
        "option3": "c) Versioning",
        "option4": "d) Policies",
        "option5": "e) Static Website Hosting"
    });
    const [answerDisplay, setAnswerDisplay] = useState(styles.invisible);
    const [descriptionDisplay, setDescriptionDisplay] = useState(styles.invisible);

    useEffect(() => {
      fetch("http://localhost:3001/questions")
      .then(res => res.json())
      .then(data => {        
        setListQuestions(data)
        
        //first question on the pageNext
        setNextQuestions(data[1])        

      })
      .catch(e => console.log(e))
    }, [])

    function clearAnswer() {
        setAnswerDisplay(styles.invisible)
        setDescriptionDisplay(styles.invisible)

    }

    function optionsAbled() {
        setOptionsAble(styles.visible)

    }  

    function randomQuestionsOptions() {
        const randomIndex = Math.floor(Math.random()*listQuestions.length);
        
        setRestartOptions(newOptions)

        setNextQuestions(listQuestions[randomIndex])
        setRestartOptions(newOptions[randomIndex])

    }

    function funcNewRequest() {        
        //Generating random numbers
        randomQuestionsOptions()

        //Abled options
        optionsAbled()
        
        //validate options
        setValidate('true')

        clearAnswer()

    }

    return(
        <div>
            <div className='allquestions' key={Object.values(nextQuestions)[5]}>        
                <Header 
                title={Object.values(nextQuestions)[0]}>
                </Header>

                <Main 
                    question={Object.values(nextQuestions)[1]} 
                    answer={Object.values(nextQuestions)[2]} 
                    srcImg={Object.values(nextQuestions)[3]}
                    descriptionP={Object.values(nextQuestions)[4]}
                    elementId={Object.values(nextQuestions)[5]}
                    newRequest={funcNewRequest}
                    optionsMainAble={optionsMainAble}
                    optionsAble={optionsAble}
                    validate={validate}
                    newOptions={newOptions}
                    setNewOptions={setNewOptions}
                    restartOptions={restartOptions}
                    setRestartOptions={setRestartOptions}                    
                    answerDisplay={answerDisplay}
                    descriptionDisplay={descriptionDisplay}
                    setAnswerDisplay={setAnswerDisplay}
                    setDescriptionDisplay={setDescriptionDisplay}
                >
                </Main>     

                <Footer />    
            </div>           

        </div>
    )
}

export default PageNext;
