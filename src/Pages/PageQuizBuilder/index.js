import styles from './PageQuizBuilder.module.css'
import HeaderLogin from '../../Components/HeaderLogin'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Loader from '../../Components/Loader'
import imageContentSoon from './../../imgs/bgPageContentSoon.png'
import { useContext, useEffect } from 'react'
import { DataContext } from '../../Components/DataContext'
import { useOutletContext } from 'react-router-dom'

function PageQuizBuilder() {

  const { loading } = useContext(DataContext)  
  const { loginValidate, setActivePageMulti, setActivePageMain, setActivePageDemo, setActivePageThreeMulti, setActivePageFormsQuestionsOptions, 
    setActivePageInfo, setActivePageQuizBuilder } = useOutletContext()

  useEffect(() => {
    // tornar a página ativa ao entrar na rota dela e desativa as demais
    setActivePageQuizBuilder(true)

    setActivePageDemo(false)
    setActivePageMain(false)
    setActivePageMulti(false)
    setActivePageThreeMulti(false)
    setActivePageFormsQuestionsOptions(false)
    setActivePageInfo(false)

  }, [setActivePageQuizBuilder, setActivePageDemo, setActivePageMain, setActivePageMulti, setActivePageThreeMulti, setActivePageFormsQuestionsOptions, setActivePageInfo])

  return (
    <div className={styles.quizBuilder}>
      {/* criar este componente já que se repete muito */}
      {!loginValidate && 
        <>
          <HeaderLogin />
          <main className={styles.bgLogin}></main>

        </>
      }

      {loginValidate && 
        <>
          <Header />
          <main className={styles.mainPageQuizBuilder}>
            <h1 className={styles.titlePage}>Quiz Builder</h1>

            <img 
              className={styles.imageContentSoon}
              src={imageContentSoon} 
              alt='img content soon' 
            />
          </main>
        
        </>
      }

      <Footer />           
            
      {loading && <Loader />}

    </div>
  )

}

export default PageQuizBuilder;
