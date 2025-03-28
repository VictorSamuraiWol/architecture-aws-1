import { useEffect, useState } from 'react'
import styles from './FieldQuestionOption.module.css'

function FieldQuestionOption({ 
    nome, optionClass, labelTarget, setLabelTarget, readyToCleanAll, setReadyToCleanAll, readyToSendForm1, readyToSendForm2, readyToSendForm3, readyToSendForm4, valueForm1, setValueForm1, valueForm2, setValueForm2, valueForm3, setValueForm3, valueForm4,   setValueForm4
}) {

    // valor capturado do textarea
    const [newValue, setNewValue] = useState("")

    // valores dos títulos dos 4 forms
    const [formsTitlesTarget, setFormsTitlesTarget] = useState("")

    // valores dos campos do textrea
    const [valuesForms, setValuesForms] = useState("")

    function newValueFunc(e) {

        // capturar o texto da label do form alvo
        setLabelTarget(e.target.parentElement.children[0].textContent)
        // console.log(labelTarget, '(labelTarget l.20)')

        // capturar o texto do título do form alvo
        setFormsTitlesTarget(e.target.parentElement.parentElement.parentElement.children[0].textContent)
        // console.log(formsTitlesTarget, '(formsTitlesTarget l.24)')

        setNewValue(e.target.value)

    }

    //atualizando os valores e certificando que todos estão capturados antes de salvar os dados dos forms
    useEffect(() => {
        
        if (formsTitlesTarget  === "Form 1 (Questions)") { // form 1

            setValuesForms(valueForm1)

            if (readyToCleanAll === false) {

                labelTarget === "Title:" && setValueForm1(newValue)

                labelTarget === "Question:" && setValueForm1(newValue)
            
                labelTarget === "Answer:" && setValueForm1(newValue)

                labelTarget === "Source Image:" && setValueForm1(newValue)

                labelTarget === "Description:" && setValueForm1(newValue)

                labelTarget === "Number:" && setValueForm1(newValue)
            
            } else if (readyToCleanAll === true) {

                // zera
                setNewValue('')
                // retorna ao valor inicial
                setReadyToCleanAll(false)

            }

        } else if (formsTitlesTarget === "Form 2 (Options)") { // form 2

            setValuesForms(valueForm2)

            if (readyToCleanAll === false) {

                labelTarget === "Option 1:" && setValueForm2(newValue)

                labelTarget === "Option 2:" && setValueForm2(newValue)
                
                labelTarget === "Option 3:" && setValueForm2(newValue)

                labelTarget === "Option 4:" && setValueForm2(newValue)

                labelTarget === "Option 5:" && setValueForm2(newValue)

                labelTarget === "Number:" && setValueForm2(newValue)

            } else if (readyToCleanAll === true) {

                //zera
                setNewValue('')
                // retorna ao valor inicial
                setReadyToCleanAll(false)

            }

        } else if (formsTitlesTarget === "Form 3 (MultiQuestions)") { // form 3

            setValuesForms(valueForm3)

            if (readyToCleanAll === false) {

                labelTarget === "Title:" && setValueForm3(newValue)

                labelTarget === "Question:" && setValueForm3(newValue)

                labelTarget === "Answer's Text:" && setValueForm3(newValue)

                labelTarget === "Source Image:" && setValueForm3(newValue)

                labelTarget === "Description:" && setValueForm3(newValue)
                
                labelTarget === "Number:" && setValueForm3(newValue)

            } else if (readyToCleanAll === true) {

                // zera
                setNewValue('')
                // retorna ao valor inicial
                setReadyToCleanAll(false)

            }

        } else if (formsTitlesTarget === "Form 4 (MultiOptions)") { // form 4

            setValuesForms(valueForm4)  

            if (readyToCleanAll === false) {

                labelTarget === "Option 1:" && setValueForm4(newValue)
        
                labelTarget === "Option 2:" && setValueForm4(newValue)
                
                labelTarget === "Option 3:" && setValueForm4(newValue)
                
                labelTarget === "Option 4:" && setValueForm4(newValue)
                
                labelTarget === "Option 5:" && setValueForm4(newValue)
                
                labelTarget === "Number:" && setValueForm4(newValue)

            } else if (readyToCleanAll === true) {

                // zera
                setNewValue('')
                // retorna ao valor inicial
                setReadyToCleanAll(false)

            }

        }  
 
    }, [formsTitlesTarget, labelTarget, readyToCleanAll, setReadyToCleanAll, newValue, valueForm1, setValueForm1, valueForm2, setValueForm2, valueForm3, setValueForm3, valueForm4, setValueForm4, readyToSendForm1, readyToSendForm2, readyToSendForm3, readyToSendForm4])

    return(
        <div className={styles.field}>
            <div className={styles.labelTextarea}>
                <label className={optionClass}>{nome}</label>
                <textarea 
                    onChange={(e) => newValueFunc(e)}
                    value={valuesForms}
                />
            </div>
        </div>
    )
}

export default FieldQuestionOption
