import styles from './NewQuestionsOptionsPage.module.css'
import Header from '../../Components/Header'
import FormsNewQuestionsOptionsPage from '../../Components/FormsNewQuestionsOptionsPage'
import Loader from '../../Components/Loader'
import { useContext, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { DataContext } from '../../Components/DataContext'

function NewQuestionsOptionsPage() {
 
    const { setActivePageFormsQuestionsOptions } = useOutletContext()

    const { loading, setLoading } = useContext(DataContext)
    
    useEffect(() => {

        // tornar a página ativa ao entrar na rota dela
        setActivePageFormsQuestionsOptions(true)
        
        // desabilitar o loading
        setLoading(false)

    }, [setActivePageFormsQuestionsOptions, setLoading])

    return(
        <div className={styles.newQuestionsOptionsPage}>
            
            <Header title='Forms' />
            <FormsNewQuestionsOptionsPage className={styles.formsNewQuestionsOptionsPage} />

            {loading && <Loader />}

        </div>

    )

}

export default NewQuestionsOptionsPage
