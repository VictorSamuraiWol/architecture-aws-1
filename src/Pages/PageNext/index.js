import styles from './PageNext.module.css';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Main from '../../Components/Main';
import { useEffect, useState } from 'react';
import soundNextPage from '../../audios/paperNextPage.mp3';

function PageNext() {

    const [nextQuestions, setNextQuestions] = useState([]);
    const [listQuestions, setListQuestions] = useState([]);
    const [optionsMainAble, setOptionsMainAble] = useState(styles.invisible);
    const [optionsAble, setOptionsAble] = useState(styles.visible);
    const [validate, setValidate] = useState(false);
    const [newOptions, setNewOptions] = useState([]);
    const [restartOptions, setRestartOptions] = useState({
        "option1": "a) Requester Pays.",
        "option2": "b) Server Access Logging.",
        "option3": "c) Versioning.",
        "option4": "d) Policies.",
        "option5": "e) Static Website Hosting."
    });
    const [answerDisplay, setAnswerDisplay] = useState(styles.invisible);
    const [descriptionDisplay, setDescriptionDisplay] = useState(styles.invisible);
    const [optionValidate, setOptionValidate] = useState(styles.optionValidate);
    const [optionInvalidate, setOptionInvalidate] = useState(styles.optionInvalidate);
    const [randomIndex, setRandomIndex] = useState(0)
    const [arr, setArr] = useState([])
    const [arrUnicIndex, setArrUnicIndex] = useState([])

   


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

    function cleanOptions() {
        //clean radio input
        const inputAll = document.querySelectorAll('input');
        const optionNext = document.querySelectorAll('.optionNext');

        inputAll.forEach(e => e.checked = false)
        for(let w=0; w < 5; w++) {
            if (restartOptions && optionNext[w].classList.contains(optionInvalidate)) {
                optionNext[w].classList.remove(optionInvalidate);
            } else if ((restartOptions && optionNext[w].classList.contains(optionValidate))) {
                optionNext[w].classList.remove(optionValidate);
            } else {}
                  
        }

    }

    function optionsAbled() {
        setOptionsAble(styles.visible)

    }  

    function randomQuestionsOptions() {
        setRandomIndex(Math.floor(Math.random()*listQuestions.length))
        setArr([...arr, randomIndex])
        //generate unic index in array
        setArrUnicIndex([...new Set(arr)])

        if (arrUnicIndex.length === listQuestions.length) {
            setArr([])
            setNextQuestions(listQuestions[randomIndex])
            setRestartOptions(newOptions[randomIndex])
        } else if (arr.includes(randomIndex)) {
            setRandomIndex(Math.floor(Math.random()*listQuestions.length))
            if (arr.includes(randomIndex)) {
                setNextQuestions(listQuestions[randomIndex])
                setRestartOptions(newOptions[randomIndex])
                if (arr.includes(randomIndex)) {
                    setNextQuestions(listQuestions[randomIndex])
                    setRestartOptions(newOptions[randomIndex])
                }
            }
        } else {
            setNextQuestions(listQuestions[randomIndex])
            setRestartOptions(newOptions[randomIndex])
        }

    }

    function soundNextPageFunc() {
        const newSoundNextPage = new Audio(soundNextPage);
        newSoundNextPage.play()

    }

    function funcNewRequest() {
        //sound when pass the next page
        soundNextPageFunc()

        //Clean options' styles
        cleanOptions()
        
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
                title={Object.values(nextQuestions)[0]}
                nextQuestions={nextQuestions}
                />

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

                    optionValidate={optionValidate}
                    optionInvalidate={optionInvalidate}
                >
                </Main>     

                <Footer />    
            </div>           

        </div>
    )
}

export default PageNext;
