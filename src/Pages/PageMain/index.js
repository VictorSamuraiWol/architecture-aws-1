import styles from './PageMain.module.css';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Main from '../../Components/Main';
import { useEffect, useState } from 'react';

function PageMain() {
  
    const [newQuestions, setNewQuestions] = useState([]);
  
    useEffect(() => {
      fetch(`http://localhost:3000/questions`)
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
              title={Object.values(newQuestions)[0]}>
            </Header>
            <Main 
                question={Object.values(newQuestions)[1]} 
                answer={Object.values(newQuestions)[2]} 
                srcImg={Object.values(newQuestions)[3]}
                descriptionP={Object.values(newQuestions)[4]}
                elementId={Object.values(newQuestions)[5]} 
            >
            </Main>            
            <Footer>

            </Footer>
      </div>
    );
  }
  
  export default PageMain;