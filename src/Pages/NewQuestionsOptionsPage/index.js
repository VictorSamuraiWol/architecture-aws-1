import styles from './NewQuestionsOptionsPage.module.css'
import { useOutletContext } from 'react-router-dom'
import { useEffect } from 'react'
import FormsNewQuestionsOptionsPage from '../../Components/FormsNewQuestionsOptionsPage'
import Header from '../../Components/Header'

function CreateNewQuestionsOptions () {
 
    const { setActivePageFormsQuestionsOptions } = useOutletContext()

    
    useEffect(() => {
        // tornar a página ativa ao entrar na rota dela
        setActivePageFormsQuestionsOptions(true)

    }, [])

    return(
        <div className={styles.newQuestionsOptionsPage}>
            <Header title='Forms' />
            <FormsNewQuestionsOptionsPage className={styles.formsNewQuestionsOptionsPage} />
        </div>
    )
}

export default CreateNewQuestionsOptions
