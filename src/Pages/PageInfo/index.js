import styles from './PageInfo.module.css'
import HeaderLogin from '../../Components/HeaderLogin'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Loader from '../../Components/Loader'
import { useContext, useEffect } from 'react'
import { DataContext } from '../../Components/DataContext'
import { useOutletContext } from 'react-router-dom'

function PageInfo() {

  const { loading } = useContext(DataContext)  
  const { loginValidate, setActivePageMulti, setActivePageMain, setActivePageDemo, setActivePageThreeMulti, setActivePageFormsQuestionsOptions, setActivePageInfo } = useOutletContext()

  useEffect(() => {
    // tornar a página ativa ao entrar na rota dela
    setActivePageInfo(true)

    setActivePageMulti(false)
    setActivePageMain(false)
    setActivePageDemo(false)
    setActivePageThreeMulti(false)
    setActivePageFormsQuestionsOptions(false)

  }, [setActivePageInfo, setActivePageDemo, setActivePageMain, setActivePageMulti, setActivePageThreeMulti, setActivePageFormsQuestionsOptions])

  return (
    <div className={styles.pageInfo}>
      {!loginValidate && 
        <>
          <HeaderLogin />
          <main className={styles.bgLogin}></main>

        </>
      }

      {loginValidate && 
        <>
          <Header />

          <main className={styles.mainPageInfo}></main>
        
        </>
      }

      <Footer />           
            
      {loading && <Loader />}

    </div>
  )

}

export default PageInfo
