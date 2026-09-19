import styles from './PageNewQuestionsOptionsPage.module.css'
import HeaderLogin from '../../Components/HeaderLogin'
import Header from '../../Components/Header'
import FormsNewQuestionsOptionsPage from '../../Components/FormsNewQuestionsOptionsPage'
import Loader from '../../Components/Loader'
import Footer from '../../Components/Footer'
import { useContext, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { DataContext } from '../../Components/DataContext'

function PageNewQuestionsOptionsPage() {
 
    const { loginValidate, setActivePageFormsQuestionsOptions } = useOutletContext()

    const { loading, setLoading } = useContext(DataContext)
    
    useEffect(() => {

        // tornar a página ativa ao entrar na rota dela
        setActivePageFormsQuestionsOptions(true)
        
        // desabilitar o loading
        setLoading(false)

    }, [setActivePageFormsQuestionsOptions, setLoading])

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
                <FormsNewQuestionsOptionsPage className={styles.formsNewQuestionsOptionsPage} />
            
            </>}

            <Footer />

            {loading && <Loader />}

        </div>

    )

}

export default PageNewQuestionsOptionsPage
