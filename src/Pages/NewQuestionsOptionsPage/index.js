import styles from './NewQuestionsOptionsPage.module.css'
import { useOutletContext } from 'react-router-dom'
import { useEffect } from 'react'
import FormsNewQuestionsOptionsPage from '../../Components/FormsNewQuestionsOptionsPage'
import Header from '../../Components/Header'
import Loader from '../../Components/Loader'

function CreateNewQuestionsOptions () {
 
    const { setActivePageFormsQuestionsOptions, loading, setLoading } = useOutletContext()
    
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

export default CreateNewQuestionsOptions
