import styles from './PageDemo.module.css'
import HeaderLogin from '../../Components/HeaderLogin'
import Header from '../../Components/Header'
import backgroundImage from '../../imgs/cloud-neon-vibe.png'
import Main from '../../Components/Main'
import Footer from '../../Components/Footer'
import { useOutletContext } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../Components/DataContext'

function PageDemo() {

  const { loginValidate, activePageDemo, setActivePageDemo, setActivePageMain, setActivePageMulti, setActivePageThreeMulti, activePageFormsQuestionsOptions, 
    setActivePageFormsQuestionsOptions, setActivePageInfo, setActivePageQuizBuilder, setActivePauseTimer } = useOutletContext()

  const { setGetApi, questionDemo, optionDemo } = useContext(DataContext)

  const [answerDescriptionDisplay, setAnswerDescriptionDisplay] = useState(styles.invisibleAnswerDescription)
  const [descriptionDisplay, setDescriptionDisplay] = useState(styles.invisibleDescription)

  useEffect(() => {
    // tornar a página ativa ao entrar na rota dela e desativa as demais
    setActivePageDemo(true)

    setActivePageMain(false) 
    setActivePageMulti(false) 
    setActivePageThreeMulti(false)
    setActivePageFormsQuestionsOptions(false)
    setActivePageInfo(false)
    setActivePageQuizBuilder(false)

    setActivePauseTimer(false) // desativa o pause do Timer ao mudar de página, retorna ao valor inicial

  }, [setActivePageDemo, setActivePageMain, setActivePageMulti, setActivePageThreeMulti, setActivePageFormsQuestionsOptions, setActivePageInfo, 
    setActivePageQuizBuilder, setActivePauseTimer])

  useEffect(() => {
    setGetApi(true)
    setTimeout(() => setGetApi(false), 300)

  }, [setGetApi])

  return (
    <div className={styles.pageDemoStyles}>
      <div 
          id='allQuestionsDemoId' 
          className={styles.allQuestionsDemoClass} 
          key='0'
      >
        {!loginValidate && 
        <>
          <HeaderLogin />
          <main className={styles.bgLogin}></main>

        </>}

        {/* background image */}
        {loginValidate && activePageFormsQuestionsOptions === false && 
        <img 
            className={`backgroundImageClass ${styles.backgroundImage}`} 
            src={backgroundImage} 
            alt='backgoundIimage'
        />}

        {loginValidate && 
        <>
          {/* reutilizando componentes da página Main */}
          <Header />

          <Main 
            question={questionDemo.questionText}
            answer={questionDemo.correctAnswer}
            iconDescription={questionDemo.iconDescription}
            imageDescription={questionDemo.imageDescription}
            description={questionDemo.description}
            questionNumber={questionDemo.questionNumber}
            elementId={questionDemo.id}
            answerDescriptionDisplay={answerDescriptionDisplay}
            setAnswerDescriptionDisplay={setAnswerDescriptionDisplay}
            descriptionDisplay={descriptionDisplay}
            setDescriptionDisplay={setDescriptionDisplay}             
            questionMain={questionDemo}
            optionMain={optionDemo}                
            optionMainNumberId={[0, 0]}
            optNum1={0}
            optNum2={1}
            optNum3={2}
            optNum4={3}
            optNum5={4}
            activePageDemo={activePageDemo}
          />

        </>}

        <Footer
          question={questionDemo} 
          option={optionDemo}
        />

      </div>

    </div>
      
  )

}

export default PageDemo;
