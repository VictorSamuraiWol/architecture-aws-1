import styles from './FormsNewQuestionsOptions.module.css'
import CampoQuestionsOptions from './CamposQuestionsOptions'

function FormsNewQuestionsOptionsPage() {

    function onSave() {
        console.log('ok')
    }

    return(
        <div className={styles.formsNewQuestionsOptions}>
            <form onSubmit={onSave} className={styles.form}>
                <h1>Question's Form</h1>
                <CampoQuestionsOptions 
                    nome1="Title:" 
                    nome2="Question:" 
                    nome3="Answer:" 
                    nome4="Source Image:" 
                    nome5="Description:" 
                    nome6="Question's number:" 
                />
            </form>

            <form onSubmit={onSave} className={styles.form}>
                <h1>Option's Form</h1>
                <CampoQuestionsOptions 
                    nome1="Option 1:" 
                    nome2="Option 2:" 
                    nome3="Option 3:" 
                    nome4="Option 4:"                
                    nome5="Option 5:" 
                    nome6="Option's number:"
                    optionClass={styles.optionClass}
                />
            </form>
        </div>
    )
}

export default FormsNewQuestionsOptionsPage
