import styles from './PageNext.module.css';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Main from '../../Components/Main';
import { useEffect, useState } from 'react';

function PageNext() {

    const [nextQuestions, setNextQuestions] = useState('');
    const [listQuestions, setListQuestions] = useState([]);
  
    useEffect(() => {
      fetch(`http://localhost:3000/questions`)
      .then(res => res.json())
      .then(data => {
        
        setListQuestions(data)
          
        const randomIndex = Math.floor(Math.random()*data.length);
        const randomElement = data[randomIndex]

        console.log(randomIndex)
        console.log(randomElement)
        setNextQuestions(randomElement)
      })
      .catch(e => console.log(e))
    }, [])

    
    function funcNewRequest() {
        const randomIndex = Math.floor(Math.random()*listQuestions.length);
        const randomElement = listQuestions[randomIndex]

        setNextQuestions(randomElement)    
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
                >
                </Main>     

                <Footer />    
            </div>            

        </div>
    )
}

export default PageNext;
