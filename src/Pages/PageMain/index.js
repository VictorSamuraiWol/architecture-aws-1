import styles from './PageMain.module.css';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Main from '../../Components/Main';
import { useEffect, useState } from 'react';
import NotRequest from '../../Components/NotRequest';

function PageMain() {
  
    const [newQuestions, setNewQuestions] = useState([]);
    const [answerMainDisplay, setAnswerMainDisplay] = useState(styles.invisible);
    const [descriptionMainDisplay, setDescriptionMainDisplay] = useState(styles.invisible);
    const validateAnswerMain = Object.values(newQuestions)[2];

    useEffect(() => {
      //obs: using port 3001, mock questions's database
      fetch("http://localhost:3001/questions")
      .then(res => res.json())
      .then(data => {
        
        const randomElement = data[0]
        
        setNewQuestions(randomElement) 
        
      })
      .catch(e => console.log(e))
    }, [])    

    return (
      <div className='allquestions' key={Object.values(newQuestions)[5]}>
            <Header 
              title={Object.values(newQuestions)[0]}
              newQuestions={newQuestions}
            />

            {Object.values(newQuestions).length > 0 && 
              <Main 
                  question={Object.values(newQuestions)[1]} 
                  answer={Object.values(newQuestions)[2]} 
                  srcImg={Object.values(newQuestions)[3]}
                  descriptionP={Object.values(newQuestions)[4]}
                  elementId={Object.values(newQuestions)[5]}
                  answerMainDisplay={answerMainDisplay}
                  descriptionMainDisplay={descriptionMainDisplay}
                  setAnswerMainDisplay={setAnswerMainDisplay}
                  setDescriptionMainDisplay={setDescriptionMainDisplay}
                  validateAnswerMain={validateAnswerMain}
              >
              </Main>

            }

            {(Object.values(newQuestions).length === 0) &&
              <NotRequest />

            }

            <Footer />

      </div>
    );
    
  }
  
  export default PageMain;
