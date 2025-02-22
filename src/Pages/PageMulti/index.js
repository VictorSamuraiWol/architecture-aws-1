import styles from './PageMulti.module.css';
import MultiMain from '../../Components/MultiMain';
import { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

function PageMulti() {

    const [multiQuestions, setMultiQuestions] = useState([]);
    const [multiOptions, setMultiOptions] = useState([]);
    const [answerDisplay, setAnswerDisplay] = useState(styles.invisible);
    const [descriptionDisplay, setDescriptionDisplay] = useState(styles.invisible);
    const [optionValidate, setOptionValidate] = useState(styles.optionValidate);
    const [optionInvalidate, setOptionInvalidate] = useState(styles.optionInvalidate);

    useEffect(() => {
        fetch("http://localhost:3001/multiQuestions")
        .then(res => res.json())
        .then(data => {        
          setMultiQuestions(data)
       
  
        })
        .catch(e => console.log(e))
  
      }, [])

    return(
        <div key={Object.values(multiQuestions)[5]}>
            <Header 
                title={multiQuestions.map(e => e.title)}
                multiQuestions={multiQuestions}
            />

            <MultiMain 
                question={multiQuestions.map(e => e.question)} 
                answer={multiQuestions.map(e => e.answer)} 
                srcImg={multiQuestions.map(e => e.srcImg)}
                descriptionP={multiQuestions.map(e => e.descriptionP)}
                elementId={multiQuestions.map(e => e.id)}
                multiOptions={multiOptions}
                setMultiOptions={setMultiOptions}
                answerDisplay={answerDisplay}
                setAnswerDisplay={setAnswerDisplay}
                descriptionDisplay={descriptionDisplay}
                setDescriptionDisplay={setDescriptionDisplay}
                optionValidate={optionValidate}
                optionInvalidate={optionInvalidate}               
            />

            <Footer />
        
        </div> 

    )
}

export default PageMulti
