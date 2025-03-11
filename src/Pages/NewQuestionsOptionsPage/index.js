import styles from './NewQuestionsOptionsPage.module.css'
import { useOutletContext } from 'react-router-dom'
import { useEffect } from 'react'
import FormsNewQuestionsOptionsPage from '../../Components/FormsNewQuestionsOptionsPage'

function CreateNewQuestionsOptions () {
    
    const { setActivePageFormsQuestionsOptions } = useOutletContext()
    
    useEffect(() => {
        // tornar a página ativa ao entrar na rota dela
        setActivePageFormsQuestionsOptions(true)
    }, [])

    return(
        <div className={styles.newQuestionsOptionsPage}>
            <FormsNewQuestionsOptionsPage />
        </div>
    )
}

export default CreateNewQuestionsOptions
