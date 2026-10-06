import styles from './PageNewQuestionsOptions.module.css'
import HeaderLogin from '../../Components/HeaderLogin'
import Header from '../../Components/Header'
import FormsNewQuestionsOptions from '../../Components/FormsNewQuestionsOptions'
import Loader from '../../Components/Loader'
import Footer from '../../Components/Footer'
import { useContext, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { DataContext } from '../../Components/DataContext'

function PageNewQuestionsOptions() {
 
    const { loginValidate, setActivePageFormsQuestionsOptions, setActivePageDemo, setActivePageMain, setActivePageMulti, setActivePageThreeMulti, 
        setActivePageInfo, setActivePageQuizBuilder } = useOutletContext()

    const { loading } = useContext(DataContext)

    useEffect(() => {
        // tornar a página ativa ao entrar na rota dela e desativa as demais
        setActivePageFormsQuestionsOptions(true)
        
        setActivePageDemo(false)
        setActivePageMain(false)
        setActivePageMulti(false)
        setActivePageThreeMulti(false)
        setActivePageInfo(false)
        setActivePageQuizBuilder(false)

    }, [setActivePageFormsQuestionsOptions, setActivePageDemo, setActivePageMain, setActivePageMulti, setActivePageThreeMulti, setActivePageInfo, setActivePageQuizBuilder])

    return(
        <div className={styles.newQuestionsOptionsPage}>
            {!loginValidate && 
            <>
                <HeaderLogin />
                <main className={styles.bgLogin}></main>

            </>}
            
            {loginValidate &&
            <>
                <Header title='Forms' />
                <FormsNewQuestionsOptions className={styles.formsNewQuestionsOptions} />
            
            </>}

            <Footer />

            {loading && <Loader />}

        </div>

    )

}

export default PageNewQuestionsOptions
